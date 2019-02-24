import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './stilo.css';



const WeatherData = ({currentTemp,minTemp,maxTemp,icon}) => (
<div className="weather-data">
                <div className="weather-data-icon">
                <WeatherIcons name={icon} size="2x" />
                </div>
                <h2 className="weather-data-temp">Temperatura: {currentTemp} ºC</h2>
                <div className="grid">
                  <h4 className="weather-data-max-temp">Maxima {maxTemp} ºC</h4>
                  <h4 className="weather-data-min-temp">Minima {minTemp} ºC</h4>
                </div>
              </div>
          
);
 
    
  WeatherData.propTypes = {
    icon: PropTypes.string.isRequired,
    currentTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired
  }

  export default WeatherData;