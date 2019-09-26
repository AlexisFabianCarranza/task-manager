import React, {Component} from 'react';
import HomeUI from '../components/HomeUI';
import firebase from 'firebase';
import {connect} from 'react-redux';
import States from '../utilities/states';
import {addTask, filterTask, clearTasks} from '../actions/tasksActions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.flag = true;
        this.db = firebase.firestore();
    }
    componentDidMount(){
        if (this.flag ){
            this.flag = false;
            this.readTasks();
        }
    }
    readTasks = () => {
        let tasksCollection = this.db.collection('users').doc(this.props.user.id).collection('tasks');
        tasksCollection.onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().forEach((changeDoc) =>{
                let newTask;
                switch(changeDoc.type){
                    case 'added':
                        this.props.dispatch(filterTask(changeDoc.doc.id));
                        newTask = {...changeDoc.doc.data(),id: changeDoc.doc.id};
                        this.props.dispatch(addTask(newTask));
                        break;
                    case 'modified':
                        //Filtro la tarea del estado anterior
                        this.props.dispatch(filterTask(changeDoc.doc.id));
                        //Agrego la tarea con el nuevo estado
                        newTask = {...changeDoc.doc.data(),id: changeDoc.doc.id};
                        this.props.dispatch(addTask(newTask));
                        break;
                    case 'removed':
                        this.props.dispatch(filterTask(changeDoc.doc.id))
                        break;
                    default:
                        return;
            }})
        });
    }
    taskUpdate = async (taskId, taskState ,action) => {
        //Task: id de la tarea - action: next o previous
        try {
            var taskRef = this.db.collection('users').doc(this.props.user.id).collection('tasks').doc(taskId);
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
    removeTask = async (taskId) => {
        await this.db.collection('users').doc(this.props.user.id).collection('tasks').doc(taskId).delete()
            .then(() => console.log('Se elimino correctamente'))
            .catch((err) => console.log(err));
    }
    archivingTask = async (taskId) => {
        await this.db.collection('tasks').doc(taskId)
            .set({archived: true}, { merge: true })
            .then(() => console.log('Se archivo correctamente'))
            .catch((err)  => console.log(err));
    }
    render(){
        return(
            <HomeUI 
                tasks={this.props.tasks}
                taskUpdate={this.taskUpdate}    
                removeTask={this.removeTask}
                archivingTask={this.archivingTask}
            />
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        tasks: state.tasks,
        user: state.user,
    }
}
export default connect(mapStateToProps)(Home);