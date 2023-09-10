import React from 'react';
import './Home.css';
import 'animate.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Rating from '../Rating/Rating';
import { MdOutlineShoppingCartCheckout } from "react-icons/md"

const Modal = ({ isOpen, onClose, product}) => {

  if (!isOpen) return null;

  const getProductBackgroundColor = () => {
    if (product.name === 'Dasly') {
      return '#E19898'; 
    } else if (product.name === 'Eternal Elegance') {
      return '#F0CAA3'; 
    } else if (product.name === 'Baby Pink') {
      return '#FFE3D8'; 
    } else if (product.name === 'Rossa') {
      return 'var(--main-color)'; 
    } else if (product.name === 'White Coffee') {
      return '#F2F7A1'; 
    } else if (product.name === 'Rora') {
      return '#8FBC8F'; 
    }
    return 'white'; 
  };

  const modalStyle = {
    backgroundColor: getProductBackgroundColor(),
  };

  const handleOrderClick = (name, price) => {
    const template = `Halo Admin Mininako, Saya ingin Memesan Produk:
    1. Nama: ${name}
    2. Harga: ${price}
    3. Alamat: (isikan dengan alamat kamu)`;
    const encodedTemplate = encodeURIComponent(template);
    window.open(`https://wa.me/6281245609434?text=${encodedTemplate}`, '_blank');
  };
  
  return (
    <div className="modal-overlay-home animate__animated animate__fadeIn">
      <div className="modal-content-home" style={modalStyle}>
        <AiOutlineCloseCircle className="modal-close-home" onClick={onClose}/>
        <img src={product.image} alt={product.name} className="modal-image-home animate__animated animate__zoomIn"/>
        <div className='animate__animated animate__slideInLeft'>
          <div className="wrapper-rating-home">
              <Rating rating={product.rating}/>
          </div>
          <div className="wrapper-desc__bouquet-home">
            <h2 className="modal-title-home">{product.name}</h2>
            <p className="modal-description-home">{product.description}</p>
            <div className="wrapper-order">
              <p className="modal-price-home">Rp. {product.price}</p>
              <MdOutlineShoppingCartCheckout className='icon__home-modal' onClick={() => handleOrderClick(product.name, product.price)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
