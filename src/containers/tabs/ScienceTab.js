import { connect } from 'react-redux'
import ScienceTab from '../../components/tabs/ScienceTab'
import {

} from '../../actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(ScienceTab)
