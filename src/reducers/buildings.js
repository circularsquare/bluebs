
import update from 'react-addons-update'

const buildings = (state = [], action) => {
  switch (action.type) {
    case 'BUILD':
      const newNum = state[action.name].number+action.n
      return update(state, {[action.name]: {number: {$set: newNum}}})
    case 'INCREMENT_COST':
      const newCosts =  Object.assign({}, state[action.name].cost)
      if (action.n==1){
        for (var resource of Object.keys(newCosts)){
          newCosts[resource] = state[action.name].cost[resource]*state[action.name].costRatio}}
      if(action.n==-1){
        for (var resource of Object.keys(newCosts)){
          newCosts[resource] = state[action.name].cost[resource]/state[action.name].costRatio}}
      return update(state, {[action.name]: {cost: {$set: newCosts}}})
    default:
      return state
    }
  }
export default buildings
