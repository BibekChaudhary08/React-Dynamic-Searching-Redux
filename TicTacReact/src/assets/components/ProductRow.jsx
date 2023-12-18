import React from 'react';

const ProductRow = ({ product }) => {
  const productItem = product.stocked
    ? product.name
    : <span className='product-name'>{product.name}</span>;

  return (
    <tr>
      <td>{productItem}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
