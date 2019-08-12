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
  addBuilding,
  moveUnit,
  spawnUnit,
  unitMove,
  income,
  applyEffects,
  setHunger,
  setProgression,
  research,
  hire,
  load,
  collect,
  setUnitDest,
  toggleDisplay,
} from '../actions'

const mapStateToProps = state => ({
  state: state,
  resources: state.resources,
  buildings: state.buildings,
  info: state.info,
  units: state.units,
  tiles: state.tiles,
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
  addBuilding,
  moveUnit,
  spawnUnit,
  unitMove,
  income,
  applyEffects,
  setHunger,
  setProgression,
  research,
  hire,
  load,
  collect,
  setUnitDest,
  toggleDisplay,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(App)
