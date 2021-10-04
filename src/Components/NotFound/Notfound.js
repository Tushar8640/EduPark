import React from 'react';
import { Link } from 'react-router-dom';
import image1 from './404.jpg'

// if on page found this  page will be shown 
const Notfound = () => {
    return (
        <div>
            
            <div className="container my-3">
      <div className="row text-center">
          <div>
          <h1 className="fs-1 mt-5 custom-color text-center">No page found</h1>
          <img className="w-25" src={image1} />
          </div>
      
         
      </div>
    </div>
        </div>
    );
};

export default Notfound;