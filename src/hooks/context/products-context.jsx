import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext=createContext(null)

const ProductsProvider=({children})=>{
    const [productData,setProductData]=useState([])
    useEffect(()=>{
        (async function (){
            try {
                const response=await axios.get("/api/products");
                if(response.status===200){
                    setProductData(response.data.products)
                }
                else{
                    throw new Error()
                }
            } catch (error) {
                console.error(error)
            }
        })()
    },[])
   
    return  <productContext.Provider value={{productData}}>
        {children}
    </productContext.Provider>
} 

const useProducts=()=>useContext(productContext)

export {ProductsProvider,useProducts}