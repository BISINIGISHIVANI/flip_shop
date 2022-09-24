const PriceRangeFilter=({maxPrice,dispatch})=>{
    return <div className="filter-type">
    <h3 className="filter-type-h3">Price</h3>
    <div className="filter-type-container">
      <label htmlFor="slider">₹0 - ₹{maxPrice}</label>
      <input
        type="range"
        min="0"
        max="10000"
        value={maxPrice}
        className="slider"
        onChange={(e) =>
            dispatch({ type: "RANGE", payload: e.target.value })}
      />
    </div>
  </div>
}
export {PriceRangeFilter}