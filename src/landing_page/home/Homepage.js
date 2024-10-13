import React from 'react'
import Hero from './Hero';
import Awards from './Award';
import Education from './education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Pricing from './Pricing';
import NavBar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
        <NavBar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
    
        </>
          );
}

export default HomePage;