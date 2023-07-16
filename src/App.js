import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testomonials from './components/Testomonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Testomonials/>
        <Cta/>
        <Footer/>
    </div>
  );
}

export default App;
