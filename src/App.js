import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'

import WeatherLocation from './components/weatherLocation';



class App extends Component {
  render() {
    return (
      <div className="app">
        
        <nav className="navBar-top">

          the  weather App
        </nav>

        <div className="container">
        
         <WeatherLocation 
  //imagen="C:\Users\Milú\appclima\src\components\weatherLocation\recursos\fondo.jpg"
         city="San Salvador de Jujuy"
            />
           
        </div>
      </div>
    );
  }
}

export default App;
