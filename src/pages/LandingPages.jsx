import React from 'react';
import Navbar_LandingPages from '../components/Navbar_LandingPages';
import Hero_LandingPage from '../components/Hero_LandingPage';

const LandingPages = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar_LandingPages />
      <Hero_LandingPage />
    </div>
  );
};

export default LandingPages;