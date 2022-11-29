import axios from "axios";
import "./singleProduct.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../../../components";
export default function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/products/${productId}`);
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
