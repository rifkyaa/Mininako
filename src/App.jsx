import React from 'react';
import './App.css';
// Image
import flower from "../src/assets/img/flower/flower.png"
import flower2 from "../src/assets/img/flower/flower2.png"
import flower3 from "../src/assets/img/flower/flower3.png"
import flower4 from "../src/assets/img/flower/flower4.png"
import flower5 from "../src/assets/img/flower/flower5.png"
// Image End
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Bouquet from './components/Bouquet/Bouquet';
import Flower from './components/Flower/Flower';
import Testimoni from './components/Testimoni/Testimoni';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  const flowerData = [
    {
      id: 1,
      name: 'Red Rose',
      image: flower,
      price: '50.000',
    },
    {
      id: 2,
      name: 'White Rose',
      image: flower2,
      price: '100.000',
    },
    {
      id: 3,
      name: 'Yellow Rose',
      image: flower3,
      price: '50.000',
    },
    {
      id: 4,
      name: 'Orange Rose',
      image: flower4,
      price: '150.000',
    },
    {
      id: 5,
      name: 'Blue Rose',
      image: flower5,
      price: '100.000',
    },
  ];

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Bouquet />
        <Flower flowerData={flowerData} />
        <Testimoni />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App