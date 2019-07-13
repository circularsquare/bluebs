import { connect } from 'react-redux'
import { changeBluebs, sendInfo } from '../actions'
import HomeTab from '../components/HomeTab'

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  changeBluebs,
  sendInfo,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(HomeTab)