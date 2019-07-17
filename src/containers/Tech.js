import { connect } from 'react-redux'
import {
  sendInfo,
selectTech,
} from '../actions'
import Tech from '../components/Tech'

const mapStateToProps = state => ({
  techList: state.tech,
  info: state.info,
})

const mapDispatchToProps = ({
  sendInfo,
  selectTech,
})

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(Tech)
