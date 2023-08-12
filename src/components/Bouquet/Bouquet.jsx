import React from 'react';
import "./Bouquet.css"
import { useState, useEffect } from 'react';
import productImg from "../../assets/img/products/product1.png"
import productImg2 from "../../assets/img/products/product2.png"
import productImg3 from "../../assets/img/products/product3.png"
import productImg4 from "../../assets/img/products/product4.png"
import productImg5 from "../../assets/img/products/product5.png"
// import productImg6 from "../../assets/img/products/product6.png"

const Bouquet = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const data = [
    { id: 1, name: 'Bounty', img: productImg, price: '100.000', category: 'fresh'},
    { id: 2, name: 'Baby Pink', img: productImg2, price: '50.000', category: 'fresh'},
    { id: 3, name: 'Rossa', img: productImg3, price: '150.000', category: 'fresh'},
    { id: 4, name: 'Rora', img: productImg4, price: '100.000', category: 'artifical'},
    { id: 5, name: 'Dasly', img: productImg5, price: '50.000', category: 'artifical'},
    // { id: 6, name: 'Snash', img: productImg6, price: '150.000', category: 'snackDanRokok'},
  ];

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === 'all' || item.category === categoryFilter)
      )
    );
  }, [searchTerm, categoryFilter]);
  
  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);

    const filtered = data.filter((item) =>
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
    window.open(`https://wa.me/6281936187767?text=${encodedTemplate}`, '_blank');
  };

  return (
  <section className="section" id='bouquet'>
    <h1 className="title__bouquet">Our Bouquet</h1>

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
      // <span className='title-kosong'>Eweuh Kembangna</span>
      ) : ( 
        <div className='container__bouquet'>
            {filteredData.map((item) => (
              <div key={item.id} className='card'>
                <div className="card-inner">
                  <img src={item.img} alt={item.name} className='img-bouquet'/>
                  <div className="wrapper-desc">
                    <div>
                      <h3 className='title__card'>{item.name}</h3>
                      <p className='price__card'>Rp. {item.price}</p>
                    </div>
                    <div className="wrapper-btn">
                      <button className='btn-order' onClick={() => handleOrderClick(item.name, item.price)}>
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
  </section>
  )
}

export default Bouquet