import { connect } from 'react-redux'
import { } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = state => ({
  birbs: state.birbs.total,
  bluebs: state.resources.bluebs,
  wood: state.resources.wood,

  maxbirbs: state.birbs.maxbirbs,
  maxbluebs: state.resources.maxbluebs,
  maxwood: state.resources.maxwood,

  visibleResources: state.info.visibleResources,
  time: state.info.time,
})

const mapDispatchToProps = ({
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
