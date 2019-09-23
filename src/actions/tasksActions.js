export function addTasks(task){
    return {
        type: 'ADD_TASKS', 
        task
    }
}

export function removeEvent(task) {
    return {
        type: 'REMOVE_EVENT',
        task
    }
}

export function clear() {
    return {
        type: 'CLEAR'
    }
}