// import React from 'react';
// import './Bouquet.css'; 
// import { FaWhatsapp } from 'react-icons/fa';
// import Rating from '../Rating/Rating';

// const BouquetModal = ({ bouquetData, selectedBouquet, onClose }) => {
//   const bouquet = bouquetData[selectedBouquet];

//   if (!bouquet) return null;

//   const handleOrderClick = () => {
//     const message = `Saya ingin memesan ${bouquet.name} dengan harga ${bouquet.price}. Nama saya: [Nama Lengkap]. Alamat: [Alamat].`;
//     window.open(`https://api.whatsapp.com/send?phone=[nomor-whatsapp-tujuan]&text=${encodeURIComponent(message)}`);
//   };

//   return (
//     <div className="bouquet-modal-overlay">
//       <div className="bouquet-modal-content">
//         <button className="modal-close" onClick={onClose}>
//           &times;
//         </button>
//         <div>
//           <img src={bouquet.img} alt={bouquet.name} className="bouquet-modal-image" />
//         </div>
//         <div className='wrapper-text'>
//           <h3 className="bouquet-modal-name">{bouquet.name}</h3>
//           <div className="modal-rating">
//             <Rating rating={bouquet.rating} />
//           </div>
//           <p className="bouquet-modal-price">Harga: {bouquet.price}</p>
//           <p className="bouquet-modal-description">{bouquet.desc}</p>
//         </div>
//         {/* <button className="order-button" onClick={handleOrderClick}>
//           <FaWhatsapp /> Pesan Sekarang
//         </button> */}
//       </div>
//     </div>
//   );
// };

// export default BouquetModal;
