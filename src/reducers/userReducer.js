export default function userReducer(state={},action){
    switch (action.type){
        case 'LOG_IN':
            return {User: action.User}
        default:
            return state
    }
}