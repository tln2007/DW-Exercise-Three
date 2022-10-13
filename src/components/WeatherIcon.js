import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCloud, faUmbrella, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons';

function WeatherIcon({ weatherType }) {
    switch(weatherType) {
        case "Clouds":
        case "Fog":
            return <FontAwesomeIcon icon={faCloud} />
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} />
        case "Snow": 
            return <FontAwesomeIcon icon={faSnowflake} />
        case "Sun": 
        case "Clear":
            return <FontAwesomeIcon icon={faSun} />
        case "Thunder":
            return <FontAwesomeIcon icon={faBolt} />
        default:
            return null;
    }
}

export default WeatherIcon;