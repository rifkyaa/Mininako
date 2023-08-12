import React, { useState, useEffect } from 'react';
import './Home.css';
import iconflower from '../../assets/img/icon-flower.svg';
import iconflower2 from '../../assets/img/icon-flower2.svg';
import iconflower3 from '../../assets/img/icon-flower3.svg';
import flower from '../../assets/img/about-flower.png';
import mainFlower from '../../assets/img/hero-img.png';
import mainFlower2 from '../../assets/img/hero-img2.png';
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Home = () => {
    const images = [
        {
            src: mainFlower,
            desc: 'Premium Affordable Bouquet & Flower',
        },
        {
            src: mainFlower2,
            desc: 'Premium Affordable Bouquet & Flower',
        },
      ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [currentDesc, setCurrentDesc] = useState('');
    const [isFade, setIsFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setIsFade(true);
            }
            }, 6000);
  
      return () => {
        clearInterval(interval);
      };
    }, [images, isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setCurrentDesc(images[currentImageIndex].desc);
      };
    
    const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentDesc('');
    };

    const handleAnimationEnd = () => {
        setIsFade(false);
    };
    
  return (
    <div className="container__home" id='home'>
        <div className="pattern-circle"></div>
        <div className="pattern-square"></div>
        <div className="pattern-triangle"></div>
        <section className="section section-left">
            <div className="title">
                <h1 className="main-title">Premium Affordable Bouquet & Flower</h1>
            </div>
            {/* <button className="btn-cta">Order</button> */}
            <div className="wrapper__icon">
                <a href="#" className='home__social-icon' target="_blank">
                    <AiFillInstagram className='icon-sosmed'/><span className='title-icon'>Instagram</span>   
                </a>
                <a href="#" className='home__social-icon' target="_blank">
                    <FaTiktok className='icon-sosmed'/><span className='title-icon'>Tiktok</span>   
                </a>
                <a href="#" className='home__social-icon' target="_blank">
                    <FaTiktok className='icon-sosmed'/><span className='title-icon'>Tiktok</span>   
                </a>
            </div>
            <div className="card-second">
                <div className="shapes"></div>
                <div className="content-img">
                    <img src={flower} alt="flower" className='flower-img'/>
                </div>
                <div className="title-img">
                    <h4 className="title-card">Make Your Special One Today.</h4>
                    <p className="desc-card">if flowers symbolizes beauty, then a bouquet of flowers symbolizes happiness and loyalty. Give a special gift to a special person .</p>
                </div>
            </div>
        </section>
        <section  className='section-right'>
            <div className={`main-content ${isFade ? 'fade' : ''}`}
                onAnimationEnd={handleAnimationEnd}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                 >
                <img key={currentImageIndex} src={images[currentImageIndex].src} alt="Main-Img" className='main-img'/>
                {isHovered && (
                <div className="desc">
                    <h1 className='text-desc'>{currentDesc}</h1>
                </div>
                )}
            </div>
        </section>
    </div>
  )
}

export default Home