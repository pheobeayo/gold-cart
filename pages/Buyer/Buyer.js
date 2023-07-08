import React from "react";
import {
 ButtonWrapper,
 FooterWrapper,
  ImageContainer,
  LinkContainer,
  NavBarContainer,
  LandingCentreWrapper,
  LogoContainer,
  ProductWrapper,
  SearchBarContainer,
  SearchBarForm,
  Select,
  SummaryCard,
  SummaryContainer,
  SponsoredWrapper,
  TextContainer,
  TopWrapper,
  TrendingWrapper,
  Wrapper
} from "../landingpage/landing.page.styles.js";
import { BuyerHomeParent,BuyerHomeNavBar, Button, CartContainer } from "./buyer.styles.js";
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
import { getUserName } from "../../utils/index.js";
import user from "../../assets/user.png";
import box from "../../assets/box.png";
import inbox from "../../assets/inbox.png";
import logout from "../../assets/logout.png";
import shoppingcart from "../../assets/shoppingcart.png";



const BuyerHome = () => {

  return (
    <BuyerHomeParent>
      <BuyerHomeNavBar>
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
          
          <Select>
            <option value="" hidden>
              Hi {getUserName()}
            </option>
            <option value="1"  as={Link} to="/account"><img src={user} alt="user"/>My Account</option>
            <option value="2"  as={Link} to="/cart"><img src={shoppingcart} alt="shoppingcart"/>Cart</option>
            <option value="3"  as={Link} to="/order"><img src={box} alt="box"/> Order</option>
            <option value="4"  as={Link} to="/inbox"><img src={inbox} alt="inbox"/>Inbox</option>
            <option value="5"><img src={logout} alt="logout"/>Logout</option>
            
            
            
          </Select>
          <LinkContainer><Link>Support</Link>
          </LinkContainer>
          <CartContainer> <img src={cart} alt="cart" /></CartContainer>
        </NavBarContainer>
      </BuyerHomeNavBar>
     
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
<TrendingProducts/>
</TrendingWrapper>
<LandingCentreWrapper>
  <LandingCenter/>
</LandingCentreWrapper>
<SponsoredWrapper>
  <Sponsored/>
</SponsoredWrapper>
<FooterWrapper>
  <Footer/>
</FooterWrapper>







    </BuyerHomeParent>





  )


}

export default BuyerHome;