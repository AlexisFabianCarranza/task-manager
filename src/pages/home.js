import React, {Component} from 'react';
import HomeUI from '../components/HomeUI';
import firebase from 'firebase';
import States from '../utilities/states';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }
    componentDidMount(){
        this.db = firebase.firestore();
        this.readTasks();
    }
    readTasks = async () => {
        let tasksCollection = await this.db.collection('tasks');
        tasksCollection.onSnapshot((querySnapshot) => {
            querySnapshot.docChanges().forEach((changeDoc) =>{
                switch(changeDoc.type){
                    case 'added':
                            this.setState({
                                tasks: this.state.tasks.concat({...changeDoc.doc.data() ,id: changeDoc.doc.id})
                            });
                            break;
                    case 'modified':
                            this.setState({
                                tasks: this.state.tasks.concat({...changeDoc.doc.data() ,id: changeDoc.doc.id})
                            });                    
                            this.setState({
                                tasks: this.state.tasks.filter((task) => {
                                    if (task.id == changeDoc.doc.id && task.state != changeDoc.doc.data().state){
                                        return false;
                                    }
                                    return true;
                                })
                            });
                            break;
                    case 'removed':
                            this.setState({
                                tasks: this.state.tasks.filter((task) => changeDoc.doc.id != task.id)
                            });
                            break;
            }})
        });
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
                    return;
                case 'previous':
                    indexNew = indexOld -1;
                    if (indexNew >= 0){
                        await taskRef.update({state: states[indexNew]})
                    }
            }
        }catch(err){
            console.log(err);
        }
        
    }
    render(){
        return(
            <HomeUI 
                tasks={this.state.tasks}
                taskUpdate={this.taskUpdate}    
            />
        )
    }
}

