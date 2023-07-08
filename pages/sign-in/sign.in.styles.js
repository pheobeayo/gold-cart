import styled from "styled-components";

export const SigninParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FBFAF9;
    `;

    export const SigninWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FBFAF9;
    justify-content: center;
    `;

    export const LContainer = styled.div`
    width: 20%;
    height: 20%;
    display: flex;
    flex-direction: column;
    background: #FBFAF9;
    justify-content: center;
    margin-left:34rem;

    & img{
     height:3.5rem;
     
    }
    `;


    export const FormHeader = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    margin-top:0.5rem;
   
   
    
    & h1{  
        font-size:1.5rem;
        font-weight: 500;
        margin-left:6rem;
        line-height:0.1rem;
    }

    & h3 {
        font-size:0.8rem;
        margin-left:3rem;
        font-weight:400;
        line-height:0.2rem;
       
    }
    `;

    export const FormContainer = styled.div`
    width: 30%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    align-items: center;
    border: 2px solid #F2F2F2;
    border-radius: 5px;
    margin-left: 30rem;
    justify-content: center;

    & form{
    width: 100%;
    height: 100%;
    margin-left: 8rem;
    }
     
    & form-label{
        border-radius:0.5px;
    }
    
    `;

    export const FormFooter = styled.div`
    width: 82%;
    height: 2%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    font-size:0.8rem;
    align-items: center;
    line-height:1rem;
    `;
