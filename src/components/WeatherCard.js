import React from 'react';

function WeatherCard({ 
    city, 
    cloudiness, 
    currTemp, 
    highTemp, 
    humidity, 
    lowTemp, 
    weatherType, 
    windSpeed
}) {
    return (
        <div className="WeatherCard">
            <h2>{city}</h2>
            <p className="WeatherCard--temp">{currTemp}&deg;F</p>
            <p className="WeatherCard--type">{weatherType}</p>
           
            <div className="WeatherCard--stats">
                <div>
                    <p>High: {highTemp}&deg;F</p>
                </div>
                <div>
                    <p>Low: {lowTemp}&deg;F</p>
                </div>
                <div>
                    <p>Cloudiness: {cloudiness}%</p>
                </div>
                <div>
                    <p>Humidity: {humidity}%</p>
                </div>
                <div>
                    <p>Wind: {windSpeed}/mph</p>
                </div>
            </div>      
        </div>
    );
}

export default WeatherCard;
