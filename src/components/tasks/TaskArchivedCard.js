import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import '../../styles/task.css';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexFlow: 'row',
    },
    card: {
        padding: '2%'
    },
    titleCard: {
        textAlign: 'center',
        fontSize: '130%'
    },
  }));

export default (props) => {
    const classes = useStyles();
    const task = props.task;
    return(
        <Card >
            <div className={classes.container}>
                <CardActionArea>
                    <CardContent>
                        <Typography className={classes.titleCard} gutterBottom variant="h5" component="h2">
                            {task.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </div>
            <CardActionArea >
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {(task.description)?task.description:'Sin descripcion'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <div className={classes.leftIcons}>
                    <IconButton
                        color="inherit"
                        onClick={()=>task.removeTask(task.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </div>
            </CardActions>
    </Card>
)
};
