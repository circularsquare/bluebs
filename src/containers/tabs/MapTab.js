import { connect } from 'react-redux'
import MapTab from '../../components/tabs/MapTab'
import {
  spawnUnit,
  sendInfo,
  makeTile,
  selectTile,
} from '../../actions'

const mapStateToProps = state => ({
  map: state.info.map,
  units: state.units,
  info: state.info,
})

const mapDispatchToProps = ({
  spawnUnit,
  sendInfo,
  makeTile,
  selectTile,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(MapTab)
