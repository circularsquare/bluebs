import update from 'react-addons-update'

const resources = (state = [], action) => {
  switch (action.type) {
    case 'HARVEST':
      const current = state[action.name].number
      var max = 10000000000000
      if('max'+action.name in Object.keys(state)){
        max = state['max'+action.name].number}
      if(current+action.n<=0){
        return update(state, {[action.name]: {number: {$set: 0}}})}
      if(current+action.n>=max){
        return update(state, {[action.name]: {number: {$set: max}}})}
      else{
        return update(state, {[action.name]: {number: {$set: current+action.n}}})}
    case 'SET':
      return update(state, {[action.name]: {number: {$set: action.n}}})
    case 'LINK_EFFECT':
      var name = action.name
      var n = action.n
      return update(state, {[action.target]: {effects: {[name]: {$set: n}}}})
    case 'LINK_INCOME':
      var name = action.name
      var n = action.n
      return update(state, {[action.target]: {incomes: {[name]: {$set: n}}}})
    default:
      return state
  }
}
export default resources
