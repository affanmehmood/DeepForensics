import React from "react";

import { NavLink } from "react-router-dom";

const ServiceCard = (props) => {
  const web = props.imgsrc;
  const title = props.title;
  const text = props.text;
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={web} className="card-img-top service-img" alt="Service" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <NavLink to="#" className="btn btn-primary">
              Details
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
