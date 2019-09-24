import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
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

export default (props) => {
        const classes = useStyles();
        return(
            <Card >
                <div className={classes.container}>
                    <CardActions>
                        <IconButton
                            disabled={(States.arrayStates().indexOf(props.state)=== 0) ? true: false}
                            color={"inherit" }
                            onClick={()=>props.taskUpdate(props.id, props.state,'previous')}
                        >
                            <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                        </IconButton>
                    </CardActions>
                    <CardActionArea>
                        <CardContent>
                            <Typography className={classes.titleCard} gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                    <CardActions>
                        <IconButton
                            disabled={(States.arrayStates().indexOf(props.state)=== States.arrayStates().length-1) ? true: false}
                            color="inherit"
                            onClick={()=>props.taskUpdate(props.id, props.state,'next')}
                        >
                            <ArrowForwardRoundedIcon></ArrowForwardRoundedIcon>
                        </IconButton>
                    </CardActions>
                </div>
                <CardActionArea >
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {(props.description)?props.description:'Sin descripcion'}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <div className={classes.rightIcons}>
                        <Link to={'/updateTask?idTask='+ props.id} >
                            <IconButton
                                    color="inherit"
                                    style={{color: '#000000'}}
                                >
                                <CreateRoundedIcon></CreateRoundedIcon>
                            </IconButton>
                        </Link> 
                        <IconButton
                            color="inherit"
                            style={{color: '#000000'}}
                            onClick={()=>props.archivingTask(props.id)}
                            >
                            <DoneAllIcon></DoneAllIcon>
                        </IconButton>
                    </div>
                    <div className={classes.leftIcons}>
                        <IconButton
                            color="inherit"
                            onClick={()=>props.removeTask(props.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                    
                    
                </CardActions>
        </Card>
    )
}
