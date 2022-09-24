import axios from "axios";

export const addToWishlistService = (product, token) => {
  return axios.post(
    "/api/user/wishlist",
    { product },
    { headers: { authorization: token } }
  );
};
export const getWishlistService = (token) => {
  return axios.get("/api/user/wishlist", { headers: { authorization: token } });
};
export const removeFromWishlistService = (_id, token) => {
  return axios.delete(`/api/user/wishlist/${_id}`, {
    headers: { authorization: token }
  });
};
