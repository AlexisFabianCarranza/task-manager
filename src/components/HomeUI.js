import React from 'react';
import States from '../utilities/states';
import Title from './utilites/Title';
import TaskCard from '../components/tasks/TaskCard';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/home.css';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
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
            if (task.state === state) {
                return (
                    <div className={classes.card} key={task.id}>
                        <TaskCard 
                            taskUpdate={props.taskUpdate}
                            removeTask={props.removeTask}
                            task={task}
                            archivingTask={props.archivingTask}
                        />
                    </div>
                )
            }
        })
    };
    const classes = useStyles();
    return(
        <div className='containerHome'>
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