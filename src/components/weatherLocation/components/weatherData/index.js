import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';



const WeatherData = ({currentTemp,minTemp,maxTemp,icon}) => (
<div className="weather-data">
                <div className="weather-data-icon">
                <WeatherIcons name={icon} size="12" />
                </div>
                <h2 className="weather-data-temp">Tiempo {currentTemp} ºC</h2>
                <h4 className="weather-data-max-temp">Maxima {maxTemp} ºC</h4>
                <h4 className="weather-data-min-temp">Minima {minTemp} ºC</h4>
              </div>
          
);
 
    
  WeatherData.propTypes = {
    icon: PropTypes.string.isRequired,
    currentTemp: PropTypes.string.isRequired,
    maxTemp: PropTypes.string.isRequired,
    minTemp: PropTypes.string.isRequired
  }

  export default WeatherData;