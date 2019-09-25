import firebase from 'firebase';
import States from '../utilities/states';
import {addTask,filterTask} from '../actions/tasksActions';

export async function  moveTaskState(taskId, taskState ,action) {
    //Task: id de la tarea - action: next o previous
    try {
        var taskRef = firebase.firestore().collection('tasks').doc(taskId);
        var states = States.arrayStates();
        let indexOld = states.indexOf(taskState);
        let indexNew;
        switch (action){
            case 'next':
                indexNew = indexOld + 1;
                if (indexNew < states.length){
                    await taskRef.update({state: states[indexNew]})
                }
                break;
            case 'previous':
                indexNew = indexOld -1;
                if (indexNew >= 0){
                    await taskRef.update({state: states[indexNew]})
                }
                break;
            default:
                return;
        }
    }catch(err){
        console.log(err);
    }
}

export async function getTasksByUserId(userId) {
    let tasksCollection = await firebase.firestore().collection('tasks');
        tasksCollection.onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().forEach((changeDoc) =>{
                switch(changeDoc.type){
                    case 'added':
                        addTask({...changeDoc.doc.data() ,id: changeDoc.doc.id});
                        break;
                    case 'modified':
                        //Filtro para la tarea desactualizada
                        filterTask(changeDoc.doc.id);
                        //Agrego la tarea actualizada
                        addTask({...changeDoc.doc.data() ,id: changeDoc.doc.id});
                        break;
                    case 'removed':
                        filterTask(changeDoc.doc.id);
                        break;
                    default:
                        return;
            }})
        });
}

export async function saveTask(task){
    try{
        let ref = await firebase.firestore().collection('tasks').add({...task, archived: false});
        this.props.dispatch(addTask(task));
        console.log("Se almaceno correctamente la tarea");
    }catch(err){
        console.log(err);
    }
}