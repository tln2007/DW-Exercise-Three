import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WEATHER_APP_API_KEY } from "../API_KEYS";

const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}`;
 
function Home() {
    const [weatherData, setWeatherData] = useState({});
    // Query OpenWeatherAPI for weather data
    // make request to OpenWeather based on a city
    
    useEffect (() => {
        axios
        .get(openWeatherURL)
        .then(function (response) {
            //console.log(response);
            setWeatherData(response);
        })
        .catch(function (error) {
            console.warn(error);
            setWeatherData({});
        });
    }, []);

    // Display this weather data in our app
    console.log("state value",weatherData);


    return (
        <div>
            <h1>Weather App</h1>
            <h2>{weatherData.name}</h2>
            <p>Humidity: {weatherData.main && weatherData.main.humidity}</p>
            <p>{openWeatherURL}</p>
        </div>
    ); 
}

export default Home;