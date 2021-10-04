import React from "react";

const Feature = () => {
  // featurs page that shown in home
  return (
    <div className="container my-5">
      <div className="row cols-sm-1 gy-4">
        <div className="col-md-3 p-3 ">
          <h1 className="mb-3 custom-color">Awesome Feature</h1>
          <p>
            Learn new knowledge and skills in a variety of ways, from engaging
            video lectures and dynamic graphics to data visualizations and
            interactive elements.
          </p>
          <button className="my-button mt-3">Read more</button>
        </div>
        <div className="col-md-3  p-4">
          <div className="text-center p-2 border hover-shadow py-4">
            <h3 className="fs-1">
              <i class="fas fa-smile"></i>
            </h3>
            <h1 className="fs-3 mt-4 mb-3 custom-color">Better Future</h1>
            <p>Demonstrating your knowledge is a critical part of learning.</p>
          </div>
        </div>
        <div className="col-md-3 p-4">
          <div className=" text-center p-2 border hover-shadow py-4">
            <h3 className="fs-1">
              <i class="fas fa-male"></i>
            </h3>
            <h1 className="fs-3 mt-4 mb-3 custom-color">Qualified Trainers</h1>
            <p>
              We have lot of highly qualified techers.They will guided you when
              you need
            </p>
          </div>
        </div>
        <div className="col-md-3  p-4">
          <div className="text-center p-2 border hover-shadow py-4">
            <h3 className="fs-1">
              <i class="far fa-lightbulb"></i>
            </h3>
            <h1 className="fs-3 mt-4 mb-3 custom-color">Job Oppurtunity</h1>
            <p>Learning on edX transforms how you think and what you can do,</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
