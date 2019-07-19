import { connect } from 'react-redux'
import { } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = state => ({
  resources: state.resources,

  birbs: state.birbs,
  visibleResources: state.info.visibleResources,

  time: state.info.time,
  effects: state.effects,
})

const mapDispatchToProps = ({
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
