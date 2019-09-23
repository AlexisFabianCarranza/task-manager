import React,{Component} from 'react';
import Home from './pages/home';
import AddTask from './pages/AddTask';
import UpdateTask from './pages/UpdateTask';
import App from '../src/App';

import {
    BrowserRouter as ReactRouter,
    Route
  } from 'react-router-dom';


  export default class Router extends Component{
    render(){
        return (
            <ReactRouter>
                <App>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/addTask" component={AddTask}></Route>
                    <Route path="/updateTask/:idTask" component={UpdateTask}></Route>
                    <Route path="/updateTask" component={UpdateTask}></Route>
                </App>
            </ReactRouter>
        )
    }
  }