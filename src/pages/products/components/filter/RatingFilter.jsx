const RatingFilter=({productRating,dispatch})=>{
    return <div className="filter-type">
    <h3 className="filter-type-heading">Rating</h3>
    <div className="filter-type-container">
      <input 
      type="radio"
      className="four-star"
      onChange={() => dispatch({ type: "RATING", payload: 4 })}
      checked={productRating && productRating === 4}
        />
      <label htmlFor="four-star">4 stars & above</label>
    </div>
    <div className="filter-type-container">
      <input 
      type="radio" 
      className="three-star" 
      onChange={() => dispatch({ type: "RATING", payload: 3 })}
      checked={productRating && productRating === 3}
      />
      <label htmlFor="three-star">3 stars & above</label>
    </div>
    <div className="filter-type-container">
      <input 
      type="radio"
      className="two-star"
      onChange={() => dispatch({ type: "RATING", payload: 2 })}
      checked={productRating && productRating === 2}
        />
      <label htmlFor="two-star">2 stars & above</label>
    </div>
    <div className="filter-type-container">
      <input 
      type="radio" 
      className="one-star" 
      onChange={() => dispatch({ type: "RATING", payload: 1 })}
      checked={productRating && productRating === 1}
      />
      <label htmlFor="one-star">1 stars & above</label>
    </div>
  </div>
}
export {RatingFilter}