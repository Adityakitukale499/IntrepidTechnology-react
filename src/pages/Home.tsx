import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Internships from '../components/Internships';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Internships />
      <Contact />
    </div>
  );
};

export default Home;