import styled from "styled-components";

export const FooterParent = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    background: #002233;

    
`;

export const CenterWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    background: #002233;

    
    
`;

export const GoldDiv = styled.div`
    width: 30%;
    height: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    
    & img {
    width: 10rem;
    }

    & p {
      margin-top: 1rem;
      color: #ffffff;
      margin-left: 2rem;
      
  }
    `;

export const LogoContainer = styled.div`
width: 90%;
height: 20%;
display: flex;
align-items:center;
color: #011632;
margin-left: 2rem;

& img {
width: 10rem;
}


`;

export const ButtonContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
margin-left: 1rem;

`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:  50%;
  height: 10%;
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
    margin-left:3rem;
    

  }
  & .search-input::placeholder {
    color: #5d5e5f;
    font-size: 0.7rem;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  
`;

export const Button = styled.button`
display: flex;
background:#CF9D3A;
width:4rem;
border: 1px solid #CF9D3A; 
border-radius:5px;
color:#ffffff;
height: 2.4rem;
align-items: center;
margin-left:1.2rem;
font-size: 1rem;


`;


export const AboutDiv = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #002233;
    margin-left: 1rem;
    color: #ffffff;
    margin-top: 5rem;

    & h1{
        margin-buttom: 0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
    }
    
   
    `;

    export const CategoriesDiv = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #002233;
    color: #ffffff;
    margin-top: 5rem;

    & h1{
        margin-buttom: 0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
    }
    
   
    `;

 export const ConnectDiv = styled.div`
    width: 20%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #002233;
    margin-left: 1rem;
    color: #ffffff;
    margin-top: 5rem;

    & h1{
        margin-buttom: 0.5rem;
        font-weight: 250;
        font-size: 1.5rem;
    }
    
   
    `;

