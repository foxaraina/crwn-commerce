import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./context/user.context";
import {CategoriesProvider} from "./context/categories.context";
import {CartProvider} from "./context/cart.context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <CategoriesProvider>
              <UserProvider>
                  <CartProvider>
                  <App />
                  </CartProvider>
              </UserProvider>
          </CategoriesProvider>
      </BrowserRouter>
  </React.StrictMode>
);
