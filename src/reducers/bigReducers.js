import update from 'react-addons-update'
var getStuff = require('../modules/getStuff.js');

export var applyEffects = (resources, effects, name, n) => { //why do i have to use arrow notation here???
  var newResources = Object.assign({}, resources)
  var effects = effects.constant[name]
  if(effects){
    for (var target of Object.keys(effects)){
      for (var resource of Object.keys(resources)){ //only affects resources
        if(resource==target){
          newResources[resource] += effects[target]*n}}}}
  return newResources}
export var applyModifiers = (state, name, n) => {
  var effects = state.effects
  var prevNumberOfModifiers = getStuff.getNum(name, state.buildings, state.resources, state.tech)-1
  var newEffects = Object.assign({}, effects)
  var newResources = Object.assign({}, state.resources)
  var modifiers = effects.modifiers[name]
  if(modifiers){
    for (var targetGenerator of Object.keys(modifiers)){
      for (var targetResource of Object.keys(modifiers[targetGenerator])){
        if(modifiers[targetGenerator][targetResource].income==1){
          for (var generator of Object.keys(effects.income)){
            if (generator==targetGenerator){
              for (var resource of Object.keys(effects.income[generator])){
                if (resource==targetResource){
                  newEffects.income[generator][resource] /= (1+(prevNumberOfModifiers*modifiers[targetGenerator][targetResource].value))
                  newEffects.income[generator][resource] *= (1+((n+prevNumberOfModifiers)*modifiers[targetGenerator][targetResource].value))
                }
              }
            }
          }
        }
        else{
          for (var generator of Object.keys(effects.constant)){
            if(generator==targetGenerator){
              var numberOfGenerators = getStuff.getNum(generator, state.buildings, state.resources, state.tech)
              newResources = applyEffects(newResources, effects, generator, -numberOfGenerators)
              for (var resource of Object.keys(effects.constant[generator])){
                if (resource==targetResource){
                  console.log(newEffects.constant[generator][resource])
                  newEffects.constant[generator][resource] /= (1+(prevNumberOfModifiers*modifiers[targetGenerator][targetResource].value))
                  console.log(newEffects.constant[generator][resource])
                  newEffects.constant[generator][resource] *= (1+((n+prevNumberOfModifiers)*modifiers[targetGenerator][targetResource].value))
                  console.log(newEffects.constant[generator][resource])
                }
              }
              newResources = applyEffects(newResources, effects, generator, numberOfGenerators)
            }
          }
        }
      }
    }
  }
  return [newEffects, newResources]
}

const bigReducers = (state = [], action) => {
  switch (action.type) {
    case 'APPLY_EFFECTS': //to be called on the creation of a generator (ex: building or research)
      return {...state, resources: applyEffects(state.resources, state.effects, action.name, action.n)}
    case 'APPLY_MODIFIERS':
      var j = applyModifiers(state, action.name, action.n)
      return {...state, effects: j[0], resources: j[1]}
    case 'INCOME': //only incomes resources
      var newResources = Object.assign({}, state.resources)
      var incomes = state.effects.income[action.name]
      var enoughResources = true
      for (var target of Object.keys(incomes)){
        for (var resource of Object.keys(state.resources)){
          if(resource==target){
            const current = state.resources[resource]
            var max = 10000000000000
            var amount=action.n*incomes[target]
            if(state.info.allJobs.includes(action.name) | action.name=='birbs'){
              amount *= state.resources['happiness']}
            if('max'+resource in state.resources){
              max = state.resources['max'+resource]}
            newResources[resource]=current+amount
            if(current+amount<=0){
              enoughResources = false
              newResources[resource] = 0}
            if(current+amount>max){
              newResources[resource] = max}
            var resourceChange = newResources[resource]-state.resources[resource]
            if (Object.keys(state.effects.constant).includes(resource) & resourceChange!=0){
              newResources = applyEffects(newResources, state.effects, resource, resourceChange)
            }}}}
      if (enoughResources){
        return {...state, resources: newResources}}
      else {return state}
    case 'HARVEST':
      const current = state.resources[action.name]
      var max = 10000000000000
      if('max'+action.name in Object.keys(state)){
        max = state.resources['max'+action.name]}
      var newResource=current+action.n
      if(newResource<=0){
        newResource = 0}
      if(newResource>max){
        newResource = max}
      var resourceChange = newResource-state.resources[action.name]
      var newResources = Object.assign({}, state.resources)
      newResources[action.name]=newResource
      if (Object.keys(state.effects.constant).includes(action.name) & resourceChange!=0){
        newResources = applyEffects(newResources, state.effects, action.name, resourceChange)}
      return {...state, resources: newResources}
    case 'LOAD':
      return JSON.parse(localStorage.getItem('state'));
    default:
      return state
  }
}
export default bigReducers














//
