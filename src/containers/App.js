import { connect } from 'react-redux'
import App from '../components/App'


import {
  harvest,
  build,
  adoptBirb,
  set,
  sendInfo,
  tick,
  addTab,
  addResource,
  addMap,
  addBuilding,
  moveUnit,
  spawnUnit,
  income,
  applyEffects,
  setHunger,
  setProgression,
  research,
  hire,
  load,
} from '../actions'

const mapStateToProps = state => ({
  state: state,
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
  set,
  sendInfo,
  tick,
  addTab,
  addResource,
  addMap,
  addBuilding,
  moveUnit,
  spawnUnit,
  income,
  applyEffects,
  setHunger,
  setProgression,
  research,
  hire,
  load,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(App)
