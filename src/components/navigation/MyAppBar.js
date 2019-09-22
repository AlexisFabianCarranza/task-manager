/*import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {indigo600} from 'material-ui/styles/colors';


export default class MyAppBar extends Component {
    render(){
        return(
            <AppBar 
                title="Task Manager"
                style={{"backgroundColor": indigo600}}
            >
                <FlatButton>Hola</FlatButton>
            </AppBar>
        )
    }
}*/
import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    containerItems: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flex: 1,
      paddingRight: '7%',
    },
  }));

export default (props) => {
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  Task Manager
                </Typography>
                <div className={classes.containerItems}>
                  <Link to='/AddTask'>
                    <Fab color="secondary" aria-label="add" >
                      <AddIcon />
                    </Fab>
                  </Link>                    
                  
                </div>
            </Toolbar>
        </AppBar>
      </div>
    )
}