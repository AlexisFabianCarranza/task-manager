import React,{Component} from 'react';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
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
                </App>
            </ReactRouter>
        )
    }
  }