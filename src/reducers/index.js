import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'
import resources from './resources'
import info from './info'
import birbs from './birbs'

//reducers that mess with one slice of state go in these children reducer files
const smolReducers = combineReducers({
  resources,
  info,
  birbs,
})

//reducers that mess with entire state go here
const bigReducers = (state = [], action) => {
  switch (action.type) {
    case 'TICK':
      return state //this shit sucks so i moved it somewhere else, keeping for sake of formatting tho
    default:
      return state
  }
}

const rootReducer = reduceReducers(
  smolReducers,
  bigReducers
)

export default rootReducer
