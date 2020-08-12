import React from "react";

import HomeAbout from "./ReusableCompnents/home-about";
import "./App.css";

const About = () => {
  const msg1 = "Welcome to about page";
  const msg1_2 = "DeepForensics";
  const msg2 = "We are all about providing solutions";
  const msg3 = "Contact Now";
  const dest = "/contact";
  const web = "laptop.svg";
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
