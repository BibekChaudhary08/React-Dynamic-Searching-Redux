import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterableData, inStock }) => {
  const rows = [];
  let currentCategory = null;

  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(filterableData.toLowerCase()) === -1){
      return;
    }
    if(inStock && !product.stocked){
      return;
    } 
    if (product.category !== currentCategory) {
      rows.push(
        <ProductCategoryRow category={product.category} key={product.category} />
      );
    }  
    currentCategory = product.category;
        
    rows.push(
      <ProductRow product={product} key={product.name} />
    );

  });

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
