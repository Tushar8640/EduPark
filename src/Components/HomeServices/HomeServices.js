import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HomeServices = () => {
    // set state for sercice 
    const [service,setService]=useState([]);

    // load fake data 
   useEffect(()=>{
       fetch("/homeService.JSON")
       .then(res => res.json())
       .then(data => setService(data))
   },[])
    return (
    <div className="container my-4">
            <div className="row">
                <p className="text-center mt-5 mb-4 custom-color">Popular Online Services
</p>
            <h1 className="text-center mb-5 custom-color">Lets Browse All Catagoris</h1>
            {
                service.map(single => <div className="  col-md-3 px-4">
               <div className="shadow-sm card h-100">
                   <div>
                   <img className="img-fluid" src={single.picture} className="card-img-top"/>
                   </div>
              
                <div className="card-body">
                  <h5 className="card-title ">{single.title}</h5>
                 
                  <p className="card-text mb-1">{single.details}</p>
                  <p className=" fw-bold">Price:  {single.price}</p>
                  <Link to="/services">  <button className="my-button">More services</button></Link>
                 
                </div>
               </div>
              </div>)
            }
        </div>
   
    </div>
   );
};

export default HomeServices;