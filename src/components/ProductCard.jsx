import styled from "styled-components"
import { useState, useContext } from "react"
import { ProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function ProductCard({products}){
    const {productItem, setProductItem, selectedProduct, setSelectedProduct} = useContext(ProductContext)
    const navigate = useNavigate();

    
    const handleViewProduct = (product) => {
        const promise = axios.get(`/products/info/${product.id}`)
        promise.then((answer) => {
            setSelectedProduct(answer.data)
            navigate('/view')
            
        })
        

       
        
    }
    return(<>{
        products.map((product, id) => (
        <ProductCardSC key={id} vendido = {product.sold}>
            <img src={product.img} 
            alt="product"/>
            <div>
                <h1>{product.nameProd}</h1>
                <h2>{product.description}</h2>
                <span>R${product.price.toLocaleString('pt-br', {
                    style: "currency",
                    currency: "BRL",
                })}</span>
            </div>
            <button onClick={() => handleViewProduct(product)}>Visualizar Produto</button>
        </ProductCardSC>
        ))
    }</>)
}

const ProductCardSC = styled.div`
    padding-top: 20px;
    margin-bottom: 30px;
    width: 300px;
    display: ${(props) => (props.vendido ? "none" : "flex")};
    flex-direction: column;
    align-items: center;
    &:hover{
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }
    img{
        width: 100%;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        padding-bottom: 0px;
        h2{
            font-family: Roboto;
            margin-bottom: 20px;
            color: #9c9c9c;
            font-size: 15px;
        }
        h1{
            font-family: Bebas Neue;
            margin-bottom: 20px;
            color: #000000;
            font-size: 25px;
        }
        span{
            font-family: Bebas Neue;
            margin-bottom: 20px;
            color: #ff274b;
            font-size: 22px;
        }
    }
    button{
        background-color: #000000;
        color: white;
        border: 0px;
        border-radius: 5px;
        padding: 10px 0px;
        width: 150px;
        font-weight: 400;
        &:hover {
          background-color: #ff274b;
          cursor: pointer;
        }
        margin-bottom: 20px;
    }
`