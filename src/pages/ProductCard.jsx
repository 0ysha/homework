import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductCard({ title, image, price }) {
    const { id } = useParams()
  console.log(id)
  return (
    <div className="product-card">
      <Link to={`/productdetail/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <h3>{title}</h3>
      <p>Price: {price}$</p>
    </div>
  );
}

export default ProductCard;
