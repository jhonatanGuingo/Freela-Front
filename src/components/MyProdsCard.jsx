import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
export default function MyProdCard(props){
    const {category, id, img, nameProd, price, sold} = props.produto;
    const [vendido, setVendido] = useState(sold ? 'Sim' : 'Não')
    function isSold(){
        const promise = axios.put('/products/me', {id: id})
        promise.then((res) => {
            alert("Produto vendido");
            
        });

        promise.catch((err) => {
            alert(err.response.data);
           
          });


    }
    return(
        <Container>
            <img src={img}/>
            <h3>name: {nameProd}</h3>
            <h3>categoria: {category}</h3>
            <h3>preço: R${price}</h3>
            <h3>vendido: {vendido}</h3>
            <h3>id: {id}</h3>
            <button onClick={() => isSold()}>Marcar como vendido</button>
        </Container>
        
    )
}

const Container = styled.div`
    display: flex;
    margin-top: 100px;
    margin: auto;
    align-items: center;
    
    img{
        width: 50px;
    }
    h3{
        margin-left: 10px;
    }
    button{
        margin-left: 20px;
    }
`
    
