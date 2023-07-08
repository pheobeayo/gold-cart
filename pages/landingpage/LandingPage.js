import React from "react";
import {
  Button,
  ButtonWrapper,
  CartContainer,
  FooterWrapper,
  ImageContainer,
  LandingPageParent,
  LandingPageNavBar,
  LinkContainer,
  NavBarContainer,
  LandingCentreWrapper,
  LogoContainer,
  ProductWrapper,
  SearchBarContainer,
  SearchBarForm,
  SummaryCard,
  SummaryContainer,
  SponsoredWrapper,
  TextContainer,
  TopWrapper,
  TrendingWrapper,
  Wrapper,
} from "./landing.page.styles.js";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.png";
import image1 from "../../assets/image1.png";
import FormButton from "../../components/custom-button/FormButton";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.png";
import phone from "../../assets/phone.png";
import laptop from "../../assets/laptop.png";
import accessories from "../../assets/accessories.png";
import TrendingProducts from "../../components/trending-products/TrendingProducts";
import LandingCenter from "../../components/landing-center/LandingCenter.js";
import Sponsored from "../../components/sponsored-wrap/Sponsored.js";
import Footer from "../../components/footer/Footer.js";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"




const LandingPage = () => {

  return (
    <LandingPageParent>
      <LandingPageNavBar>
        <NavBarContainer>
          <LogoContainer>
            <img src={logo} alt="logo" />
          </LogoContainer>
          <SearchBarContainer>
            <SearchBarForm>
              <button>
                <img src={searchIcon} alt="search-icon" />
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
            </SearchBarForm>
          </SearchBarContainer>

          <Button>Search</Button>
          <LinkContainer><Link>Sell on GoldCart</Link>
          </LinkContainer>
          <Menu>
            <MenuButton 
              backgroundColor={'#FFF'}
              borderColor={"#fff"}
              borderRadius={5}
              marginLeft={15}fontSize={18}>Account</MenuButton>
            <MenuList>
              <MenuItem as='a' href='sign-up' color={'#FFF'} backgroundColor={'#CF9D3A'}>Sign up</MenuItem>
              <MenuItem as='a' href='sign-in' color={'#FFF'} backgroundColor={'#CF9D3A'}>Sign in</MenuItem>
            </MenuList>
          </Menu>
          <LinkContainer><Link>Support</Link>
          </LinkContainer>
          <CartContainer> <img src={cart} alt="cart" /></CartContainer>
        </NavBarContainer>
      </LandingPageNavBar>

      <TopWrapper><Wrapper>
        <TextContainer>
          <ButtonWrapper>
            <FormButton text="Shop Now"
              backgroundColor="#CF9D3A"
              color="#fff"
              borderColor="#CF9D3A"
              width="10rem"
            />
            <FormButton text="Add to Cart"
              backgroundColor="#FEF2E6"
              color="#CF9D3A"
              borderColor="#FEF2E6"
              width="10rem"
            />
          </ButtonWrapper>
          <h2>Macbook Pro 16"</h2>
          <h1>Discover the new</h1>

        </TextContainer>
        <ImageContainer><img src={image1} alt="image1" /></ImageContainer>
      </Wrapper>

      </TopWrapper>
      <ProductWrapper>
        <SummaryContainer>
          <SummaryCard background="#FFF6F0" borderColor="#FFF6F0">
            <h1>Phones
              <br></br> & Tablets </h1>
            <img src={phone} alt="phone" />
          </SummaryCard>
          <SummaryCard background="#FBFAF9" borderColor="#FBFAF9">
            <h1>Accessories</h1>
            <img src={accessories} alt="accessories" />
          </SummaryCard>
          <SummaryCard background="#FFF6F0" borderColor="#FFF6F0">
            <h1>Laptops</h1>
            <img src={laptop} alt="laptop" />
          </SummaryCard>
        </SummaryContainer>
      </ProductWrapper>
      <TrendingWrapper>
        <TrendingProducts />
      </TrendingWrapper>
      <LandingCentreWrapper>
        <LandingCenter />
      </LandingCentreWrapper>
      <SponsoredWrapper>
        <Sponsored />
      </SponsoredWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>







    </LandingPageParent>





  )


}

export default LandingPage;