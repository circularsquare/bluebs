import { connect } from 'react-redux'
import TownTab from '../components/TownTab'
import {
  hireBlueb,
  hireWood,
} from '../actions'

const mapStateToProps = state => ({
  birbs: state.birbs
})

const mapDispatchToProps = {
  hireBlueb,
  hireWood
}

export default connect( //connect connects a react component to a redux store
  mapStateToProps,
  mapDispatchToProps
)(TownTab)
