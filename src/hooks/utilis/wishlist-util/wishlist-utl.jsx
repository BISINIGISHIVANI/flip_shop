import {addToWishlistService,getWishlistService,removeFromWishlistService} from "../../../services/wishlist-services/wishlist-service";
import {addToCartHandler,updateCartHandler} from "../cart-utils/cart-util";
export const addToWishlistHandler = async (product, wishlistDispatch, token) => {
    try {
        const response = await addToWishlistService(product, token);
        if (response.status === 201) {
            wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist })
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}
export const getWishlistItemsHandler=async (token,wishlistDispatch)=>{
    try {
        const response = await getWishlistService(token);
        if (response.status === 200) {
            wishlistDispatch({ type: "GET_WISHLIST", payload: response.data.wishlist })
        }else{
            throw new Error();
        }
    } catch (error) {
        alert(error)
    }
}
export const moveToCartandler=async (_id, product, token, cartState, cartDispatch)=>{
    try {
        const { cart } = cartState;
        const item = cart.find(item => item._id === _id);
        if (item) {
            updateCartHandler(_id, "increment", token, cartDispatch);
        } else {
            addToCartHandler(product, cartDispatch, token);
        }
        
    } catch (error) {
        alert(error)
    }
}
export const removeFromWishlistHandler = async (_id, token, wishlistDispatch) => {
    try {
        const response = await removeFromWishlistService(_id, token);
        if (response.status === 200) {
            wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: response.data.wishlist });
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

