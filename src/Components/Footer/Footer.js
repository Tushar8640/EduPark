import React from "react";
import logo from "../../image/logo.png";

const Footer = () => {
    // footer 
  return (

      <div className="container my-5">
          <div className="row bg-light">
          <div className="col-md-4 col-sm-6 p-3">
            <img src={logo} className="w-50" alt="" />
            <p>
              But when shot real her. Chamber her one visite removal six sending
              himself boys scot exquisite existend an
            </p>
          </div>
          <div className="col-md-4 col-sm-6 mt-4">
            <h1 className="fs-3 fw-bold">Newsletter</h1>
            <p className="pe-3">
              Stay updated with our latest trends Seed heaven so said place
              winged over given forth fruit.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 mt-4">
            <h1 className="fs-3 fw-bold">Contact us</h1>
            <p>
              <span className="fw-bold">Address :</span>Dhaka ,Bangladesh.
            </p>
            <p>
              <span className="fw-bold">Email :</span>imrantushar44@gmail.com
            </p>
          </div>
        </div>
        </div>
  );
};

export default Footer;
