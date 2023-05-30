import React from 'react';
import TableRow from './TableRow';

function ProductList({ products }) {
  return (
    <div className="flex justify-center">
      {products.map((product, index) => (
        <TableRow
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          tel={product.tel}
          index={index}
        />
      ))}
    </div>
  );
}

export default ProductList;