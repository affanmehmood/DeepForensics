import React from "react";

import styled from "@emotion/styled";

const Condition = (props) => {
  const Temp = styled.h1`
    padding: 0;
    margin: 0;
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
  `;

  const State = styled.h3`
    padding: 0;
    margin: 0;
    font-family: "Recursive", serif;
  `;

  return (
    <>
      <Temp>30°C</Temp>
      <State>Clouds</State>
    </>
  );
};

export default Condition;
