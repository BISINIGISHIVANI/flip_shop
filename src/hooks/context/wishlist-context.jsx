import { createContext, useContext, useReducer } from "react";
import {WishlistReducer}from "../reducer/wishlit-reducer";
const WishListContext = createContext(null);
export const useWishList = () => useContext(WishListContext);
export const WishListProvider = ({ children }) => {
    const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, { wishlist: [] })
    return (
        <WishListContext.Provider value={{ wishlistState, wishlistDispatch }}>
            {children}
        </WishListContext.Provider>
    )
}
