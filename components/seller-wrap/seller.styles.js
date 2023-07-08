import styled from "styled-components";

export const SellerParent = styled.div`
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
        margin-left: 2rem;
        font-size:1.5rem;
        color:#483C31;
        font-weight:500;
    }
    
`;


export const SummaryContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  
`;


export const SummaryCard = styled.div`
  width: 12%;
  height: 40%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin-left:0.1rem;
  margin-right:0.1rem;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

  & img {
    width:auto;
    height: auto;
    margin-left:0.1rem;
    
   
    
  }
  

  & h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 0.5rem;
    color: #483C31;
    margin-left:0.1rem;
  }

  & h3 {
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 0.5rem;
    color: #483C31;
    margin-bottom:1rem;
  }
  `;
