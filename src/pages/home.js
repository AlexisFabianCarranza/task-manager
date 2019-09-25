import React, {Component} from 'react';
import HomeUI from '../components/HomeUI';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {moveTaskState} from '../request/TasksRequest';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        console.log(this.props)
    }
    componentDidMount(){
        this.db = firebase.firestore();
        this.readTasks();
    }
    readTasks = async () => {
        
    }
    taskUpdate = (taskId, taskState ,action) => {
        moveTaskState.moveTaskState(taskId,taskState,action);

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
                tasks={this.state.tasks}
                taskUpdate={this.taskUpdate}    
                removeTask={this.removeTask}
                archivingTask={this.archivingTask}
            />
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps)(Home);