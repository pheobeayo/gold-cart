import styled from "styled-components";

export const LandingParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #Fafbfc;
    
`;



export const CenterWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
background: #fafbfc;
padding-left: 20px;
       
`;

export const ContentContainer = styled.div`
display:flex;
flex-direction: column;
width: 50%;
height: 100%;
display: flex;
background: #Fafbfc;
  
& h1{
    margin-left:3rem;
    line-height:0.1rem;
    font-size:3rem;
}

& h2{
    line-height: 0.1rem;
    font-size: 2rem;
    font-weight: 500;
    color: #917D6B;
    margin-left:3rem;
    margin-top:3rem;


}

& p {
    margin-left:3rem;
}

`;

export const GalaxyContainer = styled.div`
display:flex;
flex-direction: column;
width: 50%;
height: 100%;
display: flex;
background: #Fafbfc;
align-items: center;  

& img{
  height: 18rem;
  padding: 2rem;
  margin-top:2rem;
  width: 25rem;
  
}
`;
