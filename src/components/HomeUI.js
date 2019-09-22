import React, {Component} from 'react';
import States from '../utilities/states';
import Title from './Title';
import TaskCard from '../components/tasks/TaskCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    card: {
        padding: '2%'
    }
  }));

export default (props) =>{
    let showTasks = (state) => {
        return props.tasks.map(task => {
            if (task.state == state) {
                return (
                    <div className={classes.card}>
                        <TaskCard 
                            title={task.title}
                            description={task.description}
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
                    </div>
                    
                </div>
                <div className='tableDivisor'>
                    <div className='tasks'>
                        <Title title={States.done}/>
                    </div>
                </div>
            </div>
        )
}