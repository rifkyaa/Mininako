import React from 'react';
import { useState, useRef } from 'react';
import "./Flower.css";
import flower2 from "../../assets/img/flower/flower2.png"
import flower4 from "../../assets/img/flower/flower4.png"
import FlowerModal from './ModalFLower';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

const Flower = ({ flowerData }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="section__flowerFood" id='other'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="section__flower">
          <img src={flower4} className='icon-flower'/>
          <img src={flower2} className='icon-flower2'/>
          <div className="wrapper-flower">
            <div className="wrapper__title-flower">
                <h1 className="title__flower">Premium Flower</h1>
                <p className="subtitle__flower">Pembelian mawar no 1 di indonesia</p>
            </div>
            <button className="btn__flower" onClick={handleOpenModal}>View</button>
            {showModal && (
              <FlowerModal flowerData={flowerData} onClose={handleCloseModal} />
              )}
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="section__food">
            <div className="wrapper-food">
              <div className="wrapper__title-food">
                  <h1 className="title__food">Our Food</h1>
                  <p className="subtitle__food">Kami juga punya makanan dengan harga special</p>
              </div>
              <button className="btn__food">View</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
    </section>
  )
}

export default Flower