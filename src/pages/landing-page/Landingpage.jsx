import React from "react";
import "./landing-page.css";
import NavBar from "../../components/navbar/navabar";
import heroImg1 from "../../assets/images/img-1/hero.jpg";
import productImg1 from "../../assets/images/img-1/product-1.webp";
import productImg2 from "../../assets/images/img-1/product-2.webp";
import newImg1 from "../../assets/images/webp/ChkokkoWomenNavyBlueColourblockedSportyJacket1.webp";
import newImg2 from "../../assets/images/webp/Leather-Retail-Women-Jackets-pink.webp";
import newImg3 from "../../assets/images/webp/navy-green-jacket.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useFillter } from "../../hooks";

export default function landingPage() {
  const navigate = useNavigate();
  const { dispatch } = useFillter();
  const JacketHandler = () => {
    dispatch({ type: "RESET", payload: {} });
    navigate("/products");
  };
  return (
    <>
      <NavBar />
      <header className="hero">
        <div
          style={{
            backgroundImage: `url(${heroImg1})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center/cover"
          }}
          className="hero-slide1
         hero-slides"
        >
          <div className="banner1">
            <h1 className="banner-title1">women wear collection</h1>
            <Link to="/products">
              <button className="banner-btn1 cursor-pointer">shop now</button>
            </Link>
          </div>
        </div>
      </header>
      <section className="products">
        <div className="section-title">
          <h2>New products</h2>
        </div>
        <div className="products-center">
          <article className="product">
            <div className="img-container">
              <img src={productImg1} alt="product" className="product-img" />
              <button
                onClick={() => {
                  JacketHandler(),
                    dispatch({
                      type: "CATEGORY_SOLID",
                      payload: { solidJacket: true }
                    });
                }}
                className="bag-btn"
              >
                Bomber Solid Jacket
              </button>
            </div>
            <h3>Mast & Harbour</h3>
            <h5>Women Blue Solid Bomber Jacket</h5>
            <h4>Rs.2699</h4>
          </article>
          <article className="product">
            <div className="img-container">
              <img src={productImg2} alt="product" className="product-img" />
              <button
                onClick={() => {
                  JacketHandler(),
                    dispatch({
                      type: "CATEGORY_THIN",
                      payload: { thinJacket: true }
                    });
                }}
                className="bag-btn"
              >
                Bomber Thin Jacket
              </button>
            </div>
            <h3>Mast & Harbour</h3>
            <h5>Women Blue Solid Bomber Jacket</h5>
            <h4>Rs.2699</h4>
          </article>
          <article className="product">
            <div className="img-container">
              <img src={newImg1} alt="product" className="product-img" />
              <button
                onClick={() => {
                  JacketHandler(),
                    dispatch({
                      type: "CATEGORY_LIGHTWEIGHT",
                      payload: { lightWeightJacket: true }
                    });
                }}
                className="bag-btn"
              >
                Bomber Light weight Jacket
              </button>
            </div>
            <h3>Mast & Harbour</h3>
            <h5>Women Blue Solid Bomber Jacket</h5>
            <h4>Rs.2699</h4>
          </article>
        </div>
      </section>
      <section className="our-products">
        <div className="section-title">
          <h2>Our products</h2>
        </div>
        <div className="products-center">
          <article className="product">
            <div className="img-container">
              <img src={newImg2} alt="product" className="product-img" />
              <button
                className="bag-btn"
                onClick={() => navigate(`/product/3`)}
              >
                View Details
              </button>
            </div>
          </article>
          <article className="product">
            <div className="img-container">
              <img src={newImg3} alt="product" className="product-img" />
              <button
                className="bag-btn"
                onClick={() => navigate(`/product/5`)}
              >
                view Details
              </button>
            </div>
          </article>{" "}
        </div>
      </section>
    </>
  );
}
