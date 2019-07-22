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

      /*so modifers should act on something like 'box storage of wood +20%' or 'box storage of everything +20%'
      or 'woodpecker income of wood 20%'
      or 'everything affecting blueb income +20%'
      so they need to have the shape {name, target, income, constant, percentage change}
      and to apply a modifier... for a specific name/target pair.. lets say
        libraries give 10% bonus income to knowledge
        we have 4 libraries and 1 otehr bldng giving 20%. so the current bonus is 60%
        current knowledge income is 100 so the bonused income is 160%
        well i guess for income we could just calculate it every time we income.
      so its really just for effects...... uh......
        lets say libraries give 10% bonus knowledgecap
        we have 4 libraries and 1 other bldng giving 20%, so current bonus is 1.4*1.2 again
        current knowledgecap is 100 so bonused cap is like 1.68
        and so for adding another library we just negative apply 4 library effects... then apply 5.
        so that means dividing by 1.4 and then multiplying by 1.5. */


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
