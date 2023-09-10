import React from 'react';
import "./Bouquet.css"
import { useState, useEffect } from 'react';
import productImg from "../../assets/img/products/product1.png"
import productImg2 from "../../assets/img/products/product2.png"
import productImg3 from "../../assets/img/products/product3.png"
import productImg4 from "../../assets/img/products/product4.png"
import productImg5 from "../../assets/img/products/product5.png"
import productImg6 from "../../assets/img/products/product6.png"
import productImg7 from "../../assets/img/products/product7.png"
import productImg8 from "../../assets/img/products/product8.png"
import productImg9 from "../../assets/img/products/product9.png"
import { AiFillEye } from "react-icons/ai"
import { MdOutlineShoppingCartCheckout } from "react-icons/md"
// import BouquetModal from './BouquetModal'

const Bouquet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const [selectedBouquet, setSelectedBouquet] = useState(null);

  // const handleOpenModal = (index) => {
  //   setSelectedBouquet(index);
  //   document.body.style.overflow = "hidden";
  // };
  
  // const handleCloseModal = () => {
  //   document.body.style.overflow = "auto";
  //   setSelectedBouquet(null);
  // };

  const bouquetData = [
    { 
      id: 1, 
      name: 'Bounty', 
      img: productImg, 
      price: '100.000', 
      category: 'fresh', 
      desc:'Bounty adalah bukti keindahan alam dengan warna-warna cerah yang menggembirakan. Cocok untuk menyegarkan suasana dan menyampaikan pesan positif.', 
      rating:4
    },
    { 
      id: 2, 
      name: 'Baby Pink', 
      img: productImg2, 
      price: '50.000', 
      category: 'fresh', 
      desc:'Baby Pink adalah pilihan yang lembut dan cantik untuk memberikan sentuhan kebahagiaan pada setiap momen. Dengan nuansa warna merah muda yang manis, bunga ini cocok untuk memberikan hadiah yang indah.', 
      rating:5
    },
    { 
      id: 3, 
      name: 'Rossa', 
      img: productImg3, 
      price: '150.000', 
      category: 'fresh', 
      desc:'Rossa adalah simbol cinta dan semangat. Bunga ini menghadirkan keindahan merah yang mencolok, menyampaikan perasaan yang mendalam dan berarti.', 
      rating:3
    },
    { 
      id: 4, 
      name: 'Rora', 
      img: productImg4, 
      price: '100.000', 
      category: 'artifical', 
      desc:'Rora adalah kombinasi antara keanggunan dan daya tahan. Dengan desain yang unik dan menarik, bunga ini memberikan kesan yang tak terlupakan.', 
      rating:3.5
    },
    { 
      id: 5, 
      name: 'Dasly',
      img: productImg5, 
      price: '50.000', 
      category: 'artifical', 
      desc:'Bounty adalah bukti keindahan alam dengan warna-warna cerah yang menggembirakan. Cocok untuk menyegarkan suasana dan menyampaikan pesan positif.', 
      rating:4.5
    },
    { 
      id: 6, 
      name: 'White Coffee', 
      img: productImg6, 
      price: '100.000', 
      category: 'snackDanRokok', 
      desc:'White Coffee adalah pilihan yang elegan dan eksklusif. Dengan tampilan putih yang mewah, bunga ini cocok untuk memberikan kesan istimewa.', 
      rating:5
    },
    { 
      id: 7, 
      name: 'My Queen', 
      img: productImg7, 
      price: '150.000', 
      category: 'snackDanRokok', 
      desc:'My Queen adalah bunga yang menjadikan Anda sebagai raja atau ratu dalam momen spesial. Dengan keanggunan dan keindahan yang khas, bunga ini menghadirkan perasaan istimewa.', 
      rating:5
    },
    { 
      id: 8, 
      name: 'Snack 4', 
      img: productImg8, 
      price: '70.000', 
      category: 'snackDanRokok', 
      desc:'Snack adalah pilihan yang lezat untuk menemani momen santai. Dari camilan favorit hingga makanan ringan yang menggugah selera, Snack hadir untuk mengisi keperluan Anda.', 
      rating:4.5
    },
    { 
      id: 9, 
      name: 'Money 1', 
      img: productImg9, 
      price: '100.000', 
      category: 'money', 
      desc:'Money adalah simbol keberuntungan dan kekayaan. Dengan desain yang menggambarkan mata uang dan keemasan, Money memberikan pesan positif tentang kelimpahan dan kesuksesan dalam hidup..', 
      rating:4
    },
  ];

  useEffect(() => {
    setFilteredData(
      bouquetData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === 'all' || item.category === categoryFilter)
      )
    );
  }, [searchTerm, categoryFilter]);
  
  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);

    const filtered = bouquetData.filter((item) =>
      item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredData(filtered);
    setNoResults(filtered.length === 0);
  };

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category);
  };

  const handleOrderClick = (name, price) => {
    const template = `Halo Admin Mininako, Saya ingin Memesan Produk:
    1. Nama: ${name}
    2. Harga: ${price}`;
    const encodedTemplate = encodeURIComponent(template);
    window.open(`https://wa.me/6281245609434?text=${encodedTemplate}`, '_blank');
  };

  return (
  <section className="section section__bouquet" id='bouquet'>
    <div className="wrapper-title">
      <h1 className="title__bouquet">Our <span className="unique-title">Bouquet</span></h1>
    </div>

    <div className="header__bouquet">
      <div className="button__bouquet">
        <button className={categoryFilter === 'all' ? 'active' : 'btn-bouquet'} onClick={() => handleCategoryFilter('all')}>All</button>
        <button className={categoryFilter === 'fresh' ? 'active' : 'btn-bouquet'} onClick={() => handleCategoryFilter('fresh')}>Fresh</button>
        <button className={categoryFilter === 'artifical' ? 'active' : 'btn-bouquet'} onClick={() => handleCategoryFilter('artifical')}>Artifical</button>
        <button className={categoryFilter === 'snackDanRokok' ? 'active' : 'btn-bouquet'} onClick={() => handleCategoryFilter('snackDanRokok')}>Snack & Rokok</button>
        <button className={categoryFilter === 'money' ? 'active' : 'btn-bouquet'} onClick={() => handleCategoryFilter('money')}>Money</button>
      </div>
      
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
        </svg>
        <input 
          placeholder="Search Bouquets..." 
          type="search" 
          className="input"
          value={searchTerm}
          onChange={handleSearch}
          />
      </div>
    </div>

    {noResults ? (
      <h3 className='title-kosong'>Product Tidak Tersedia</h3>
      ) : ( 
        <div className='container__bouquet'>
            {filteredData.map((item, index) => (
              <div key={item.id} className='card'>
                <div className="wrapper__icon">
                  <MdOutlineShoppingCartCheckout className='icon__bouquet' onClick={() => handleOrderClick(item.name, item.price)}/>
                </div>
                <div className="card-inner">
                  <img src={item.img} alt={item.name} className='img-bouquet'/>
                  <div className="wrapper-desc">
                      <h3 className='title__card'>{item.name}</h3>
                  </div>
                </div>
              </div>
            ))}
            {/* <BouquetModal
              bouquetData={bouquetData}
              selectedBouquet={selectedBouquet}
              onClose={handleCloseModal}
            /> */}
        </div>
      )}
  </section>
  )
}

export default Bouquet