import React, {Component} from 'react';
import HomeUI from '../components/HomeUI';
import firebase from 'firebase';

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
                if (changeDoc.type == 'added')
                    this.setState({
                        tasks: this.state.tasks.concat(changeDoc.doc.data())
                    })
                if (changeDoc.type == 'modified'){
                    this.setState({
                        tasks: this.state.tasks.filter((task) => changeDoc.doc.data().title != task.title)
                    });
                    this.setState({
                        tasks: this.state.tasks.concat(changeDoc.doc.data())
                    })
                    console.log(this.state.tasks);
                }
                    
            })
        });
    }
    render(){
        return(
            <HomeUI tasks={this.state.tasks}/>
        )
    }
}

