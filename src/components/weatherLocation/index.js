import React from  'react';
import './stilo.css';
import WeatherData from './components/weatherData';


const WeatherLocation = ({city}) => {
 
  return(
    <div className="weather-location">
 
    <h2>{city}</h2>
   
            <WeatherData 
              icon="day-sunny" 
              currentTemp={32}
              maxTemp={35} 
              minTemp={11}
      
            />
        </div>)        
};

export default WeatherLocation;