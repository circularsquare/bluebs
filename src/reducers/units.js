import update from 'react-addons-update'

const units = (state = [], action) => {
  switch (action.type) {
    case 'SPAWN_UNIT':
      var newUnit = {
        id: action.id,
        name: action.name,
        species: action.species,
        job: action.job,
        location: action.location};
      return [...state, newUnit]
    case 'MOVE_UNIT':
      const newLoc = [action.x + state[action.id].location[0], action.y + state[action.id].location[1]]
      return update(state, {[action.id]: {location: {$set: newLoc}}})
    default:
      return state
    }
  }

export default units
