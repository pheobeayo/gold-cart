import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductdeliveryParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const ProductNavBar = styled.div`
    width: 100%;
    height: 10%;
    background: #fff;
    position: relative;
    display: flex;
`;

export const NavBarContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    position: relative;
`;

export const LogoContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #011632;
    margin-left: 1rem;
    margin-top: 1rem;

    & img {
    width: 10rem;
    }
    `;

export const SearchBarContainer = styled.div`
  display: flex;
  width: 30%;
  height: 70%;
  margin-top: 0.6rem;
  margin-left: 1rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 90%;
  padding: 0 6px;
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

`;


export const LinkContainer = styled(Link)`
display: flex;
margin-top: 1.3rem;
margin-left: 2rem;
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

export const Select = styled.select`
 display:div;
 color: black;
 border: none;
 margin-left: 1rem;
 margin-top: 0.8rem;
 font-size: 1.2rem;

  & option {
    color:#F77F00;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const CartContainer = styled.div`
display: div;
margin-top: 1.4rem;
margin-left: 2rem;

& img {
width:1rem;
height: 1rem;

}
`;

export const TopWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
background: #E6EAED;
flex-direction:column;
    
`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
background: #E6EAED;
flex-direction:column;
    
`;


export const SummaryCard = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left:1rem;
  margin-top:1rem;
  background: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

  & img {
    width:auto;
    height: 25rem;
  }  

  
  `;


  export const ContentWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction:column;
  background: #E6EAED;
  
      
  `;
  
   

export const PaymentContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
background: #E6EAED;
align-content: stretch;
font-size: 1.2rem;
margin-bottom:10rem;       

`;

export const DeliveryFormContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
background: #E6EAED;
align-content: center;
font-size: 1.2rem;
    

`;

export const FooterWrapper = styled.div`
width: 100vw;
height: 50vh;
display: flex;
background:#002233;
padding-top: 5rem; 
margin-top: 35rem;     
`;
