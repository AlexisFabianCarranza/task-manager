import React, {Component} from 'react';
import States from '../utilities/states';
import Title from './Title';
import TaskCard from '../components/tasks/TaskCard';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/home.css';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      display: 'flex',
      flex: 1,
      flexFlow: 'column',
      backgroundColor: 'inherit',
    },
    card: {
        padding: '2%'
    }
  }));

export default (props) =>{
    let showTasks = (state) => {
        return props.tasks.map(task => {
            console.log(task);
            if (task.state == state && task.archived == false) {
                return (
                    <div className={classes.card} key={task.id}>
                        <TaskCard 
                            id={task.id}
                            taskUpdate={props.taskUpdate}
                            removeTask={props.removeTask}
                            title={task.title}
                            description={task.description}
                            state={task.state}
                            archivingTask={props.archivingTask}
                        />
                    </div>
                )
            }
        })
    };
    const classes = useStyles();
    return(
        <div className='container'>
            <div className='tableDivisor'>
                <div className='tasks'>
                    <Title title={States.toDo}/>
                    <List className={classes.root} subheader={<li />}>
                        {showTasks(States.toDo)}
                    </List>
                </div>
            </div>
            <div className='tableDivisor'>
                <div className='tasks'>
                    <Title title={States.inProgress}/>
                    <List className={classes.root} subheader={<li />}>
                        {showTasks(States.inProgress)}
                    </List>
                </div>
            </div>
            <div className='tableDivisor'>
                <div className='tasks'>
                    <Title title={States.done}/>
                    <List className={classes.root} subheader={<li />}>
                        {showTasks(States.done)}
                    </List>
                </div>
            </div>
        </div>
        )
}