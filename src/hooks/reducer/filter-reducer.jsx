export const FilterReducer = (productState, action) => {
    switch (action.type) {
      case "SORT":
        return { ...productState, sortBy: action.payload };
      case "RANGE":
        return { ...productState, maxPrice:action.payload};
      case "RATING":
        return { ...productState, productRating: action.payload};
      case "DISCOUNT":
        return { ...productState, productDiscount: action.payload};
      case "CATEGORY_SOLID":
        return{...productState,solidJacket:action.payload};
      case "CATEGORY_THIN":
        return {...productState,thinJacket:action.payload};
      case "CATEGORY_LIGHTWEIGHT":
        return {...productState,lightWeightJacket:action.payload};
      case "SEARCH_PRODUCTS":
        return {...productState,searchByName:action.payload}
      case "RESET":
        return {
          sortBy:null,
          maxPrice:10000,
          productRating:"",
          productDiscount:"",
          solidJacket:false,
          thinJacket:false,
          lightWeightJacket:false
        }
      default:
        return productState;
    }
  }