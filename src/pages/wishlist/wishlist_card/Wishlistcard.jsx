const WishlistCard = ({
  className,
  productImg,
  imgAlt,
  title,
  description,
  productPrice,
  productId,
  callRemoveFromWishlistHandler,
  callMoveToCartHandler
}) => {
  return (
    <article className={className}>
      <div className="img-container">
        <img src={productImg} alt={imgAlt} className="product-img" />
        <button
          className="bag-wishlist"
          onClick={() => callRemoveFromWishlistHandler(productId)}
        >
          <i className="fa-solid fa-heart"></i>
          remove wishlist
        </button>
        <button
          className="bag-btn"
          onClick={() => callMoveToCartHandler(productId)}
        >
          <i className="fas fa-shopping-cart"></i>
          move to cart
        </button>
      </div>
      <h3>{title}</h3>
      <h5>{description}</h5>
      <h4>Rs.{productPrice}</h4>
    </article>
  );
};
export { WishlistCard };
