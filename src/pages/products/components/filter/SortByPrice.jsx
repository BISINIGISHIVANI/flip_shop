const SortByPriceFilter=({sortBy,dispatch})=>{
    return <div className="filter-type">
    <h3 className="filter-type-h3">Sort by</h3>
    <div className="filter-type-container">
      <input 
      type="radio" 
      className="low-high"
      onChange={() =>
        dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
      }
      checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
       />
      <label htmlFor="low-high">Price - Low to High</label>
    </div>
    <div className="filter-type-container">
      <input 
      type="radio" 
      className="high-low"
      onChange={() =>
        dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
      }
      checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
       />
      <label htmlFor="high-low">Price - High to Low</label>
    </div>
  </div>
}
export {SortByPriceFilter}