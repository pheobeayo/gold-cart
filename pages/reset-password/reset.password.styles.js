import styled from "styled-components";

export const ResetParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FBFAF9;
    `;

export const ResetWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #FBFAF9;
    justify-content: center;
    align-items: center;
    justify-content: center;
    `;

export const FlContainer = styled.div`
display: flex;
flex-direction:column;
width:30%;
margin-left:5rem;

& img{
    width:10rem;
    margin-left:9rem;
    margin-bottom:1rem;
}
`;

export const ResetContainer = styled.div`
   width: 30%;
   height: 70%;
   display: flex;
   flex-direction: column;
   background: #FFFFFF;
   justify-content: center;
   margin-left:5rem;
   border: 1px solid #F2F2F2;
   border-radius: 5px;

    & h1{
        align-items:center;
        margin-left:4rem;
        font-weight:450;
        line-height:0.2rem;
        font-size:1.3rem;
        margin-top:1rem;
    }
    & p{
      margin-left:3.5rem;
       font-size: 0.8rem;
       line-height: 0.1rem;
    }
    `;

export const BoxContainer = styled.div`
   width: 90%;
   height: 100%;
   display: flex;
   flex-direction: column;
    background: #FFFFFF;
    justify-content: center;
    margin-left:4.7rem;

    
    `;

export const BtnWrapper = styled.div`
   margin-left:1rem;

    `;