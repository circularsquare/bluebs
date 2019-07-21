import { connect } from 'react-redux'
import {
  harvest,
  build,
  sendInfo,
  applyEffects,
 } from '../../actions'
import HomeTab from '../../components/tabs/HomeTab'

const mapStateToProps = state => ({
  buildings: state.buildings,
  info: state.info,
  resources: state.resources,
})

const mapDispatchToProps = {
  harvest,
  build,
  sendInfo,
  applyEffects,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(HomeTab)
