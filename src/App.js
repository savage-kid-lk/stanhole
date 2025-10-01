import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Socials from './components/Socials';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Team />
      <Contact />
      <Footer />
      <Socials />
    </div>
  );
}

export default App;