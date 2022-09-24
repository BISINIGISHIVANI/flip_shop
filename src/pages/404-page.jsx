import { errorImg } from "../assets/images/photos";
import NavBar from "../components/navbar/navabar";
import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <header className="hero">
        <div
          style={{
            backgroundImage: `url(${errorImg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center/cover"
          }}
          className="hero-slide1
         hero-slides"
        >
          <div className="banner1">
            <h1 className="banner-title1">404 Page not Found</h1>
            <button
              className="banner-btn1 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
