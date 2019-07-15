import { connect } from 'react-redux'
import {
  harvest,
  build,
  sendInfo,
 } from '../../actions'
import HomeTab from '../../components/tabs/HomeTab'

const mapStateToProps = state => ({
  buildings: state.buildings
})

const mapDispatchToProps = {
  harvest,
  build,
  sendInfo,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(HomeTab)
