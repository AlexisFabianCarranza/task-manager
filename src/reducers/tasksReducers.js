export default function tasksReducer(state = [],action) {
    switch (action.type) {
        case 'ADD_TASK':
            return state.concat(action.task);
        case 'FILTER_TASK':
            return state.filter((task) => action.taskId !== task.id );
        default:
            return state;
    }

}