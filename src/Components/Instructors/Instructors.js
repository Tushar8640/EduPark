import React from "react";
import img1 from "./img/img (1).webp";
import img2 from "./img/img (2).webp";
import img3 from "./img/img (3).webp";
import img4 from "./img/img (4).webp";

const Instructors = () => {
  // instrutors page 
  return (
    <div className="container mt-5">
      <h1 className="fs-1 mb-4 custom-color text-center">Our Instuctors</h1>
      <div className="row my-5 text-center">
        <div className="col-md-3">
          <div className="card">
            <img src={img1} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Alexa Janathon</h5>
              <p className="card-text">Faculty</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={img2} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Janathon Smith</h5>
              <p className="card-text">Faculty</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={img3} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Alexa MacCalum</h5>
              <p className="card-text">Faculty</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={img4} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Alexa j Watson</h5>
              <p className="card-text">Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
