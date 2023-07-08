import styled from "styled-components";
import {Link} from "react-router-dom";

export const ReviewParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #E6EAED;

    
    
`;
export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #E6EAED;
   

    & h1 {
        margin-left: 3rem;
        font-size:1rem;
    }
    & p{
        margin-left:35rem;
        font-size:1rem;
        line-height:2rem;
        color:#483C31;
    }
    
`;
export const LinkContainer = styled(Link)`
display: flex;
margin-top: 1.3rem;
margin-left: 35rem;
color: #AE9D8E;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
&:hover,
&:focus{
    color: #AE9D8E;
}
&:active{
    color: #011632;

 
`;


