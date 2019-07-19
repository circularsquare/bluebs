import { connect } from 'react-redux'
import App from '../components/App'


import {
  harvest,
  build,
  adoptBirb,
  sendInfo,
  tick,
  addTab,
  addResource,
  addMap,
  addBuilding,
  moveUnit,
  set,
  addMaxBirbs,
  linkIncome,
  linkEffect,
} from '../actions'

const mapStateToProps = state => ({
  resources: state.resources,
  birbs: state.birbs,
  buildings: state.buildings,
  info: state.info,
  units: state.units,
  tech: state.tech,
  effects: state.effects,
})

const mapDispatchToProps = {
  harvest,
  build,
  adoptBirb,
  sendInfo,
  tick,
  addTab,
  addResource,
  addMap,
  addBuilding,
  moveUnit,
  set,
  addMaxBirbs,
  linkIncome,
  linkEffect,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(App)
