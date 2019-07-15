import update from 'react-addons-update'

const birbs = (state = [], action) => {
  switch (action.type) {
    case 'ADOPT_BIRB':
      if (state.total <= state.maxbirbs-action.n){
        return {...state,
          total: state.total+action.n,
          unemployed: state.unemployed+action.n,}}
      else {return state}
    case 'HIRE':
      var j = state[action.name]+action.n
      if ((state.unemployed >= action.n) & (action.n+state[action.name]>=0)){
        return update(state, {
          [action.name]: {$set: j},
          'unemployed': {$set: state['unemployed']-action.n}
        })
      }
    default:
      return state
  }
}
export default birbs
