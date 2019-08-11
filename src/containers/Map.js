import { connect } from 'react-redux'
import {
  sendInfo,
  selectTile,
  makeTile,
  hireTraveller,} from '../actions'
import Map from '../components/Map'

const mapStateToProps = state => ({
  tiles: state.tiles,
  tileTypes: state.info.tileTypes,
  selectedTile: state.info.selectedTile,
  corner: state.info.corner,
  pixSize: state.info.pixSize,
  time: state.info.time,
  units: state.units,
})

const mapDispatchToProps = ({
  sendInfo,
  selectTile,
  makeTile,
  hireTraveller,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Map)
