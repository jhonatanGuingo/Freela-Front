import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Header from "../components/Header";
import styled from "styled-components";

export default function ViewProduct(){
    const {selectedProduct, setSelectedProduct} = useContext(ProductContext)
    console.log(selectedProduct[0].id)
    return(
        <>
        <Header/>
        <InfoConteiner>
            <h1>Informações do produto</h1>
            <img src={selectedProduct[0].img}/>
            <h1>{selectedProduct[0].nameProd}</h1>
            <h2>Preço: R$ {selectedProduct[0].price}</h2>
            <h2>Nome do vendedor: {selectedProduct[0].name}</h2>
            <h2>Contato do vendedor: {selectedProduct[0].number}</h2>
            </InfoConteiner>
        </>
    )
}

const InfoConteiner = styled.div`
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 130px;
    img{
        margin: auto;
        height: 200px;
        width: 200px;
    }
`