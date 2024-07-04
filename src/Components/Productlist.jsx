import React, { useState } from 'react';
import carrot from '../Assets/carrot.jpg';
import beetroot from '../Assets/beetroot.jpg';
import garlic from '../Assets/Garlic.jpg';
import celery from '../Assets/celery.jpg';
import broccoli from '../Assets/broccoli.jpg';
import parsley from '../Assets/Parsley.jpg';
import potato from '../Assets/potato.jpg';

const Productlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    { name: 'Carrot', price: '$1', img: carrot },
    { name: 'Beetroot', price: '$1', img: beetroot },
    { name: 'Garlic', price: '$1', img: garlic },
    { name: 'Parsley', price: '$1', img: parsley },
    { name: 'Broccoli', price: '$1', img: broccoli },
    { name: 'Potato', price: '$1', img: potato },
    { name: 'Celery', price: '$1', img: celery }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const inputsearch=(e)=>{
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <h1 className="text-green-600 text-center py-5 font-semibold text-2xl">Our Products</h1>
      <div className="flex justify-center mb-4">
        <input
          className="rounded-xl px-3 py-1 mr-2 border border-green-700"
          placeholder="Type to search.."
          value={searchTerm}
          onChange={inputsearch}
        />
        <button className="text-white bg-green-600 px-3 py-1 rounded-xl">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product, index) => (
          <div key={index} className="mx-4 mb-8 w-full md:w-1/3 lg:w-1/4 xl:w-1/4">
            <div className="border border-gray-200 p-4 rounded-lg shadow-md text-center">
              <div className="h-64 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-4 text-lg font-semibold">{product.name}</h1>
              <p className="mt-2 text-gray-600">{product.price} Per KG</p>
              <button className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productlist;
