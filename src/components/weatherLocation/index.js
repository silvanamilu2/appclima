import React from  'react';
import './stilo.css';
import WeatherData from './components/weatherData';


class WeatherLocation extends React.Component{
  constructor(props){//inicializacion
    super(props);

    this.state={
      icon:"day-sunny", 
      currentTemp:32,
      maxTemp: 35,
      minTemp: 11,
    };
  }//this.props.city    san,AR
  componentWillMount(){//el componente se esta por montar, antes de mostrar en pantalla
console.log("llamando a la api");
  fetch("http://api.openweathermap.org/data/2.5/weather?q=Salta,AR&appid=7abcca535034fe80a738bf7c5f57df6e&units=metric")
    .then(response => {
      return response.json();
    }).then(data =>{ //data tiene los datos de la api
      console.log("respuesta de la api");
      console.log(data.main.temp);

      this.setState({
          currentTemp: data.main.temp,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
      });

    });

  }
  render(){
    return <div>
    <div className="weather-location">
  <h2>{this.props.city}</h2>
  
            <WeatherData 
              icon={this.state.icon}
              currentTemp={this.state.currentTemp}
              maxTemp={this.state.maxTemp} 
              minTemp={this.state.minTemp}
      
            />
        </div>
        </div>
}

}


export default WeatherLocation;