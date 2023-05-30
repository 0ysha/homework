import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function TableRow({ id, image, title, price, tel, index }) {

  const navigate=useNavigate(id)
  const GetProductDetail=()=>{
    navigate(`/productdetail/${id}`)
  }

  return (
    <div className="product flex flex-col items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden mx-8 my-8">
      <div onClick={GetProductDetail} className="flex flex-col items-center justify-center p-4">
        <h2 className="text-gray-900 font-medium text-lg ">{title}</h2>
        <h2 className="text-gray-900 font-medium text-lg mb-2">Price:{price}$</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default TableRow;