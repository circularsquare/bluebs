import update from 'react-addons-update'

function fillUnit(newUnit){
  if (!newUnit.name){newUnit.name='haiyao liu'}
  if (!newUnit.job){newUnit.job='unemployed'}
  if (!newUnit.numtot){newUnit.numtot='urban'}
  if (!newUnit.home){newUnit.home=[3, 6]}
  if (!newUnit.work){newUnit.work=newUnit.home}
  if (!newUnit.coords){newUnit.coords=[newUnit.home[0]+.5, newUnit.home[1]+.5]}
  if (!newUnit.inventory){newUnit.inventory={}}
  if (!newUnit.capacity){newUnit.capacity=10}
  if (!newUnit.speed){newUnit.speed=.1}
  if (!newUnit.destination){newUnit.destination=null}
  if (!newUnit.display){newUnit.display=false}
  return newUnit
}

const units = (state = [], action) => {
  switch (action.type) {
    case 'SPAWN_UNIT':
      var newUnit = action.info
      newUnit.id = action.id
      newUnit = fillUnit(newUnit)
      newUnit.display = true
      return [...state, newUnit]
    case 'MOVE_UNIT':
      const newLoc = [action.x + state[action.id].coords[0], action.y + state[action.id].coords[1]]
      return update(state, {[action.id]: {coords: {$set: newLoc}}})
    case 'SET_UNIT_DEST':
      const dest = [action.x, action.y]
      return update(state, {[action.id]: {destination: {$set: dest}}})
    case 'UNIT_MOVE': {
      const dest = state[action.id].destination
      if(!dest){return state}
      const speed = state[action.id].speed
      const current = state[action.id].coords
      const dx = dest[0]-current[0]
      const dy = dest[1]-current[1]
      const distance = Math.sqrt(dx*dx + dy*dy)
      if(distance<speed/2){return state}
      const newLoc = [current[0]+dx*speed/distance, current[1]+dy*speed/distance]
      return update(state, {[action.id]: {coords: {$set: newLoc}}}) }
    case 'HIRE_TRAVELLER': {
      const unit = state[action.id]
      unit.home = action.home
      unit.work = action.work
      return
    }
    default:
      return state
    }
  }

export default units
