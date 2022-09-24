const CartAmount = ({
  cartQuantity,
  cartPrice,
  cartDiscount,
  cartTotalPrice,
  cartDelivaryCharge
}) => {
  return (
    <>
      <div className="price-data">
        <div>
          <span>Price({cartQuantity} items)</span>
          <span>Rs.{cartPrice}</span>
        </div>
        <div>
          <span>Disount</span>
          <span>Rs.{cartDiscount}</span>
        </div>
        <div>
          <span>Delivery Charges</span>
          <span>Rs.{cartDelivaryCharge}</span>
        </div>
      </div>
      <hr />
      <h3>
        your total :Rs.<span className="cart-total">{cartTotalPrice}</span>
      </h3>
      <hr />
      <p className="savings">you will save Rs.{cartDiscount} on this order</p>
      <button className="place-order banner-btn1">place-order</button>
    </>
  );
};
export { CartAmount };
