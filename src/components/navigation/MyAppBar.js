import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MenuIcon from '@material-ui/icons/Menu';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

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
      flex: 4,
      paddingRight: '7%',
    },
    containerItemsLeft: {
      paddingLeft: '3%',
    }
  }));
const addTaskIcon = (user,logout) => {
  return (JSON.stringify(user)!=='{}') ?
      <div>
        <Link to='/AddTask'>
          <Fab color="secondary" aria-label="add" size="small" >
            <AddIcon style={{color: '#FFFFFF'}}/>
          </Fab>
        </Link>
        <IconButton onClick={()=>logout()}>
          <PowerSettingsNewIcon style={{color: '#FFFFFF'}}/>
        </IconButton>
      </div>:
      null;
}

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
                <IconButton onClick={()=>props.goHome()}>
                  <Typography className={classes.title} variant="h6" noWrap>
                    Task Manager
                  </Typography>
                </IconButton>
                <div className={classes.containerItemsLeft}>
                  <IconButton onClick={()=>props.goHome()}>
                    <HomeRoundedIcon style={{color: '#FFFFFF'}}/>
                  </IconButton>
                  
                </div>
                <div className={classes.containerItemsRight}>
                  {addTaskIcon(props.user,props.logout)}
                </div>
                
                
            </Toolbar>
        </AppBar>
      </div>
    )
}