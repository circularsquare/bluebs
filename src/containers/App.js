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
  spawnUnit,
  income,
  applyEffects,
  setHunger,
  setProgression,
} from '../actions'

const mapStateToProps = state => ({
  resources: state.resources,
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
  spawnUnit,
  income,
  applyEffects,
  setHunger,
  setProgression,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(App)
