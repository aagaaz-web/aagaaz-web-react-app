import React from 'react';

import Navbar from './Navbar';
import Cover from './Cover';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Cover />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
