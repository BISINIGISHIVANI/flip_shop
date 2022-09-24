import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { makeServer } from "./server";
import { FilterProvider } from "./hooks/context/productFilter-context";
import { AuthProvider } from "./hooks/context/auth-context";
import { CartProvider } from "./hooks/context/cart-context";
import { WishListProvider } from "./hooks/context/wishlist-context";
import { ProductsProvider } from "./hooks/context/products-context";

// Call make Server
makeServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishListProvider>
            <FilterProvider>
              <ProductsProvider>
                <App />
              </ProductsProvider>
            </FilterProvider>
          </WishListProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
