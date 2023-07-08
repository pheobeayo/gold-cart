import React from "react";
import { SellerParent, SummaryContainer, SummaryCard, Wrapper } from "./seller.styles";
import sellerlaptop from "../../assets/sellerlaptop.png";
import whiteairpod from "../../assets/whiteairpod.png";

const Seller = () => {
  return (

    <SellerParent>
      <Wrapper>
      <h1>More from this Seller</h1>

      <SummaryContainer>
        <SummaryCard background="#FFF" borderColor="#FFF">
          <img src={sellerlaptop} alt="sellerlaptop" />
          <h1>Macbook Pro 2022</h1>
          <h3>$2,201.98</h3>
        </SummaryCard>
        <SummaryCard background="#FFF" borderColor="#FFF">
          <img src={whiteairpod} alt="whiteairpod" />
          <h1>Airpods Pro 3</h1>
          <h3>$201.98</h3>
        </SummaryCard>
        <SummaryCard background="#FFF" borderColor="#FFF">
          <img src={sellerlaptop} alt="sellerlaptop" />
          <h1>Macbook Pro 2022</h1>
          <h3>$2,201.98</h3>
        </SummaryCard>
        <SummaryCard background="#FFF" borderColor="#FFF">
          <img src={whiteairpod} alt="whiteairpod" />
          <h1>Airpods Pro 3</h1>
          <h3>$201.98</h3>
        </SummaryCard>
        <SummaryCard background="#FFF" borderColor="#FFF">
          <img src={sellerlaptop} alt="sellerlaptop" />
          <h1>Macbook Pro 2022</h1>
          <h3>$2,201.98</h3>
        </SummaryCard>
        <SummaryCard background="#FFF" borderColor="#FFF">
          <img src={whiteairpod} alt="whiteairpod" />
          <h1>Airpods Pro 3</h1>
          <h3>$201.98</h3>
        </SummaryCard>
      </SummaryContainer>
      </Wrapper>
    </SellerParent>
  )




}

export default Seller;