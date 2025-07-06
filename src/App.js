import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DevelopmentProcess from './components/DevelopmentProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <DevelopmentProcess />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
