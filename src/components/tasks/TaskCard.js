import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FolderRoundedIcon from '@material-ui/icons/FolderRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import States from '../../utilities/states';
import {Link} from 'react-router-dom';
import '../../styles/task.css';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexFlow: 'row',
    },
    cardContent: {
        borderRadius: '15px',
    },
    card: {
        padding: '2%'
    },
    icono: {
        backgroundColor: 'red',
    },
    titleCard: {
        textAlign: 'center',
        fontSize: '130%'
    },
    leftIcons: {
        display: 'flex',
        flex:1,
        flexFlow: 'row-reverse',
    },
    rightIcons: {
        display: 'flex',
        flex:1,
        flexFlow: 'row',
    }
  }));

const colorTask = (state) => {
    console.log(state);
    switch (States.arrayStates().indexOf(state)) {
        case 0: 
            return {border: '2px solid #e57373'}
        case 1:
            return {border: '2px solid #ffb74d'}
        case 2:
            return {border: '2px solid #aed581'}
        default: 
            return ""
    }
}
export default (props) => {
        const classes = useStyles();
        const task = props.task;
        const isLastState = (States.arrayStates().indexOf(task.state)=== States.arrayStates().length-1) ? true : false;
        const isFirstState =  (States.arrayStates().indexOf(task.state)=== 0) ? true : false;
        console.log(colorTask(task.state));
        return(
            <Card className={classes.cardContent} style={colorTask(task.state)}>
                <div className={classes.container}>
                    <CardActions>
                        <IconButton
                            disabled={isFirstState}
                            color={"inherit" }
                            onClick={()=>props.taskUpdate(task.id, task.state,'previous')}
                        >
                            <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                        </IconButton>
                    </CardActions>
                    <CardActionArea>
                        <CardContent>
                            <Typography className={classes.titleCard} gutterBottom variant="h5" component="h2">
                                {task.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                    <CardActions>
                        <IconButton
                            disabled={isLastState}
                            color="inherit"
                            onClick={()=>props.taskUpdate(task.id, task.state,'next')}
                        >
                            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
                        </IconButton>
                    </CardActions>
                </div>
                <CardActionArea >
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(task.description)?task.description:'Sin descripcion'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className={classes.rightIcons}>
                        <Link to={'/updateTask?idTask='+ task.id} >
                            <IconButton
                                    color="inherit"
                                    style={{color: '#000000'}}
                                >
                                <CreateRoundedIcon></CreateRoundedIcon>
                            </IconButton>
                        </Link> 
                    </div>
                    <div className={classes.leftIcons}>
                        <IconButton
                            color="inherit"
                            onClick={()=>props.removeTask(task.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardActions>
        </Card>
    )
};


