import { Routes, Route } from "react-router-dom";
import { Loginpage, ForgotPage, SignupPage } from "../../pages/authentication";
import {
  LandingPage,
  Cart,
  Wishlist,
  ProductWithFilter,
  ErrorPage
} from "../../pages";
import { PrivateRoute } from "../private-routes/private-route";
import SingleProductPage from "../../pages/products/single-product/singleProductPage";
export const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Loginpage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPage />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductWithFilter />} />
      <Route path="/product/:productId" element={<SingleProductPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route
        path="/wishlist"
        element={
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
