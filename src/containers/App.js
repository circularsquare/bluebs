import { connect } from 'react-redux'
import App from '../components/App'


import {
  harvest,
  adoptBirb,
  sendInfo,
  tick,
  addTab,
  addResource,
  addMap,
  moveUnit,
} from '../actions'

const mapStateToProps = state => ({
  resources: state.resources,
  birbs: state.birbs,
  info: state.info,
  units: state.units,
})

const mapDispatchToProps = {
  harvest,
  adoptBirb,
  sendInfo,
  tick,
  addTab,
  addResource,
  addMap,
  moveUnit,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(App)
