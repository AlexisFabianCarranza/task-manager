export default function tasksReducer(state = [],action) {
    switch (action.type) {
        case 'ADD_TASK':
            return state.concat(action.task);
        case 'FILTER_TASK':
            let newState =  state.filter((task) => action.taskId !== task.id );
            if (newState.length === 0) return [];
            return newState;
        case 'CLEAR_TASKS':
            return [];
        default:
            return state;
    }

}