import { connect } from 'react-redux'
import App from '../components/App'


import {
  changeBluebs,
  adoptBirb,
  sendInfo,
  tick,
} from '../actions'

const mapStateToProps = state => ({
  resources: state.resources,
  birbs: state.birbs,
  info: state.info,
})

const mapDispatchToProps = {
  changeBluebs,
  adoptBirb,
  sendInfo,
  tick,
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(App)
