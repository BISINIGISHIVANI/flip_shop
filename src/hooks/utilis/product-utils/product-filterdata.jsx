const GetSortedBy = (data, sortBy) => {
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return data.sort((a, b) => b["price"] - a["price"]);
    }
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return data.sort((a, b) => a["price"] - b["price"]);
    }
    return data;
  };
  const GetFilteredData = (
    data,
    { maxPrice, productRating,productDiscount,searchByName }
  ) => {
    return data
      .filter((product) => product["price"] <= maxPrice)
      .filter((product) => product["rating"] >= productRating)
      .filter((product)=>product["discount"] >=productDiscount)
      .filter((product)=>product["name"].toLowerCase().includes(searchByName.toLowerCase()));
  };
  
  export { GetFilteredData, GetSortedBy };
  