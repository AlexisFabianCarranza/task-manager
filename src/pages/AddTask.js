import React , {Component} from 'react';
import TaskUI from '../components/tasks/TaskUI';
import firebase from 'firebase';

export default class AddTask extends Component {
    componentDidMount(){
        this.db = firebase.firestore();
    }
    saveTask = async (task) => {
        try{
            await this.db.collection('tasks').add(task)
            console.log("Se almaceno correctamente la tarea");
        }catch(err){
            console.log(err);
        }
    }
    render() {
        return(
            <TaskUI 
                title='Add Task'
                mainAction={this.saveTask}
                textButton='Create'
            />
        )
    }
}