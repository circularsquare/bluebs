import update from 'react-addons-update'

const resources = (state = [], action) => {
  switch (action.type) {
    case 'SET':
      return update(state, {[action.name]: {$set: action.n}})
    case 'ADOPT_BIRB':
      if (state['birbs'] <= state['maxbirbs']-action.n){
        return {...state,
          'birbs': state['birbs']+action.n,
          'unemployed': state['unemployed']+action.n,}}
      else {return state}
    default:
      return state
  }
}
export default resources
