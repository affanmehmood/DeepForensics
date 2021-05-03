import React from "react";

import ServiceCard from "./ReusableCompnents/service-card";
import Sdata from "./Sdata.jsx";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <a className="text-center" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/uc?export=download&id=1nb6Mip5y3ut0Sy6SP7Q-kbL-N3v-ANGr" className="text-center m-4"> <h1>Download OcularX Now</h1></a>
        <h2 className="text-center">Tools We Provide</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <ServiceCard
                    key={val.key}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
