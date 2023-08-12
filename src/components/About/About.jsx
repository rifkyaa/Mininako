import React from 'react';
import "./About.css";
import { Info }  from './Info';
import aboutImg from "../../assets/img/img-about.png"

const About = () => {
  return (
    <section className="container section__about" id='about'>
      <h1 className="title__about">Tentang Mininako</h1>

      <div className='container__about'>
        <img src={aboutImg} alt="" className="about__img" />
        <div className="section-right__about">
            <Info />

            <p className="desc__about">Mininako Bouquet & Flower adalah toko bunga yang didirikan pada tahun 2021 dengan konsep Quality to Elegancy yang fokus pada desain bouquet. Mininako menawarkan berbagai jenis bouquet. Mininako juga menjual bunga mawar berkualitas premium yang dipetik langsung dari kebun.</p>
        </div>
      </div>
    </section>
  )
}

export default About