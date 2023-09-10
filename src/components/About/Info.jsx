import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

defineElement(lottie.loadAnimation);

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <lord-icon
                  src="https://cdn.lordicon.com/wutqoutb.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#AB8C52"
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  >
            </lord-icon>

            <h3 className="about__title">Bouquet</h3>
            <span className="about__subtitle">Design Bouquet</span>
        </div>

        <div className="about__box">
            <lord-icon
                  src="https://cdn.lordicon.com/exxpxwat.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#AB8C52"
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  >
            </lord-icon>

            <h3 className="about__title">Flower</h3>
            <span className="about__subtitle">Premium Flower</span>
        </div>

        <div className="about__box">
            <lord-icon
                  src="https://cdn.lordicon.com/nkmsrxys.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#AB8C52"
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  >
            </lord-icon>
            <h3 className="about__title">Packing</h3>
            <span className="about__subtitle">Secure Packing</span>
        </div>
    </div>
  )
}
