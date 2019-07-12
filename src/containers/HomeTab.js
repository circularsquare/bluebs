import { connect } from 'react-redux'
import { changeBluebs } from '../actions'
import HomeTab from '../components/HomeTab'

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  changeBluebs
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(HomeTab)
