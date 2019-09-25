export default function userReducer(state={},action){
    switch (action.type){
        case 'LOG_IN':
            return Object.assign({},state,{user: action.User});
        case 'LOG_OUT':
            return {};
        default:
            return state;
    }
}