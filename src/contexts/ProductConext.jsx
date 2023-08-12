import { createContext, useState } from "react";
import { peripherals } from "../data/mock";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productItem, setProductItem] = useState([peripherals]);


  return (
    <StoreContext.Provider
      value={{
        productItem,
        setProductItem
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};