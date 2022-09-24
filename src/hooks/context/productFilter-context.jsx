import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/filter-reducer";
const ProductContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [productState,dispatch] = useReducer(FilterReducer, {
    sortBy: null,
    maxPrice: 10000,
    productRating:"",
    productDiscount:"",
    solidJacket:false,
    thinJacket:false,
    lightWeightJacket:false,
    searchByName:"",
  });
  return (
    <ProductContext.Provider value={{productState,dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};
const useFillter = () => useContext(ProductContext);

export { FilterProvider, useFillter };
