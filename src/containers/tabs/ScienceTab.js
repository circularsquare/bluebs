import { connect } from 'react-redux'
import ScienceTab from '../../components/tabs/ScienceTab'
import {
  research,
  harvest,
  sendInfo
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
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(ScienceTab)
