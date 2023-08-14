import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import UserProvider from "./contexts/UserContext";
import ProductProvider  from "./contexts/ProductContext";
import ProductsPage from "./pages/Products";
import ViewProduct from "./pages/ViewProduct";
import MyProductsPage from "./pages/MyProducts";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <>
      <BrowserRouter>
      <UserProvider>
            <ProductProvider>
        <Routes>
          
              <Route path="/signUp" element={<SignUpPage />}></Route>
              <Route path="/" element={<SignInPage />}></Route>
              <Route path="/products" element = {<ProductsPage/>}></Route>
              <Route path="/view" element = {<ViewProduct/>}></Route>
              <Route path="/myproducts" element = {<MyProductsPage/>}></Route>
              <Route path="/addproduct" element = {<AddProduct/>}></Route>
        </Routes>
        </ProductProvider>
          </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
