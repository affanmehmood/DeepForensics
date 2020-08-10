import React from "react";

import styled from "@emotion/styled";

import Location from "./Location";
import Image from "./Icon";
import Condition from "./Condition";

const WeatherCard = (props) => {
  const red = -40000;

  const Card = styled.div`
    margin: 0 auto;
    margin-top: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
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
  `;
  return (
    <Card>
      <Location />
      <Image />
      <Condition />
    </Card>
  );
};
export default WeatherCard;
