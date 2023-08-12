import React from 'react';
import imgBouquet from "../../assets/img/icon-Flower.svg"
import imgBouquet2 from "../../assets/img/icon-Flower2.svg"
import imgBouquet3 from "../../assets/img/icon-Flower3.svg"

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <img src={imgBouquet} alt="logo" className='about__icon'/>

            <h3 className="about__title">Bouquet</h3>
            <span className="about__subtitle">Design Bouquet</span>
        </div>

        <div className="about__box">
            <img src={imgBouquet2} alt="logo" className='about__icon'/>

            <h3 className="about__title">Flower</h3>
            <span className="about__subtitle">Premium Flower</span>
        </div>

        <div className="about__box">
            <img src={imgBouquet3} alt="logo" className='about__icon'/>

            <h3 className="about__title">Packing</h3>
            <span className="about__subtitle">Secure Packing</span>
        </div>
    </div>
  )
}
