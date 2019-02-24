import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'

import WeatherLocation from './components/weatherLocation';
//import {Grid} from ''
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';


const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#e91e63',
    },
    secondary:{
      main:'#00e676',
    },
  },
  typography:{
    useNextVariants: true
  }
});

class App extends Component {
  render() {

    return (
      <MuiThemeProvider theme={theme}>
      <div className="app">
        
        <nav className="navBar-top">

          the  weather App
        </nav>

        <div className="container">
          Ciudad:
         <WeatherLocation 
  //imagen="C:\Users\Milú\appclima\src\components\weatherLocation\recursos\fondo.jpg"
         city="San Miguel de Tucuman,AR"
            />
           
        </div>
      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
