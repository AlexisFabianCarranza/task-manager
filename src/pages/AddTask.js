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
        var saveTask = saveTask.bind(this);
        saveTask(task);
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
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(AddTask);