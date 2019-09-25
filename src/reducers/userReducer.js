export default function userReducer(state={},action){
    switch (action.type){
        case 'LOG_IN':
            return action.user
        case 'LOG_OUT':
            return {};
        default:
            return state;
    }
}