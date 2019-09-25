import React,{Component} from 'react';
import Home from './pages/home';
import AddTask from './pages/addTask';
import UpdateTask from './pages/updateTask';
import App from '../src/App';
import Authenticator from './pages/authenticator';
import {connect} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {
    BrowserRouter as ReactRouter,
    Route
  } from 'react-router-dom';

class Router extends Component{
    signedInRoutes(){
        if (this.props.user){
            return (
                <div>
                    <Route path="/addTask" component={AddTask}></Route>
                    <Route path="/updateTask/:idTask" component={UpdateTask}></Route>
                    <Route path="/updateTask" component={UpdateTask}></Route>
                </div>
            );
        }
    }
    home(){
        console.log(this.props.user);
        if(JSON.stringify(this.props.user)!=='{}') return Home;
        return Authenticator;
    }
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <App>
                    <Route exact path="/" component={this.home()}></Route>
                    <Route path="/login" component={Authenticator}></Route>
                    <Route path="/signup" component={Authenticator}></Route>
                    {this.signedInRoutes()}
                </App>
            </ConnectedRouter>
        )
    }
  }

  function mapStateToProps(state, ownProps){
      return {
          user: state.user
      }
  }

  export default connect (mapStateToProps)(Router);