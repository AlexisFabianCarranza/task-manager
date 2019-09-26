import React , {Component} from 'react';
import TaskUI from '../components/TaskUI';
import firebase from 'firebase';
import {saveTask} from '../request/TasksRequest';
import {connect} from 'react-redux';

 class AddTask extends Component {
    componentDidMount(){
        this.db = firebase.firestore();
    }
    saveTask = (task) => {
        try{
            this.db.collection('users').doc(this.props.user.id).collection('tasks').add(task)
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
function mapStateToProps(state, ownProps){
    return {
        tasks: state.tasks,
        user: state.user
    }
}
export default connect(mapStateToProps)(AddTask);