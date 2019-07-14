import { connect } from 'react-redux'
import {
  changeBluebs,
  changeWood,
  buildHouse,
  build,
  sendInfo,
 } from '../../actions'
import HomeTab from '../../components/tabs/HomeTab'

const mapStateToProps = state => ({
  buildingList: state.info.buildingList
})

const mapDispatchToProps = {
  changeBluebs,
  changeWood,
  buildHouse,
  build,
  sendInfo,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(HomeTab)
