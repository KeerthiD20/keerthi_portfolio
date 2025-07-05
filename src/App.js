import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
// import Experience from './pages/Experience';

function App() {
  return (
    <>
      <div className="app-wrapper">
      <Header />
      <main className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </>
      
    
    
  );
}

export default App;
