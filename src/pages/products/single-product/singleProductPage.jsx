import axios from "axios";
import "./singleProduct.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../hooks/context/products-context";
import { useAuth, useCart, useWishList } from "../../../hooks";
import { addToWishlistHandler, addToCartHandler } from "../../../hooks/utilis";
import { Navbar } from "../../../components";
export default function SingleProductPage() {
  const {
    authState: { token }
  } = useAuth();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { productData } = useProducts();
  const navigate = useNavigate();
  const {
    cartState: { cart },
    cartDispatch
  } = useCart();
  const {
    wishlistState: { wishlist },
    wishlistDispatch
  } = useWishList();
  const checkWishlistAction = (_id) => {
    const item = wishlist.find((item) => item._id === _id);
    return item ? "GO TO WISHLIST" : "ADD TO WISHLIST";
  };
  const callAddTowishlistHandler = (_id) => {
    if (token) {
      const product = productData.find((item) => item._id === _id);
      addToWishlistHandler(product, wishlistDispatch, token);
    } else {
      navigate("/login");
    }
  };
  const checkWishlistHandler = (_id) => {
    return checkWishlistAction(_id) === "ADD TO WISHLIST"
      ? callAddTowishlistHandler(_id)
      : navigate("/wishlist");
  };
  const checkCartAction = (_id) => {
    const item = cart.find((item) => item._id === _id);
    return item ? "GO TO CART" : "ADD TO CART";
  };
  const callAddtocartHandler = (_id) => {
    if (token) {
      const product = productData.find((item) => item._id === _id);
      addToCartHandler(product, cartDispatch, token);
    } else {
      navigate("/login");
    }
  };
  const checkCartHandler = (_id) => {
    return checkCartAction(_id) === "ADD TO CART"
      ? callAddtocartHandler(_id)
      : navigate("/cart");
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/products/${productId}`);
        console.log(res.data.product);
        if (res.status === 200) {
          setProduct(res.data.product);
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [productId]);
  return (
    <div>
      <Navbar />
      <div className="cart-container cart width-fitcontent empty-cart">
        <div className="cart-item">
          <img src={product.image} alt="product" />
          <div>
            <h3>{product.name}</h3>
            <h5>{product.subtitle}</h5>
            <h4>
              Rs.{product.price}{" "}
              <button className="rating-btn">{product.rating} ★</button>
            </h4>
            <div className="percent">
              <span>{product.discount} offer</span>
            </div>
            <div className="btn-yourcart">
              <button
                className="remove-cart-btn"
                onClick={() => checkCartHandler(productId)}
              >
                <i className="fas fa-shopping-cart"></i>
                {checkCartAction(productId)}
              </button>
              <button
                className="move-wishlist-btn"
                onClick={() => checkWishlistHandler(productId)}
              >
                <i className="fa-solid fa-heart"></i>
                {checkWishlistAction(productId)}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-container width-fitcontent empty-cart">
        <button
          className="bag-btn-2 cursor-pointer banner-btn1 "
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
