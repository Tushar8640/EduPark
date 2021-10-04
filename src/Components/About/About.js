import React from "react";
import { Link } from "react-router-dom";
import img11 from "../../image/img (11).png";

const About = () => {
  // about page
  return (
      <div className="container my-5">
        <div className="row">
        <div className="col-md-6 col-sm-12 pe-4">
            <img className="img-fluid" src={img11} alt="" />
          </div>
          <div className="col-md-6 col-sm-12 mt-5 ps-4">
            <h1 className="w-75 small-heading mt-5 custom-color ms-5">
            Learning with Love and Laughter
            </h1>
            <p  className="ms-5 mt-4">Your edX learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles:</p>
            <ol className="ms-5">
                <li className="">We provide you our best effort</li>
                <li>We are here for help you.
</li>
            </ol>
            <Link to="/services"> <button className="my-button mt-4">Services</button></Link>
          </div>
        
        </div>
      </div>

  );
};

export default About;
