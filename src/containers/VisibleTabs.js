import { connect } from 'react-redux'
import { } from '../actions'
import Tabs from '../components/Tabs'

const mapStateToProps = state => ({
  visibleTabs: state.info.visibleTabs,
})

const mapDispatchToProps = dispatch => ({

})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Tabs)
