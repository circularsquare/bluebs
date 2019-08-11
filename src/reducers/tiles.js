import update from 'react-addons-update'

const tiles = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_TILE':
      return update(state, {[action.coordinates]: {$set: action.details}})
    //needa make a BUILD action
    default:
      return state
    }
  }

export default tiles
