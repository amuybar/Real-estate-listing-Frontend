import React from 'react';
import HeroSection from '../components/Hero/Hero';
import Footer from '../components/Footer.js';
import ListingDetails from '../components/FeaturedListing/FeaturedListing';
import Testimonials from '../components/Testimonials/Testimonials';
import CallToAction from '../components/CTA/CallToAction';
import Agency from '../components/Agency/Agency';
import Discover from '../components/Discover/Discover';

const Home = () => {
 

  const testimonials = [
    {
      id: 1,
      clientName: 'Barrack Amuyunzu',
      location: 'Lucky Summer',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      clientName: 'Grace Githinji',
      location: 'ZimmerMan',
      quote: 'Vivamus tempor hendrerit arcu, vitae faucibus nunc hendrerit.'
    },
    // Add more testimonials as needed
  ];
  const handleLogin = () => {
    window.location.href = '/login';
  };

  const handleRegister = () => {
    window.location.href = '/register';
  };

  return (
    <div>
      <HeroSection />
      
      <div className="container">
       <h2>Featured Listings</h2>
       <ListingDetails />
      </div>
      <Discover/>
      <Agency/>
      <div className="container">
        <h2>Testimonials</h2>
        <Testimonials testimonials={testimonials} />
      </div>
      <CallToAction />
      <div className='auth-home'>
            <button className='register'onClick={handleRegister} >Register</button>
            <button className='login' onClick={handleLogin}>Login</button>
          </div>
      <Footer/>
    </div>
  );
};

export default Home;
