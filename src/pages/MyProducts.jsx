import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import MyProdCard from "../components/MyProdsCard";
import styled from "styled-components";
import Loading from "../components/Loading";

axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function MyProductsPage(){
    const {user, setUser} = useContext(UserContext);
    const [loading, setLoading] = useState(true)
    const [myProducts, setMyProducts] = useState();
    const navigate = useNavigate();
    
    console.log(user)
    const headers = {
        headers: {Authorization: `Bearer ${user}`}
      }
      
   useEffect(() => {
      const promise = axios.get("/products/me", headers)
      promise.then((answer) => {
      console.log(answer.data)
       setMyProducts(answer.data)
       setLoading(false);
    })
       promise.catch (err => {

        alert(err.response.data)
      })
      
  
   }, []);


      return(
         (loading ? <Loading/> : <>
          <Header/>
         <Container>
          {myProducts.map((produto) => (
            <MyProdCard produto = {produto}/>
         ))}        
          </Container>
          <button onClick={() => navigate('/addproduct')}>Adicionar Produto</button>
      </>)
      )
      
}

const Container = styled.div`
   margin-top: 120px;
`