import React , {Component} from 'react';
import TaskUI from '../components/tasks/TaskUI';

export default class AddTask extends Component {
    saveTask = ({title,description,state})=>{
        //Se almacenan los datos en la base de datos de firebase
    }
    render() {
        return(
            <TaskUI 
                saveTask={this.saveTask}
            />
        )
    }
}