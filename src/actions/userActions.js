export function login(User){
    return {
        type: 'LOG_IN',
        User
    }
}

export function logout(){
    return {type: 'LOG_OUT'}
}