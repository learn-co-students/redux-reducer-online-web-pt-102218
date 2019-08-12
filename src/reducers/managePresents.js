export function managePresents(state, action){
  switch (action.type) {
    case "INCREASE":
      let newState = {...state, numberOfPresents: state.numberOfPresents + 1}
      return newState
    default:
      return state;
  }
}
