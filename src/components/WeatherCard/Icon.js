import React from "react";

import styled from "@emotion/styled";

const Icon = (props) => {
  let url = ``;
  if (props.cond === "Sunny") {
    url = `sunny.png`;
  } else if (props.cond === "Partly Cloudy") {
    url = `partly-cloudy.png`;
  } else if (props.cond === "Cloudy") {
    url = `cloudy.png`;
  } else if (props.cond === "Blizzard") {
    url = `blizzard.png`;
  } else if (props.cond === "Rainy") {
    url = `rain.png`;
  } else if (props.cond === "Snowy") {
    url = `snow.png`;
  }

  const Image = styled.img`
    height: 40%;
    padding: 0;
    margin: 0;
  `;
  return <Image alt="Weather Image" src={url} />;
};

export default Icon;
