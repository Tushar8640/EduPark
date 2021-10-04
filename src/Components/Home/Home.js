import React from 'react';
import Feature from '../Feature/Feature';
import Hero from '../Hero/Hero';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    // this  is home page
    return (
        <div>
            <Hero></Hero>
            <Feature></Feature>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;