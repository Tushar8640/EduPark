import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Services = () => {
  // services page
  const [services, setServices] = useState([]);
  // load fake data
  useEffect(() => {
    fetch("/services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container my-4">
      <div className="row gy-4">
        <h1 className="text-center mb-4 mt-5  custom-color">
          All of our Services
        </h1>
        {services.map((single) => (
          <div className="  col-md-4 px-4">
            <div className="p-3">
              <div className="card">
                <div className="">
                  <img
                    className="img-fluid"
                    src={single.picture}
                    className="card-img-top" alt="nothing"
                  />
                </div>

                <div className="card-body">
                  <h5 className="card-title ">{single.title}</h5>
                  <p className="card-text mb-2">{single.details}</p>
                  <p className="card-text fw-bold">{single.price}</p>
                  <Link to="/services">
                    <button className="my-button">More service</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
