import React , {Component} from 'react';
import TaskUI from '../components/tasks/TaskUI';
import firebase from 'firebase';

export default class UpdateTask extends Component {
    componentDidMount(){
        this.db = firebase.firestore();
        console.log('Se imprimio');
        var url = new URL(window.location.href);
        var idTask = url.searchParams.get("idTask");
        console.log(idTask);
    }
    updateTask = async (task) => {
        try{
            var taskRef = this.db.collection('tasks').doc(task.id);
            await taskRef.update({
                title: task.title,
                description: task.description,
                state: task.state
            });
            console.log("Se almaceno correctamente la tarea");
        }catch(err){
            console.log(err);
        }
    }
    render() {
        return(
            <TaskUI 
                title='Update Task'
                mainAction={this.updateTask}
                textButton='Update'
                taskTitle={this.props.title}
                taskDescription={this.props.description}
                taskState={this.props.state}
            />
        )
    }
}