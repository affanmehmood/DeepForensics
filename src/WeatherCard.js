import React from 'react';


const WeatherCard = (props)=>{
    return(
        <div className="card">
            
            <div className="location">
                <h1 className="city">Sydey</h1>
                <h3 className="country">AU</h3>
            </div>
            <img className="icon" src="https://www.weather2umbrella.ca/wp-content/themes/w2u-ca/image/svg/weather-icons/d04.svg" 
            alt="Weather Icon"/>
            <h1 className="temp">30°C</h1>
            <h3 className="cond">Clouds</h3>
        </div>
    )
}
export default WeatherCard;