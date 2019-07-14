import { connect } from 'react-redux'
import MapTab from '../../components/tabs/MapTab'
import {
  addMap
} from '../../actions'

const mapStateToProps = state => ({
  map: state.info.map
})

const mapDispatchToProps = {
  addMap
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(MapTab)
