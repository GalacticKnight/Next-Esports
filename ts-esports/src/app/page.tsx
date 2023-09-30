import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/homePage/Hero';
import About from '@/components/homePage/About';
import About2 from '@/components/homePage/About2';
import About3 from '@/components/homePage/About3';
import About4 from '@/components/homePage/About4';
import Gallery from '@/components/homePage/Gallery';
import Contact from '@/components/homePage/Contract';
import Contact2 from '@/components/homePage/Contract2';
import Footer from '@/components/shared/Footer';
import Mission from '@/components/homePage/Mission';

export default function Home() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Navbar/>
      <Hero/>
      <div id="about">
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
        <Mission/>
        <div className='flex-fod'>
                <About/>
                <About2/>
                <About3/>
        </div>
        <div className="centering">
            <About4/>
        </div>
        <Gallery/>
        <div id="contact">
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <Contact/>
      <Contact2/>
      <Footer/>
       
  </div>
  )
}
