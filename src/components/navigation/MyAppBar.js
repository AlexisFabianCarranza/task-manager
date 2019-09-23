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
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      color: '#FFFFFF',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    containerItemsRight: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flex: 1,
      paddingRight: '7%',
    },
    containerItemsLeft: {
      paddingLeft: '3%',
    }
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
                    <MenuIcon style={{color: '#FFFFFF'}}/>
                </IconButton>
                <Link to='/' style={{textDecoration: 'none', color:'inherit'}}>
                  <Typography className={classes.title} variant="h6" noWrap>
                    Task Manager
                  </Typography>
                </Link>
                <div className={classes.containerItemsLeft}>
                  <Link to='/'>
                    <HomeRoundedIcon style={{color: '#FFFFFF'}}/>
                  </Link>
                  
                </div>
                <div className={classes.containerItemsRight}>
                  
                  <Link to='/AddTask'>
                    <Fab color="secondary" aria-label="add" size="small" >
                      <AddIcon style={{color: '#FFFFFF'}}/>
                    </Fab>
                  </Link>                    
                  
                </div>
            </Toolbar>
        </AppBar>
      </div>
    )
}