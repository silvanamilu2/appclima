import React from 'react';
import './stilo.css';
import WeatherData from './components/weatherData';

import getApiUrlByLocation from '../../services/getApiUrlByLocation';
import {Grid, CircularProgress} from '@material-ui/core';



class WeatherLocation extends React.Component {
  constructor(props) {//inicializacion
    super(props);

    this.state = {
      icon: "day-sunny",
      currentTemp: 0,
      maxTemp: 0,
      minTemp: 0,
      errorMessage: null,
      isLoading: false,
    };
  }//this.props.city    san,AR


  componentWillMount() {//el componente se esta por montar, antes de mostrar en pantalla

    this.setState({
      isLoading: true
    });


    console.log("llamando a la api");

    const url = getApiUrlByLocation(this.props.city);

    
    fetch(url)

   
    

      // fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.props.city + "&appid=7abcca535034fe80a738bf7c5f57df6e&units=metric")
      .then(response => {//devuelve la repuesta del servidor, 
        console.log(response);

        this.setState({
          isLoading: false
        });

        if (response.ok) {
          return response.json();
        } else {
          throw Error("No se encontro la ciudad")
        }
      })

      

      .then(data => { //data tiene los datos de la api - otra promise
        console.log(data);
        console.log("respuesta de la api");
        console.log(data.main.temp);

        this.setState({
          currentTemp: data.main.temp,
          maxTemp: data.main.temp_max,
          minTemp: data.main.temp_min,
          //inicializa el error
          errorMessage: null,
        });


      }).catch(error => {
        console.log("entro al catch");
        // console.log(error);
        this.setState({
          errorMessage: error.message,
          isLoading: false
        })

       
      })

  }
  render() {
    return <div>
      <div className="weather-location">


        <div style={{ color: "red", display: this.state.errorMessage !== null ? "block" : "none" }}>
          <h2>Error:{this.state.errorMessage} </h2>
        </div>



        <h2>{this.props.city}</h2>


        {
          (!this.state.isLoading)
            ?
            <WeatherData
                    icon={this.state.icon}
                    currentTemp={this.state.currentTemp}
                    maxTemp={this.state.maxTemp}
                    minTemp={this.state.minTemp}

                  />
              : <CircularProgress variant="indeterminate" size={80}/>
        }
        
      </div>
    </div>
  }

}


export default WeatherLocation;