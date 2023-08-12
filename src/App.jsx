import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Bouquet from './components/Bouquet/Bouquet';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Bouquet />
      </main>
    </>
  )
}

export default App