import { connect } from 'react-redux'
import { build} from '../actions'
import Building from '../components/Building'

const mapStateToProps = state => ({
  buildingList: state.info.buildingList,
  j: state.info.j
})


const mapDispatchToProps = ({
  build
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Building)
