import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from "../components/WeatherCard.js";
import Header from "../components/Header.js";
import { useSearchParams } from 'react-router-dom';

function Home() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('Orlando');
    const [searchParams] = useSearchParams();
    
    // Cities: Seoul, Dhaka, London, Boston

    useEffect (() => {
        const cityToQuery = searchParams.get('city') || city;
        setCity(cityToQuery);
        // Query OpenWeatherAPI for weather data
        // make request to OpenWeather based on a city

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`)
            .then(function (response) {
                setWeatherData(response.data);
            })
            .catch(function (error) {
                //console.warn(error);
                setWeatherData({});
            });
    }, []);

    const { cloudiness, currTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        const weatherClouds = weatherData.clouds || {};
        return {
            cloudiness: weatherData.clouds && weatherData.clouds.all,
            currTemp: Math.round(weatherMain.temp),
            highTemp: Math.round(weatherMain.temp_max),
            humidity: weatherMain.humidity,
            lowTemp: Math.round(weatherMain.temp_min),
            weatherType: weatherData.weather && weatherData.weather[0].main,
            windSpeed: weatherData.wind && weatherData.wind.speed,
        };
    }, [weatherData]);

    // Display this weather data in our app
    // console.log("state value",weatherData);

    return (
        <div style={{backgroundColor: `rgba(0,0,0, ${cloudiness/100})`}}>
            <div className="Weather--wrapper">
                <Header />
                <h1>WEATHER APP</h1>
                <WeatherCard 
                    city = {city}
                    cloudiness = {cloudiness}
                    currTemp = {currTemp}
                    highTemp = {highTemp}
                    humidity = {humidity}
                    lowTemp = {lowTemp}
                    weatherType = {weatherType}
                    windSpeed = {windSpeed}
                />
                
            </div>
        </div>
    ); 
}

export default Home;