
import Products from "../components/ProductsComponent";
//import { peripherals } from "../data/products";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { ProductContext } from "../contexts/ProductContext";
import Header from "../components/Header";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function ProductsPage() {
    const [loading, setLoading] = useState(false)
    const {productItem, setProductItem} = useContext(ProductContext)
    
    useEffect(() => {
      if(productItem.length === 0){
        const promise = axios.get("/products")
        promise.then((answer) => {
        console.log(answer.data)
         setProductItem(answer.data);
         setLoading(false);
         return
        
    })
    setLoading(false);
  }
    }, [])

    return(
        (loading ? <Loading/> : <>
        <Header/>
        <Products products={productItem}/>
        
    </>)
    )
}

