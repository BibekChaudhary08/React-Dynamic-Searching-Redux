import React from 'react'

const SearchBar = ({filterableData, inStock, onFilterableData, onInStock}) => {
  return (
    <> 
      <div className="input-group mb-3">
        <div className="first-input col-sm-12">
          <input type="text" value={filterableData} onChange={(e)=> onFilterableData(e.target.value)} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="second-input"> 
          <input type = "checkbox" checked={inStock} onChange={(e)=> onInStock(e.target.checked)}/>
          <span className='onStock'>{''}Only Shows Products in Stock</span>
        </div>  
      </div>
    </>
  )
}

export default SearchBar