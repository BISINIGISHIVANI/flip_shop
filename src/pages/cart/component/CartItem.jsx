const CartItem = ({
  cartImg,
  imgAlt,
  CartTitle,
  CartSubtitle,
  cartPrice,
  cartDiscount,
  cartId,
  cartQuantity,
  callremoveFromCartHandler,
  callupdateCartHandler,
  callMoveToWishlistHandler
}) => (
  <>
    <div className="cart-item">
      <img src={cartImg} alt={imgAlt} />
      <div>
        <h3>{CartTitle}</h3>
        <h5>{CartSubtitle}</h5>
        <h4>
          Rs.{cartPrice}
          <span>
            <del>
              <small>Rs.3600</small>
            </del>
          </span>
        </h4>
        <div className="percent">
          <span>{cartDiscount} off</span>
        </div>
        <div className="btn-yourcart">
          <button
            className="remove-cart-btn"
            onClick={() => callremoveFromCartHandler(cartId)}
          >
            remove from cart
          </button>
          <button
            className="move-wishlist-btn"
            onClick={() => callMoveToWishlistHandler(cartId)}
          >
            move to wishlist
          </button>
        </div>
      </div>
      <div>
        <span
          className="increment"
          onClick={() => callupdateCartHandler(cartId, "increment")}
        >
          +
        </span>
        <p className="item-amount">{cartQuantity}</p>
        <span
          className="decrement"
          onClick={() =>
            cartQuantity <= 1
              ? callremoveFromCartHandler(cartId)
              : callupdateCartHandler(cartId, "decrement")
          }
        >
          ─
        </span>
      </div>
    </div>
  </>
);
export { CartItem };
