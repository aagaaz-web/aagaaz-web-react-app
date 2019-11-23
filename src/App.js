import React from 'react';

import Navbar from './Components/Navbar';
import Cover from './Components/Cover';
import About from './Components/About';
import NoticeBoard from './Components/NoticeBoard';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <About />
      {/* <NoticeBoard /> */}
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
