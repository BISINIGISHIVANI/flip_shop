import "./product-filter.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ProductsList } from "./components/product-all";
import { Productfilter } from "./components/product-filter";
import {
  GetFilteredData,
  GetSortedBy,
  CategoryFilterData
} from "../../hooks/utilis/index";
import { useFillter } from "../../hooks/context/productFilter-context";
import { useAuth, useCart, useWishList } from "../../hooks";
import { addToCartHandler } from "../../hooks/utilis/cart-utils/cart-util";
import { addToWishlistHandler } from "../../hooks/utilis/wishlist-util/wishlist-utl";
import NavBar from "../../components/navbar/navabar";
import { useProducts } from "../../hooks/context/products-context";

export default function ProductWithFilter() {
  const {
    authState: { token }
  } = useAuth();
  const navigate = useNavigate();
  const {
    cartState: { cart },
    cartDispatch
  } = useCart();
  const {
    wishlistState: { wishlist },
    wishlistDispatch
  } = useWishList();
  const { productData } = useProducts();
  const { productState } = useFillter();
  const [searchByName, setSearchByName] = useState("");
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
  const {
    sortBy,
    maxPrice,
    productRating,
    productDiscount,
    solidJacket,
    thinJacket,
    lightWeightJacket
  } = productState;
  const sortedData = GetSortedBy(productData, sortBy);
  const categoryData = CategoryFilterData(sortedData, {
    solidJacket,
    thinJacket,
    lightWeightJacket
  });
  const filteredData = GetFilteredData(categoryData, {
    maxPrice,
    productRating,
    productDiscount,
    searchByName
  });
  return (
    <>
      <NavBar searchByName={searchByName} setSearchByName={setSearchByName} />
      <div className="filter-page">
        <section className="filter-product-container">
          <Productfilter />
        </section>
        <section className="products-list">
          <div className="section-title">
            <h2>our products</h2>
          </div>
          <div className="products-middle">
            {filteredData.length>0 && filteredData.map(
              ({ _id, image, name, subtitle, rating, price, discount }) => (
                <ProductsList
                  key={_id}
                  productId={_id}
                  productFilterImg={image}
                  imgAlt={"product"}
                  title={name}
                  productSubtitle={subtitle}
                  starRating={rating}
                  productPrice={price}
                  productDiscount={discount}
                  checkCartAction={checkCartAction}
                  checkCartHandler={checkCartHandler}
                  checkWishlistAction={checkWishlistAction}
                  checkWishlistHandler={checkWishlistHandler}
                  filteredData={filteredData}
                />
              )
            )}
            {filteredData.length===0 && <h2>No products Available</h2>}
          </div>
        </section>
      </div>
    </>
  );
}
