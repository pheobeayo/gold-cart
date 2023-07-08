import React from "react";
import { AboutDiv,
    ButtonContainer, 
    CategoriesDiv,  
    CenterWrapper, 
    ConnectDiv,
    FooterParent, 
    GoldDiv, 
    SearchBarContainer,
    SearchBarForm,
    Button, 
    LogoContainer } from "./footer.styles";
import whitegoldcart from "../../assets/whitegoldcart.png";
import socialmedia from "../../assets/socialmedia.png";


const Footer = () => {
 return (

    <FooterParent>
        <CenterWrapper>
        <GoldDiv>
     <LogoContainer>
            <img src={whitegoldcart} alt="whitegoldcart" />
            </LogoContainer>
          <p>Stay Updated! Subscribe to our newsletter</p>
          <ButtonContainer>
          <SearchBarContainer>
            <SearchBarForm>
              <input
                type="text"
                className="search-input"
                placeholder="Email Address"
              />
            </SearchBarForm>
          </SearchBarContainer>

          <Button>Search</Button>
          </ButtonContainer>
          </GoldDiv>
          <AboutDiv>
          <h1>About Goldcart</h1>
          <br></br>About us
          <br></br>Contact us
          <br></br>Sell on Goldcart
          <br></br>Privacy policies
          <br></br>Terms and Conditions
          </AboutDiv>
          <CategoriesDiv>
          <h1>Categories</h1>
          <br></br>Phones & Tablets
          <br></br>Laptops
          <br></br>Accessories
          
          </CategoriesDiv>
          <ConnectDiv>
          <h1>Connect With Us</h1>
          <br></br>
          <img src={socialmedia} alt="socialmedia" />
          </ConnectDiv>
          </CenterWrapper>
    </FooterParent>
 )



}

export default Footer;