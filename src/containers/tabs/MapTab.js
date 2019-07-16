import { connect } from 'react-redux'
import MapTab from '../../components/tabs/MapTab'
import {
  addMap,
  spawnUnit,
  sendInfo,
} from '../../actions'

const mapStateToProps = state => ({
  map: state.info.map,
  units: state.units,
})

const mapDispatchToProps = ({
  addMap,
  spawnUnit,
  sendInfo,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(MapTab)
