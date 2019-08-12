export function manageFriends(state, action){
  let newState = {...state}
  switch (action.type) {
    case "ADD_FRIEND":
      newState.friends = [...newState.friends, action.friend]
      return newState;
    case "REMOVE_FRIEND":
      newState.friends = [...newState.friends.filter(v => v.id !== action.id)]
      return newState;
    default:
      return state;
  }
}
