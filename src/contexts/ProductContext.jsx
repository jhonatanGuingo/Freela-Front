import { createContext, useState } from "react";
import { peripherals } from "../data/mock";
export const ProductContext = createContext();
import React from "react"

export default function ProductProvider({ children }){
  const [productItem, setProductItem] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        productItem,
        setProductItem,
        selectedProduct,
        setSelectedProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};