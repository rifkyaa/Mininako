import React,{useEffect} from "react";
import "./About.css";
import { Info }  from './Info';
import aboutImg from "../../assets/img/img-about.png"
import AOS from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section className="container section__about" id='about'>
      <div className="wrapper-title">
        <h1 className="title__about">About <span className='unique-title'>Mininako</span></h1>
      </div>

      <div className='container__about'>
        <img src={aboutImg} alt="" className="about__img" data-aos="fade-right"/>
        <div className="section-right__about" data-aos="fade-left">
            <Info />

            <p className="desc__about">Mininako Bouquet & Flower adalah toko bunga yang didirikan pada tahun 2021 dengan konsep Quality to Elegancy yang fokus pada desain bouquet. Mininako menawarkan berbagai jenis bouquet. Mininako juga menjual bunga mawar berkualitas premium yang dipetik langsung dari kebun.</p>
        </div>
      </div>
    </section>
  )
}

export default About