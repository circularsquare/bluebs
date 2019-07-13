const resources = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_BLUEBS': //need to check to not go above cap and not below min
      if (state.bluebs <= state.maxbluebs-action.n){
        return {...state,
          bluebs: state.bluebs+action.n}}
      else {
        return {...state,
          bluebs: state.maxbluebs}}
    default:
      return state
  }
}
export default resources
