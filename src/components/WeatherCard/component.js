import React from 'react';

import styled from '@emotion/styled'


const WeatherCard = (props)=>{
    const red = -40000
    const Card = styled.div`
    margin: 0 auto;
    margin-top: 5px;
    padding-top: 15px;
    background: linear-gradient(to bottom, rgba(${red}, 200, 200), pink);
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
`
    return(
        <Card className="card">
            
            <div className="location">
                <h1 className="city">Sydey</h1>
                <h3 className="country">AU</h3>
            </div>
            <img className="icon" src="https://www.weather2umbrella.ca/wp-content/themes/w2u-ca/image/svg/weather-icons/d04.svg" 
            alt="Weather Icon"/>
            <h1 className="temp">30°C</h1>
            <h3 className="cond">Clouds</h3>
        </Card>
    )
}
export default WeatherCard;