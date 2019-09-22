let state = {
    toDo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done',
    arrayStates: function(){return [this.toDo, this.inProgress, this.done]}
}

export default state;