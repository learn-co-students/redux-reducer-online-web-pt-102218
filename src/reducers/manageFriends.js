export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let newState = {friends: [...state.friends]}
      newState.friends.splice(newState.friends.findIndex((element) =>
        element.id === action.id),1)
      return newState
    default:
      return state
    }
}
