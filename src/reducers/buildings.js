
import update from 'react-addons-update'

const buildings = (state = [], action) => {
  switch (action.type) {
    case 'BUILD':
      const newNum = state[action.name].number+action.n
      return update(state, {[action.name]: {number: {$set: newNum}}})

      var newState = Object.assign({}, state)
      newState[action.name].number = state[action.name].number+action.n
      return newState
    default:
      return state
    }
  }

export default buildings
