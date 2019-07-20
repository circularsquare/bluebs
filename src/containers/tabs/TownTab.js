import { connect } from 'react-redux'
import TownTab from '../../components/tabs/TownTab'
import {
  hire,
  spawnUnit,
} from '../../actions'

const mapStateToProps = state => ({
  resources: state.resources,
  visibleJobs: state.info.visibleJobs,
  tech: state.tech
})

const mapDispatchToProps = {
  hire,
  spawnUnit
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(TownTab)
