import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import resources from './resources'
import info from './info'
import buildings from './buildings'
import units from './units'
import tech from './tech'
import effects from './effects'

//reducers that mess with entire state go in here
import bigReducers from './bigReducers'

//reducers that mess with one slice of state go in these children reducer files
const smolReducers = combineReducers({
  resources,
  info,
  buildings,
  units,
  tech,
  effects,
})

const rootReducer = reduceReducers(
  smolReducers,
  bigReducers)

export default rootReducer
