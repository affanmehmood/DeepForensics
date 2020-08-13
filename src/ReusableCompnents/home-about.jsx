import React from "react";

import { NavLink } from "react-router-dom";

const HomeAbout = (props) => {
  const msg1 = props.msg1;
  const msg1_2 = props.msg1_2;
  const msg2 = props.msg2;
  const msg3 = props.msg3;
  const web = props.web;
  const dest = props.dest;
  return (
    <>
      <section id="header" className="d-flex align-items-center home-section">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {msg1}
                    <strong className="brand-name"> {msg1_2}</strong>
                  </h1>
                  <h2 className="my-3">{msg2}</h2>
                  <div className="mt-4">
                    <NavLink exact to={dest} className="btn-get-started">
                      {msg3}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img src={web} className="img-fluid animated" alt="home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeAbout;
