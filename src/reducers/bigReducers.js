import update from 'react-addons-update'

var applyEffects = (state, name, n) => { //why do i have to use arrow notation here???
  var newResources = Object.assign({}, state.resources)
  var effects = state.effects.constant[name]
  for (var target of Object.keys(effects)){
    for (var resource of Object.keys(state.resources)){
      if(resource==target){
        newResources[resource] += effects[target]*n}}}
  return newResources}

const bigReducers = (state = [], action) => {
  switch (action.type) {
    case 'APPLY_EFFECTS': //to be called on the creation of a generator (ex: building or research)
      return {...state, resources: applyEffects(state, action.name, action.n)} //only incomes resources for now
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
              newResources[resource] = max}}}}
        return {...state, resources: newResources}

    default:
      return state
  }
}
export default bigReducers














//
