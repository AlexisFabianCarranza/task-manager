import React , {Component} from 'react';
import TaskUI from '../components/TaskUI';
import firebase from 'firebase';
import {connect} from 'react-redux';

class UpdateTask extends Component {
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
            var taskRef = this.db.collection('users').doc(this.props.user.id).collection('tasks').doc(task.id);
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
        console.log(this.props.tasks);
        this.props.tasks.map((task)=> {
            if (task.id === this.idTask){
                console.log("Documento recibido");
                this.setState({
                    title: task.title,
                    description: task.description,
                    state: task.state,
                    id: task.id,
                });
            }
        })
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

function mapStateToProps(state, ownProps){
    return {
        tasks: state.tasks,
        user: state.user,
    }
}

export default connect(mapStateToProps)(UpdateTask)