import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import { BiExit } from "react-icons/bi";
import { BiSolidUserCircle } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header(){
    const {user, setUser} = useContext(UserContext);
    const {isLogged, setIsLogged} = useContext(UserContext);
 
    const navigate = useNavigate();


    const login = () => {
        navigate("/signup")
      }
    
      function Logout() {
        localStorage.removeItem("user");
        setUser({})
        setIsLogged(false)
        navigate("/");
      }

      return(
        <>
            <HeaderSC logged={isLogged}>
                <h1>MeCansei!</h1>
                <span>
                    <h3 onClick={() => navigate('/products')}>Em Alta</h3>
                    <h3 onClick={() => navigate('/myproducts')}>Meus Produtos</h3>
                </span>
                <div>
                <h2><BiSolidUserCircle/></h2>
          <ul>
            <li>
              MINHA CONTA
            </li>
            <b onClick={login}>ENTRAR/CADASTRO</b>
          </ul>
          <h3>{user.name}</h3>
          <p onClick={Logout}><BiExit /></p>
                </div>
            </HeaderSC>
        </>
      )
}

const HeaderSC = styled.header`
  position: fixed;
  background-color: white;
  left: 0px;
  top:0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: 39px;
  font-family: Bebas Neue;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid lightgrey;
  h1 {
    margin-left: 20%;
  }
  span {
    display: flex;
    font-family: Roboto;
    font-weight: 700;
    h3 {
      display: flex;
      font-size: 15px;
      margin: 0px 30px;
      cursor: pointer;
      &:hover {
        color: #a5a5a5;
      }
      p {
        font-size: 13px;
        margin-left: 7px;
        margin-top: 1px;
      }
      &.selected {
        color: #ff274b;
      }
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 230px;
    font-size: 25px;
    margin-right: 300px;
    h2 {
      display: ${(props) => (props.logged ? "none" : "inline")};
      margin-top: 7px;
      margin-left: 40px;
      font-size: 35px;
    }
    ul {
      display: ${(props) => (props.logged ? "none" : "inline")};
      font-family: roboto;
      li {
        position: relative;
        top: 4px;
        font-size: 10px;
      }
      b {
        position: relative;
        bottom: 3px;
        font-size: 15px;
        font-weight: 700;
        &:hover {
          color: #ff274b;
          cursor: pointer;
        }
      }
    }
    p {
      display: ${(props) => (props.logged ? "inline" : "none")};
      cursor: pointer;
      &:hover {
        color: #ff274b;
      }
    }
    h3 {
      display: ${(props) => (props.logged ? "inline" : "none")};
      margin-left: 90px;
      margin-bottom: 2px;
      font-size: 30px;
    }
    span {
      cursor: pointer;
      &:hover {
        color: #ff274b;
      }
      position: relative;
      h1 {
        background-color: #000000;
        width: 15px;
        height: 15px;
        position: absolute;
        top: -5px;
        right: -5px;
        color: white;
        font-family: Roboto;
        font-size: 11px;
        border-radius: 15px;
        display: ${(props) => (props.cont==0 ? "none" : "flex")};
        justify-content: center;
        align-items: center;
      }
    }
  }
`;