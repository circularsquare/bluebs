import { connect } from 'react-redux'
import {
  build,
  harvest,
  addMaxBirbs,
  sendInfo,} from '../actions'
import Building from '../components/Building'

const mapStateToProps = state => ({
  buildings: state.buildings,
  visibleBuildings: state.info.visibleBuildings,
  resources: state.resources,
})


const mapDispatchToProps = ({
  build,
  harvest,
  addMaxBirbs,
  sendInfo,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Building)
