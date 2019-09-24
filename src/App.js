import React, {Component} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import MyAppBar from './components/navigation/MyAppBar';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#311b92'},
    secondary: { main: '#ff3d00'},
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
