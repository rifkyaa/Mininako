import React, { useState, useEffect } from 'react';
import './Home.css';
import iconflower from '../../assets/img/icon-flower.svg';
import iconflower2 from '../../assets/img/icon-flower2.svg';
import iconflower3 from '../../assets/img/icon-flower3.svg';
import flower from '../../assets/img/about-flower.png';
import mainFlower from '../../assets/img/hero-img.png'
import mainFlower2 from '../../assets/img/hero-img2.png'

const Home = () => {
    const images = [
        {
            src: mainFlower,
            desc: 'Flower Satu',
        },
        {
            src: mainFlower2,
            desc: 'Flower Dua',
        },
      ];
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [currentDesc, setCurrentDesc] = useState('');
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setIsFlipping(true);
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
        setIsFlipping(false);
    };
    
  return (
    <div className="container">
        <div className="pattern-circle"></div>
        <div className="pattern-square"></div>
        <div className="pattern-triangle"></div>
        <section className="section section-left">
            <div className="title">
                <h1 className="main-title">Premium Affordable Bouquet & Flower</h1>
            </div>
            {/* <button className="btn-cta">Order</button> */}
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
            <div className="content__card">
                <div className="wrapper__icon">
                    <img src={iconflower} className="icon-flower" />
                    <h3 className="text__content">Design Bouquet</h3>
                </div>

                <div className="wrapper__icon">
                    <img src={iconflower2} className="icon-flower" />
                    <h3 className="text__content">Premium Flower</h3>
                </div>

                <div className="wrapper__icon">
                    <img src={iconflower3} className="icon-flower" />
                    <h3 className="text__content">Secure Pack</h3>
                </div>
            </div>
        </section>
        <section  className='section-right'>
            <div className={`main-content ${isFlipping ? 'flipping' : ''}`}
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