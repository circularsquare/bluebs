const visibleTabs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return state + [action.name]
    default:
      return state
  }
}
export default visibleTabs
