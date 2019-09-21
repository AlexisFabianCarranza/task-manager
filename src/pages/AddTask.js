import React , {Component} from 'react';
import TaskUI from '../components/tasks/TaskUI';
import slugify from '../lib/slugify';
import firebase from 'firebase';

export default class AddTask extends Component {
    componentDidMount(){
        this.db = firebase.firestore();
    }
    saveTask = async ({title,description,state})=>{
        //Se genera el slug del title
        let slug = slugify(title);
        //Se almacenan los datos en la base de datos de firebase
        try{
            await this.db.collection('tasks').doc(slug).set({
                title,
                description,
                state
            });
            console.log("Se almaceno correctamente la tarea");
        }catch(err){
            console.log(err);
        }
    }
    render() {
        return(
            <TaskUI 
                saveTask={this.saveTask}
            />
        )
    }
}