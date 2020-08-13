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
            <pre className="card-text overflow-hidden pre-para">{text}</pre>
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
