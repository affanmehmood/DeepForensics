import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";
function addCard() {
  var cards = [];
  var cities = [
    "Sydney",
    "Rawalpindi",
    "Municn",
    "Islamaabad",
    "Fargo",
    "Ney York",
    "Tokyo",
  ];
  var countries = ["AU", "PK", "GR", "PK", "US", "US", "JP"];
  var temps = [30, 25, 5, 20, -15, 5, 10];
  var conditions = [
    "Sunny",
    "Partly Cloudy",
    "Rainy",
    "Cloudy",
    "Blizzard",
    "Snowy",
    "Partly Cloudy",
  ];

  for (let i = 0; i < cities.length; i++) {
    cards.push(
      <WeatherCard
        temp={temps[i]}
        city={cities[i]}
        country={countries[i]}
        cond={conditions[i]}
      ></WeatherCard>
    );
  }
  return cards;
}
function App() {
  return (
    <div className="App">
      <h1 className="title">Weather Card App</h1>
      <div className="for-flex">${addCard()}</div>
    </div>
  );
}

export default App;
