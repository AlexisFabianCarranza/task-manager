import React , {Component} from 'react';
import TaskUI from '../components/tasks/TaskUI';
import firebase from 'firebase';

export default class UpdateTask extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            state: '',
            id: '',
        }
    }
    componentDidMount(){
        this.db = firebase.firestore();
        var url = new URL(window.location.href);
        this.idTask = url.searchParams.get("idTask");
        this.readTaskAndUpdateState();
    }
    updateTask = async (task) => {
        try{
            console.log(task);
            console.log("ES LO QUE LLEGO");
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
    readTaskAndUpdateState = async () => {
        let taskRef = await this.db.collection('tasks').doc(this.idTask);
        taskRef.get().then((task) => {
            if (task.exists) {
                console.log("Documento recibido");
                this.setState({
                    title: task.data().title,
                    description: task.data().description,
                    state: task.data().state,
                    id: task.id,
                });
            } else {
                console.log("No se encontro el documento");
            }
        }).catch((err) => {
            console.log("err");
        });

    }
    render() {
        return(
            <TaskUI 
                title='Update Task'
                mainAction={this.updateTask}
                textButton='Update'
                taskTitle={this.state.title}
                taskDescription={this.state.description}
                taskState={this.state.state}
                taskId={this.state.id}
            />
        )
    }
}