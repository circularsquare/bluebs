import update from 'react-addons-update'

const resources = (state = [], action) => {
  switch (action.type) {
    case 'HARVEST':
      var newState = Object.assign({}, state)
      const maxName = 'max'+action.name
      if (state[action.name]+action.n<=0){
        newState[action.name] = 0}
      else if (state[action.name]<state[maxName]-action.n){
        newState[action.name] = state[action.name]+action.n}
      else {newState[action.name] = state[maxName]}
      return newState
    case 'SET_MAX':
      const newMax = state[action.name]+action.n
      return update(state, {[action.name]: {$set: newMax}})
    default:
      return state
  }
}
export default resources
