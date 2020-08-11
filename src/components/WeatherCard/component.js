import React from "react";

import styled from "@emotion/styled";

import Location from "./Location";
import Image from "./Icon";
import Condition from "./Condition";

const WeatherCard = (props) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (props.temp > 12) {
    // for hot weather
    highColor = (1 - (props.temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (props.temp <= 12) {
    // for low weather
    highColor = (1 - (props.temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to bottom,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }
  const Card = styled.div`
    margin: 0 auto;
    padding-top: 12px;
    background: ${bg};
    width: 185px;
    height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  `;
  return (
    <Card>
      <Location city={props.city} country={props.country} />
      <Image cond={props.cond} />
      <Condition temp={props.temp} cond={props.cond} />
    </Card>
  );
};
export default WeatherCard;
