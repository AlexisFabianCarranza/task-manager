import React, {Component} from 'react';
import '../styles/basic.css';
import States from '../utilities/states';
import Title from './Title';
import TaskCard from '../components/tasks/TaskCard';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class HomeUI extends Component{
    showTasks = (state) => {
        return this.props.tasks.map((task,index) => {
            if (task.state === state){
                return (
                    <Grid key={index} item>
                        <Paper>
                            <TaskCard 
                                title={task.title}
                                description={task.description}
                            />
                        </Paper>
                    </Grid>
                )
            }
                
        })
    }
    render(){
        return(
            <div className='table'>
                <div className='tableDivisor'>
                    <Title title={States.toDo}/>
                    <Grid item xs={4}>
                            <Grid >
                            {this.showTasks(States.toDo)}
                           </Grid>
                    </Grid> 
                </div>
                <div className='tableDivisor'>
                    <Title title={States.inProgress}/>
                    <Grid item xs={4}>
                            <Grid >
                            {this.showTasks(States.inProgress)}
                           </Grid>
                    </Grid> 
                </div>
                <div className='tableDivisor'>
                    <Title title={States.done}/>
                    <Grid item xs={4}>
                            <Grid >
                            {this.showTasks(States.done)}
                           </Grid>
                    </Grid> 
                </div>
            </div>
        )
    }
}