import styled from "styled-components";

export const LocationParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FBFAF9;
    `;

export const LocationWrapper = styled.div`
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
    width:15rem;
    margin-left:6rem;
    margin-bottom:2.5rem;
}
`;

export const LocationContainer = styled.div`
   width: 30%;
   height: 60%;
   display: flex;
   flex-direction: column;
   background: #FFFFFF;
   justify-content: center;
   margin-left:5rem;
   border: 2px solid #F2F2F2;
   border-radius: 10px;

    & h1{
        align-items:center;
        margin-left:6.5rem;
        font-weight:450;
        line-height:0.1rem;
        font-size:1.3rem;
        margin-top:2rem;
    }
    
    & h3{
        align-items:center;
        margin-left:5.3rem;
        font-weight:350;
        line-height:0.1rem;
        font-size:0.9rem;
        margin-bottom: 4rem;
        
    }


    & p{
      margin-left:0.5rem;
       font-size:0.8rem;
       line-height: 1rem;
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

    export const SelectBox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    justify-content: center;
    margin-left:4.7rem;
 
     
     `;

export const BtnWrapper = styled.div`
   margin-left:0.5rem;

    `;