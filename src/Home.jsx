import React from "react";
import "./index.css";
import HomeAbout from "./ReusableCompnents/home-about";
import image from "./images/video.svg";

const Home = () => {
  const msg1 = "Investigate crimes with";
  const msg1_2 = "OcularX";
  const msg2 = "The leading video forensics toolkit in the market.";
  const msg3 = "Get Started";
  const dest = "/download";
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

export default Home;
