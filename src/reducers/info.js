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

    case 'TICK':
      var season = state.time[0]
      var day = state.time[1]
      var hour = state.time[2] + 1
      const nextSeasonDict = {'spring':'summer', 'summer':'fall', 'fall':'winter', 'winter':'spring'}
      if(hour>=24){
        hour=0
        day=day+1}
      if(day>=91){
        day=1
        season=nextSeasonDict[season]}
      return {...state,
        time: [season, day, hour]}
    case 'SEND_INFO':
      if (state.info > 100){
        state.info.pop()}
      return Object.assign({}, state, {
        info: [action.info].concat(state.info)
      })
    case 'ADD_MAP':
      return {...state, map:action.map}
    case 'BUILD':
      var newBuildingList = Object.assign({}, state.buildingList)
      newBuildingList[action.name].number = state.buildingList[action.name].number+1
      return Object.assign({}, state,
        {buildingList: newBuildingList}
      )

      //j.buildingList['house'].number = state.buildingList['house'].number+action.n
      //return j
      //return {...state,
      // buildingList: {...state.buildingList,
      //    j: {...state.buildingList[j],
      //      number: state.buildingList[j].number+1
      //  }}}

    default:
      return state
  }
}
export default info
