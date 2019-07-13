const birbs = (state = [], action) => {
  switch (action.type) {
    case 'ADOPT_BIRB':
      if (state.total <= state.maxbirbs-action.n){
        return {...state,
          total: state.total+action.n,
          unemployed: state.unemployed+action.n,}}
      else {return state}
    case 'HIRE_WOOD':
      if (state.unemployed >= action.n){
        return {...state,
          woodpeckers: state.woodpeckers+action.n,
          unemployed: state.unemployed-action.n,}}
      else {return state}
    case 'HIRE_BLUEB'://need to check for number of unemployed birbs here
      if (state.unemployed >= action.n){
        return {...state,
          farmers: state.farmers+action.n,
          unemployed: state.unemployed-action.n,}}
      else {return state}
    default:
      return state
  }
}
export default birbs
