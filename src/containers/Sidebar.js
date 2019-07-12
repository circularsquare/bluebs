import { connect } from 'react-redux'
import { } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = state => ({
  bluebs: state.resources.bluebs,
  birbs: state.resources.birbs,
  wood: state.resources.wood,

  maxbluebs: state.resources.maxbluebs,
  maxbirbs: state.resources.maxbirbs,
  maxwood: state.resources.maxwood,
})

const mapDispatchToProps = dispatch => ({

})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
