

const info = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TAB':
      var newTabs = state.VisibleTabs
      newTabs.action.key = newTabs.action.name
      return Object.assign({}, state, {
        visibleTabs: newTabs
      })
    case 'ADD_RESOURCE':
      return Object.assign({}, state, {
        visibleResources: state.visibleResources.concat(action.name)
      })

    case 'SEND_INFO':
      if (state.info > 100){
        state.info.pop()}
      return Object.assign({}, state, {
        info: [action.info].concat(state.info)
      })

    default:
      return state
  }
}
export default info
