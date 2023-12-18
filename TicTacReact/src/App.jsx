import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './assets/components/SearchBar';
import ProductTable from './assets/components/ProductTable';
import './App.css'

const App = () => {

  const[filterableData, setFilterableData] = useState('');
  const[inStock, setInStock] = useState(false);

  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

  return (
    <>
    <div className="container">
      <SearchBar filterableData = {filterableData} inStock={inStock} onFilterableData = {setFilterableData} onInStock = {setInStock}/>
      <ProductTable products = {products} filterableData = {filterableData} inStock = {inStock}/>
    </div>  
    </>
  )
}

export default App