import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Experience from './sections/Experience';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-white bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Experience />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
