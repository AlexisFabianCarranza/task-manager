import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import MyAppBar from './components/navigation/MyAppBar';

class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <MyAppBar />
        {this.props.children}
      </MuiThemeProvider> 
    );
  }
}

export default App;
