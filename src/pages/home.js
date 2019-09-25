import React, {Component} from 'react';
import HomeUI from '../components/HomeUI';
import firebase from 'firebase';
import {connect} from 'react-redux';
import States from '../utilities/states';
import {addTask, filterTask} from '../actions/tasksActions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        console.log(this.props.tasks);
    }
    componentDidMount(){
        this.db = firebase.firestore();
        this.readTasks();
    }
    readTasks = async () => {
        let tasksCollection = await this.db.collection('users').doc(this.props.user.user.id).collection('tasks');
        tasksCollection.onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().forEach((changeDoc) =>{
                
                switch(changeDoc.type){
                    case 'added':
                        /*let task = {
                            id: changeDoc.doc.id,
                            title: changeDoc.doc.data().title,
                            description: changeDoc.doc.data().title,
                        }*/
                        this.props.dispatch(addTask({...changeDoc.doc.data().task ,id: changeDoc.doc.id}));
                        break;
                    case 'modified':
                        //Filtro la tarea del estado anterior
                        this.props.dispatch(filterTask(changeDoc.doc.id));
                        //Agrego la tarea con el nuevo estado
                        this.props.dispatch(addTask({...changeDoc.doc.data() ,id: changeDoc.doc.id})); 
                        break;
                    case 'removed':
                        this.props.dispatch(filterTask(changeDoc.doc.id))
                        break;
                    default:
                        return;
            }})
        });
        console.log(this.props.user);
    }
    taskUpdate = async (taskId, taskState ,action) => {
        //Task: id de la tarea - action: next o previous
        try {
            var taskRef = this.db.collection('tasks').doc(taskId);
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
        await this.db.collection('tasks').doc(taskId).delete()
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