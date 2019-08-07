export function manageFriends(state, action, friend=action.friend){
    switch (action.type){
        case "ADD_FRIEND":
            return {friends: [...state.friends, friend]}
        case "REMOVE_FRIEND":
            return {friends: [...state.friends].filter((friend) => friend.id !== action.id )}
            default: 
                return state
    }
}
