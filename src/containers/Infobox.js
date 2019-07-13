import { connect } from 'react-redux'
import { sendInfo } from '../actions'
import Infobox from '../components/Infobox'

const mapStateToProps = state => ({
  info: state.info.info,
})

const mapDispatchToProps = dispatch => ({
  sendInfo,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Infobox)
