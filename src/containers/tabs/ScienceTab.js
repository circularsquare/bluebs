import { connect } from 'react-redux'
import ScienceTab from '../../components/tabs/ScienceTab'
import {
  research,
  harvest,
  sendInfo,
  addMap,
  addTab,
  addBuilding,
  addResource,
  addJob,
} from '../../actions'

const mapStateToProps = state => ({
  tech: state.tech,
  resources: state.resources,
  info: state.info,
})

const mapDispatchToProps = ({
  research,
  harvest,
  sendInfo,
  addMap,
  addTab,
  addBuilding,
  addResource,
  addJob,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(ScienceTab)
