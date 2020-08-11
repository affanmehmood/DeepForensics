import React from "react";

import styled from "@emotion/styled";

const Location = (props) => {
  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h1`
    font-family: "Merriweather", serif;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  `;
  const Country = styled.h3`
    font-family: "Merriweather", serif;
    padding: 0;
    margin: 0;
    font-size: 1.1rem;
  `;

  return (
    <Container>
      <City>{props.city}</City>
      <Country>{props.country}</Country>
    </Container>
  );
};
export default Location;
