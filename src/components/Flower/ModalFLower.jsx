import React from 'react';
import './Flower.css';
import "animate.css";
import { AiOutlineCloseCircle } from "react-icons/ai"

const FlowerModal = ({ flowerData, onClose }) => {
  return (
    <div className="flower-modal-overlay animate__animated animate__fadeIn">
      <div className="flower-modal animate__animated animate__fadeInDown">
        <div className="modal-content-flower">
          {flowerData.map((flower) => (
            <div key={flower.id} className="flower-card">
              <img src={flower.image} alt={flower.name} className="flower-image" />
              <h2>{flower.name}</h2>
              <p>Harga: {flower.price}</p>
            </div>
          ))}
          <AiOutlineCloseCircle onClick={onClose} className='btn-close-flower animate__animated animate__fadeInDownBig '/>
        </div>
      </div>
    </div>
  );
};

export default FlowerModal;
