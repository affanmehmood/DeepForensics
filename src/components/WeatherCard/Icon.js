import React from "react";

import styled from "@emotion/styled";

const Icon = (props) => {
  const Image = styled.img`
    height: 40%;
    padding: 0;
    margin: 0;
  `;
  return (
    <Image
      alt="Weather Image"
      src="https://www.weather2umbrella.ca/wp-content/themes/w2u-ca/image/svg/weather-icons/d04.svg"
    />
  );
};

export default Icon;
