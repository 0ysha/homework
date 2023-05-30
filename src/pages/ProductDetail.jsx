import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetShopDetailQuery } from '../services/shopApi';

function ProductDetail() {
  const { id } = useParams();
  const { data: shops, isSuccess, isLoading } = useGetShopDetailQuery

  const shop = shops && shops.find((shop) => shop.id === id);

  return (
    <div className="flex flex-col w-64 items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden mx-auto my-8">
      {isLoading && <h1>Loading...</h1>}
      {isSuccess && shop && (
        <div className='flex flex-col items-center justify-center p-4'>
          <img className='h-48 w-52 object-cover' src={shop.image} alt={shop.title} />
          <h1 className='text-gray-900 font-medium text-lg'>{shop.title}</h1>
          <p className='text-gray-900 font-medium text-lg mb-2'>Price: {shop.price}$</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to basket
        </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
