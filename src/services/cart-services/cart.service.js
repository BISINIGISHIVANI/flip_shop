import axios from "axios";

export const addToCartService = (product, token) => {
  return axios.post(
    "/api/user/cart",
    { product },
    { headers: { authorization: token } }
  );
};
export const getCartItemService = (token) => {
  return axios.get("/api/user/cart", { headers: { authorization: token } });
};
export const removeFromCartService = (_id, token) => {
  return axios.delete(`/api/user/cart/${_id}`, {
    headers: { authorization: token }
  });
};

export const updateCartService = (_id, actionType, token) => {
  return axios.post(
    `/api/user/cart/${_id}`,
    { action: { type: actionType } },
    { headers: { authorization: token } }
  );
};
