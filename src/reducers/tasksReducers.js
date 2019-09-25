export default function tasksReducer(state = [],action) {
    switch (action.type) {
        case 'ADD_TASK':
            console.log(action.task);
            return state.concat([action.task]);
        case 'FILTER_TASK':
            let newState = Object.assign([],state);
            newState.filter((task) => action.taskId === task.id );
            return newState;
        default:
            return state;
    }

}