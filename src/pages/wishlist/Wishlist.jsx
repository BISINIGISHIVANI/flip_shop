import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./wishlist.css";
import NavBar from "../../components/navbar/navabar";
import { WishlistCard } from "./wishlist_card/Wishlistcard";
import { useAuth, useCart, useWishList } from "../../hooks";
import {
  moveToCartandler,
  getWishlistItemsHandler,
  removeFromWishlistHandler
} from "../../hooks/utilis";
export default function Wishshlist() {
  const { authState } = useAuth();
  const { token } = authState;
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishList();
  const { wishlist } = wishlistState;
  const callRemoveFromWishlistHandler = (_id) => {
    removeFromWishlistHandler(_id, token, wishlistDispatch);
  };
  const callMoveToCartHandler = (_id) => {
    const item = wishlist.find((item) => item._id === _id);
    moveToCartandler(_id, item, token, cartState, cartDispatch);
  };
  useEffect(() => {getWishlistItemsHandler(token, wishlistDispatch)}, [token,wishlistDispatch]);
  return (
    <>
      <NavBar />
      {wishlist.length >0?
      <section className="products">
        <div className="section-title ">
          <h2 className={`${wishlist.length === 0 ? "padding-sm" : ""}`}>
            My WishList ({wishlist.length})
          </h2>
        </div>
        <div className="products-center">
          {wishlist.map(({ _id, image, name, subtitle, price }) => (
            <WishlistCard
              className={`${wishlist.length === 1 ? "product1" : "product"}
              ${wishlist.length === 2 ? "product2" : ""}
              `}
              key={_id}
              productId={_id}
              productImg={image}
              imgAlt={"product"}
              title={name}
              description={subtitle}
              productPrice={price}
              callRemoveFromWishlistHandler={callRemoveFromWishlistHandler}
              callMoveToCartHandler={callMoveToCartHandler}
            />
          ))}
        </div>
      </section>:
        <div>
            <div className="empty-cart">
              <h2 className="padding-sm">Your Wishlist is Empty</h2>
              <Link to="/products">
                <button className="banner-btn1 cursor-pointer">shop now</button>
              </Link>
            </div>
          </div>
       }
    </>
  );
}
