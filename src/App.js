import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DevelopmentProcess from './components/DevelopmentProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <DevelopmentProcess />
      <section id="contact"><Contact /></section>
      <Footer />

    </div>
  );
}

export default App;
