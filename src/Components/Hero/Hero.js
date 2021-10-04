import React from "react";
import { Link } from "react-router-dom";
import banner from "../../image/hero.png";
const Hero = () => {
  // hero section 
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-5 ps-4">
          <h1 className="w-75 heading-text mt-5 custom-color">Learn Your Favorite Course From Online</h1>
          <Link to="/about"> <button className="my-button mt-4">About us</button></Link>
         
        </div>
        <div className="col-md-6 col-sm-12 p-">
          <img className="img-fluid" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
