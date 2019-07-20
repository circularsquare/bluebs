import { connect } from 'react-redux'
import {
  build,
  harvest,
  addMaxBirbs,
  sendInfo,
  applyEffects} from '../actions'
import Building from '../components/Building'

const mapStateToProps = state => ({
  buildings: state.buildings,
  visibleBuildings: state.info.visibleBuildings,
  resources: state.resources,
  effects: state.effects,
})


const mapDispatchToProps = ({
  build,
  harvest,
  addMaxBirbs,
  sendInfo,
  applyEffects,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Building)
