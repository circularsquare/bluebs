const resources = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_BLUEBS':
      return Object.assign({}, state, {
        bluebs: state.bluebs + action.n
      })
    default:
      return state
  }
}
export default resources
