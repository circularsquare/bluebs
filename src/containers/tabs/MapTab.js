import { connect } from 'react-redux'
import MapTab from '../../components/tabs/MapTab'
import {
  spawnUnit,
  setUnitDest,
  sendInfo,
  makeTile,
  selectTile,
  setCorner,
  moveCorner,
  setPixSize,
  hireTraveller,
} from '../../actions'

const mapStateToProps = state => ({
  map: state.info.map,
  units: state.units,
  info: state.info,
  tiles: state.tiles,
})

const mapDispatchToProps = ({
  spawnUnit,
  setUnitDest,
  sendInfo,
  makeTile,
  selectTile,
  setCorner,
  moveCorner,
  setPixSize,
  hireTraveller,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(MapTab)
