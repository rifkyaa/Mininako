import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { BiDownArrow } from 'react-icons/bi'
import mainFlower from '../../assets/img/hero-img.png';
import mainFlower2 from '../../assets/img/hero-img2.png';
import mainFlower3 from '../../assets/img/products/product2.png';
import mainFlower4 from '../../assets/img/products/product3.png';
import mainFlower5 from '../../assets/img/products/product6.png';
import mainFlower6 from '../../assets/img/products/product4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "animate.css"
import Modal from './Modal';

import AOS from "aos";
import 'aos/dist/aos.css';


const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const swiperRef = useRef(null);

  
  useEffect(() => {
    AOS.init();
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.slidesPerView = window.innerWidth < 768 ? 2 : 4;
      swiper.params.spaceBetween = window.innerWidth < 768 ? 20 : 60;
      swiper.update();
    }
  }, []);

  const handleOpenModal = (index) => {
    document.body.style.overflow = "hidden";
    setSelectedProduct(index);
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    document.body.style.overflow = "auto";
    setSelectedProduct(null);
    setModalOpen(false);
  };

  const products = [
        {
          name: 'Dasly',
          image: mainFlower,
          price: '50.000',
          description: 'Dasly adalah pilihan sempurna untuk Anda yang menyukai keindahan tanaman buatan. Dengan tampilan yang menawan, Dasly memberikan sentuhan alam dalam gaya yang elegan.',
          rating: 4.5,
        },
        {
          name: 'Eternal Elegance',
          image: mainFlower2,
          price: '100.000',
          description: 'Eternal Elegance adalah perwujudan sempurna dari keanggunan abadi dalam sebuah rangkaian bunga. Dengan komposisi yang dipilih secara cermat, bunga-bunga indah ini menciptakan harmoni yang memukau. Setiap kelopaknya mencerminkan keindahan yang tak tergoyahkan seiring berjalannya waktu.',
          rating: 4,
        },
        {
          name: 'Baby Pink',
          image: mainFlower3,
          price: '50.000',
          description: 'Baby Pink adalah pilihan yang lembut dan cantik untuk memberikan sentuhan kebahagiaan pada setiap momen. Dengan nuansa warna merah muda yang manis, bunga ini cocok untuk memberikan hadiah yang indah.',
          rating: 5,
        },
        {
          name: 'Rossa',
          image: mainFlower4,
          price: '150.000',
          description: 'Rossa adalah simbol cinta dan semangat. Bunga ini menghadirkan keindahan merah yang mencolok, menyampaikan perasaan yang mendalam dan berarti.',
          rating: 3,
        },
        {
          name: 'White Coffee',
          image: mainFlower5,
          price: '100.000',
          description: 'White Coffee adalah pilihan yang elegan dan eksklusif. Dengan tampilan putih yang mewah, bunga ini cocok untuk memberikan kesan istimewa.',
          rating: 5,
        },
        {
          name: 'Rora',
          image: mainFlower6,
          price: '100.000',
          description: 'Rora adalah kombinasi antara keanggunan dan daya tahan. Dengan desain yang unik dan menarik, bunga ini memberikan kesan yang tak terlupakan.',
          rating: 3.5,
        },
  ];

  return (
    <section className="container section__home" id='home'>
      <div className="bg-pattern"></div>
      <div className="wrapper__title" data-aos="fade-down" data-aos-duration="2000">
        <h1 className="title__home">Premium Affordable Bouquet & Flower</h1>
        <span className="subtitle__home">"Happiness is a choice, not a result. Nothing will make you happy until you choose to be happy."</span>
      </div>
      <div className="wrapper__best-seller" data-aos="fade-down" data-aos-duration="2000">
        <h3 className="best__seller">Best Seller</h3>
        <BiDownArrow className='icon__best-seller animate__animated animate__shakeY animate__infinite animate__slower'/>
      </div>
      <div className="wrapper__hero" data-aos="fade-left" data-aos-duration="2000">
        <Swiper
          ref={swiperRef}
          init="false"
          centeredSlides={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={Pagination}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
                <img
                    src={product.image}
                    alt={`Slide ${index}`}
                    className={`img-swiper ${selectedProduct === index ? 'activeSlide' : ''}`}
                    onClick={() => handleOpenModal(index)}
                />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        product={products[selectedProduct]}
    />
    </section>
  )
}

export default Home;
