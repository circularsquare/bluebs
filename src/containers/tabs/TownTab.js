import { connect } from 'react-redux'
import TownTab from '../../components/tabs/TownTab'
import {
  hire
} from '../../actions'

const mapStateToProps = state => ({
  birbs: state.birbs,
  visibleJobs: state.info.visibleJobs,
})

const mapDispatchToProps = {
  hire,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(TownTab)
