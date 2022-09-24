const DiscountFilter=({productDiscount,dispatch})=>{
    return <div className="filter-type">
    <h3 className="filter-type-heading">Discount</h3>
    <div className="filter-type-container">
      <input 
      type="radio" 
      className="80%-above"
      onChange={() => dispatch({ type: "DISCOUNT", payload: "80%" })}
      checked={productDiscount && productDiscount ==="80%"}
       />
      <label htmlFor="80%-above">80% & above</label>
    </div>
    <div className="filter-type-container">
      <input
       type="radio" 
       className="60%-above"
       onChange={() => dispatch({ type: "DISCOUNT", payload: "60%" })}
      checked={productDiscount && productDiscount ==="60%"}
        />
      <label htmlFor="60%-above">60% & above</label>
    </div>
    <div className="filter-type-container">
      <input
       type="radio" 
       className="40%-above" 
       onChange={() => dispatch({ type: "DISCOUNT", payload: "40%" })}
      checked={productDiscount && productDiscount ==="40%"}
       />
      <label htmlFor="40%-above">40% & above</label>
    </div>
    <div className="filter-type-container">
      <input 
      type="radio"
       className="20%-above"
       onChange={() => dispatch({ type: "DISCOUNT", payload: "20%" })}
      checked={productDiscount && productDiscount ==="20%"}
        />
      <label htmlFor="20%-above">20% & above</label>
    </div>
  </div>
}
export {DiscountFilter}