import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  )
}

export default App