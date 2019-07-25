import { connect } from 'react-redux'
import {
  sendInfo,
  selectTile,
  makeTile,} from '../actions'
import Map from '../components/Map'

const mapStateToProps = state => ({
  tiles: state.info.tiles,
  info: state.info,
  units: state.units,
})

const mapDispatchToProps = ({
  sendInfo,
  selectTile,
  makeTile,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Map)
