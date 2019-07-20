import update from 'react-addons-update'

const tech = (state = [], action) => {
  switch (action.type) {
    case 'RESEARCH':
      return update(state, {[action.name]: {researched: {$set: 1}}})
    default:
      return state
  }
}
export default tech
