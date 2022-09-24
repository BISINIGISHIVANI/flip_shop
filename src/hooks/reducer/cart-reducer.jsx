export const CartReducer=(state,action)=>{
    switch(action.type){
        case "GET_CART_ITEM":
            return {...state,cart:action.payload}
        case "ADD_TO_CART":
            return{...state,cart:action.payload}
        case "REMOVE_FROM_CART":
            return{...state,cart:action.payload}
        case "UPDATE_CART_ITEM":
            return {...state,cart:action.payload}
        default:
            return state;
    }
}