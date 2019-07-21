import update from 'react-addons-update'

export var applyEffects = (resources, effects, name, n) => { //why do i have to use arrow notation here???
  var newResources = Object.assign({}, resources)
  var effects = effects.constant[name]
  for (var target of Object.keys(effects)){
    for (var resource of Object.keys(resources)){ //only affects resources
      if(resource==target){
        newResources[resource] += effects[target]*n}}}
  return newResources}

const bigReducers = (state = [], action) => {
  switch (action.type) {
    case 'APPLY_EFFECTS': //to be called on the creation of a generator (ex: building or research)
      return {...state, resources: applyEffects(state.resources, state.effects, action.name, action.n)}
    case 'APPLY_MODIFIERS':
      return state
    case 'INCOME': //only incomes resources
      var newResources = Object.assign({}, state.resources)
      var incomes = state.effects.income[action.name]
      for (var target of Object.keys(incomes)){
        for (var resource of Object.keys(state.resources)){
          if(resource==target){
            const current = state.resources[resource]
            var max = 10000000000000
            var amount=action.n*incomes[target]
            if('max'+resource in state.resources){
              max = state.resources['max'+resource]}
            newResources[resource]=current+amount
            if(current+amount<=0){
              newResources[resource] = 0}
            if(current+amount>max){
              newResources[resource] = max}
            var resourceChange = newResources[resource]-state.resources[resource]
            if (Object.keys(state.effects.constant).includes(resource) & resourceChange!=0){
              newResources = applyEffects(newResources, state.effects, resource, resourceChange)
            }}}}
      return {...state, resources: newResources}
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
