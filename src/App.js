import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <MuiThemeProvider className="App">
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
