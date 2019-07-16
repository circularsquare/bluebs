import { connect } from 'react-redux'
import { sendInfo} from '../actions'
import Map from '../components/Map'

const mapStateToProps = state => ({
  map: state.info.map,
  units: state.units,
})

const mapDispatchToProps = ({
  sendInfo,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Map)
