import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarParent = styled.div`
    width: 100vw;
    height: 10%;
    display: flex;
    background:#fff;
    position: relative;
`;



export const NavBarContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    position: relative;
`;

export const Heading = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    color: #011632;
    margin-left: 1.5rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight:500;
    
    `;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 32%;
  height: 100%;
  margin-top: 0.6rem;
  margin-left: 1rem;
  margin-bottom:1rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 500%;
  padding-left: 1px;
  padding-bottom: 5px;
  background: #fff;

  & .search-input {
    border: 0;
    outline: none;
    background: #fff;
    color: #00B4B6;
    font-size: 1rem;
    margin-left:2rem;
    

  }
  & .search-input::placeholder {
    color: #5d5e5f;
    line-height: 25px;
    font-size: 1rem;
    margin-left: 3rem;
  }
  & button {
    background: transparent;
    border: 0;
    outline: none;
    width: 20px;
    height: 10px;
  }
  & button img {
    width: 13px;
    height: 13px;
    margin-top: 0.7rem;
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
display: flex;
background:#CF9D3A;
width:5rem;
border: 1px solid #CF9D3A; 
border-radius:5px;
color:#ffffff;
height: 2.1rem;
align-items: center;
margin-top:0.6rem;
justify-content: center;
margin-left:0.4rem;
margin-right:4rem;

`;


export const LinkContainer = styled(Link)`
display: flex;
margin-top: 1.3rem;
margin-left: 1rem;
color: #F77F00;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
&:hover,
&:focus{
    color: #F77F00;
}
&:active{
    color: #011632;

 
`;

export const CartContainer = styled.div`
display: div;
margin-top: 1.4rem;
margin-left: 3rem;

& img {
width:1rem;
height: 1rem;

}
`;