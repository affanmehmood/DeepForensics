import React from "react";

import HomeAbout from "./ReusableCompnents/home-about";
import "./App.css";
import image from "./images/laptop.svg";
const About = () => {
  const msg1 = "Welcome to about page";
  const msg1_2 = "OcularX";
  const msg2 = "We are all about providing solutions";
  const msg3 = "Contact Now";
  const dest = "/contact";
  const web = image;
  return (
    <>
      <HomeAbout
        msg1={msg1}
        msg1_2={msg1_2}
        msg2={msg2}
        msg3={msg3}
        web={web}
        dest={dest}
      />
    </>
  );
};

export default About;
