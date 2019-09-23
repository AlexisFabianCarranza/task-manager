export default function taskReducers(state = [], action) {
    switch (action.type){
        case 'LOAD_TASKS':
            return action.tasks
        case 'ADD_TASKS':
            return state.tasks.concat([action.task])
        case 'REMOVE_EVENT':
            return state.tasks.filter((task)=> task.id != action.task.id );
        case 'CLEAR':
            return []
        default: 
            return state;
    }
    return state;
}