/*import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MyAppBar from './components/navigation/MyAppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: red[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <MyAppBar />
          {this.props.children}
        </div>
      </MuiThemeProvider> 
    );
  }
}*/
import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import MyAppBar from './components/navigation/MyAppBar';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#03a9f4'},
    secondary: { main: '#64dd17'},
    action: { main: '#ffffff' }
  },
});

class App extends Component {
  render(){
    return (
      <ThemeProvider  theme={theme}>
        <div>
          <MyAppBar />
          {this.props.children}
        </div>
      </ThemeProvider > 
    );
  }
}
export default App;
