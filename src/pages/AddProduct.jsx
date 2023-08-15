import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import { UserContext } from "../contexts/UserContext";
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;

export default function AddProduct(){
    const {user} = useContext(UserContext)
    const [nameProd, setNameProd] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [img, setImg] = useState("");
    const [load, setLoad] = useState(false);
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    
    const headers = {
        headers: {Authorization: `Bearer ${user}`}
      }
    function AddProd(e){
        e.preventDefault();
        setLoad(true);

        const promise = axios.post("/products", {
            nameProd: nameProd,
            description: description,
            category: category,
            img: img,
            price: price
        }, headers);

        promise.then((res) => {
            alert("Produto criado");

            setLoad(false);
            navigate('/myproducts')
        });

        promise.catch((err) => {
            alert(err.response.data);
            setLoad(false);
          });
    }

    return(
        <>
        <Header/>
         <SignUpContainer>
        <form onSubmit={AddProd}>
          <h1>Registrar Produto</h1>
          <input
            disabled={load}
            placeholder="Nome"
            required
            value={nameProd}
            onChange={(e) => setNameProd(e.target.value)}
            type="text"
          />
          <input
            disabled={load}
            placeholder="Descrição"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            disabled={load}
            placeholder="categoria"
            required
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            disabled={load}
            placeholder="img"
            required
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <input
            disabled={load}
            placeholder="price"
            required
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            autocomplete="new-password"
          />
          
          <button disabled={load} data-test="sign-up-submit" type="submit">
            {load ? (
              <ThreeDots
                height="40"
                width="40"
                radius="9"
                color="#FFFFFF"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
            ) : (
              "Cadastrar Produto"
            )}
          </button>
        </form>

        <Link to={`/myproducts`}>Voltar para meus produtos</Link>
      </SignUpContainer>
      
    </>
  );
}

const SignUpContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: Bebas Neue;
    color: black;
    font-size: xx-large;
  }
  input {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-size: 20px;
    width: calc(100% - 50%);
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    padding: 15px;
    margin: 1px;
    :focus {
      border: 2px solid #ffb6b6;
      margin: 0px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    border-radius: 5px;
  }
  button {
    font-family: Bebas Neue;
    outline: none;
    border: none;
    width: calc(100% - 80%);
    border-radius: 5px;
    background-color: white;
    font-size: 25px;
    
    color: black;
    cursor: pointer;

    padding: 12px;
  }
  a {
    font-family: Bebas Neue;
    
    font-size: 20px;
    line-height: 18px;
    color: black;
    text-decoration: none;
    padding-top: 30px;
  }
`;
