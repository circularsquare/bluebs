import update from 'react-addons-update'


const info = (state = [], action) => {
  switch (action.type) {

    //these add functions are just to make things visible as u unlock them in the game
    case 'ADD_TAB':
      return update(state, {visibleTabs: {[action.key]: {$set: action.name}}})
    case 'ADD_RESOURCE':
      if (!(action.name in state.visibleResources)){
        return Object.assign({}, state, {
          visibleResources: state.visibleResources.concat(action.name)})}
      else{return state}
    case 'ADD_JOB':
      if (!(action.name in state.visibleJobs)){
        return Object.assign({}, state, {
          visibleJobs: state.visibleJobs.concat(action.name)})}
      else{return state}
    case 'ADD_MAP':
      return {...state, map:action.map}
    case 'ADD_BUILDING':
      return update(state, {visibleBuildings: {$push: [action.name]}})
    case 'SELECT_TECH':
      return {...state, selectedTech:action.name}
    case 'SELECT_TILE':
      return {...state, selectedTile:action.coordinates}
    case 'TICK':
      var season = state.time[0]
      var day = state.time[1]
      var hour = state.time[2] + 1
      const nextSeasonDict = {'spring':'summer', 'summer':'fall', 'fall':'winter', 'winter':'spring'}
      if(hour>=24){
        hour=0
        day=day+1}
      if(day>=31){
        day=1
        season=nextSeasonDict[season]}
      return {...state,
        time: [season, day, hour]}
    case 'SEND_INFO':
      if (state.info > 100){
        state.info.pop()}
      return Object.assign({}, state, {
        info: [action.info].concat(state.info)})
    case 'SET_PROGRESSION':
      return update(state, {progression: {$set: action.n}})
    case 'SET_HUNGER':
      return update(state, {hunger: {$set: action.n}})
    case 'SET_PIXSIZE':
      return update(state, {pixSize: {$set: action.n}})
    case 'SET_CORNER':
      return update(state, {corner: {$set: action.coords}})
    case 'MOVE_CORNER':
      return update(state, {corner: {$set: [action.coords[0]+state.corner[0], action.coords[1]+state.corner[1]]}})
    default:
      return state
  }
}
export default info
