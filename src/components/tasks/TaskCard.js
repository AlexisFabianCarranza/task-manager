import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
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
    
  }));

export default (props) => {
        const classes = useStyles();
        return(
            <Card >
                <div className={classes.container}>
                    <CardActions>
                        <IconButton
                            color="inherit"
                            onClick={()=>props.taskUpdate(props.id, props.state,'previous')}
                        >
                            <ArrowBackRoundedIcon ></ArrowBackRoundedIcon>
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
                    <Link to='/updateTask'>
                        <IconButton
                                color="inherit"
                            >
                            <CreateRoundedIcon></CreateRoundedIcon>
                        </IconButton>
                    </Link> 
                    
                </CardActions>
        </Card>
    )
}
