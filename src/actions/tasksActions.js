export function addTask(task){
    return {
        type: 'ADD_TASK',
        task
    }
}

export function filterTask(taskId){
    return {
        type: 'FILTER_TASK',
        taskId
    }
}
