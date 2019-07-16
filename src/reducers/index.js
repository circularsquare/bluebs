import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import resources from './resources'
import info from './info'
import birbs from './birbs'
import buildings from './buildings'
import units from './units'

//reducers that mess with one slice of state go in these children reducer files
const smolReducers = combineReducers({
  resources,
  info,
  birbs,
  buildings,
  units,
})

//reducers that mess with entire state go here
const bigReducers = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = reduceReducers(
  smolReducers,
  bigReducers
)

export default rootReducer
