import { combineReducers } from 'redux'
import resources from './resources'
import visibleTabs from './visibleTabs'

export default combineReducers({
  resources,
  visibleTabs,
})
