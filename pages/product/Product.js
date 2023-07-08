import React from "react";
import {
    ProductParent,
    ProductNavBar,
    NavBarContainer,
    LogoContainer,
    SearchBarContainer,
    SearchBarForm,
    Button,
    LinkContainer,
    CartContainer,
    Select,
    Side,
    Productside,
    TopWrapper,
    Brand,
    SummaryCard,
    SummaryContainer,
    SideWrapper,
    FooterWrapper
} from "./product.styles";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import phonelogo from "../../assets/phonelogo.png";
import otherslogo from "../../assets/otherslogo.png";
import accessorylogo from "../../assets/accessorylogo.png";
import medialogo from "../../assets/medialogo.png";
import laptoplogo from "../../assets/laptoplogo.png";
import Footer from "../../components/footer/Footer";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import brandlogo from "../../assets/brandlogo.png";


const Product = () => {


    return (
        <ProductParent>
            <ProductNavBar>
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
                                placeholder="Search Products and Brands"
                            />
                        </SearchBarForm>
                    </SearchBarContainer>

                    <Button>Search</Button>
                    <LinkContainer><Link>Sell on GoldCart</Link>
                    </LinkContainer>
                    <Select>
                        <option value="" hidden>
                            Account
                        </option>
                        <option value="1">Log in</option>
                        <option value="2">Sign up</option>
                    </Select>
                    <LinkContainer><Link>Support</Link>
                    </LinkContainer>
                    <CartContainer> <img src={cart} alt="cart" /></CartContainer>
                </NavBarContainer>
            </ProductNavBar>
            <TopWrapper>
               <SideWrapper>
                <Side>
                    <Link><img src={phonelogo} alt='phonelogo' />Phones & Tablets</Link>
                    <Link><img src={laptoplogo} alt='laptoplogo' />Laptops</Link>
                    <Link><img src={accessorylogo} alt='accessorylogo' />Accessories</Link>
                    <Link><img src={medialogo} alt='medialogo' />Media gadgets</Link>
                    <Link><img src={otherslogo} alt='otherslogo' />Others</Link>
                </Side>
                <Brand>
                 <img src={brandlogo} alt="brandlogo"/>
                </Brand>
                </SideWrapper>
                <Productside>
                    <SummaryContainer>
                        <SummaryCard background="#FFFFFF" borderColor="#FFFFFF">
                            <img src={product1} alt="product1" />
                        </SummaryCard>
                        <SummaryCard background="#FBFAF9" borderColor="#FBFAF9">
                            <img src={product2} alt="product2" />
                        </SummaryCard>
                        <SummaryCard background="#FFFFFF" borderColor="#FFFFFF">
                            <img src={product3} alt="product3" />
                        </SummaryCard>
                        <SummaryCard background="#FFFFFF" borderColor="#FFFFFF">
                            <img src={product1} alt="product1" />
                        </SummaryCard>
                        
                       

                    </SummaryContainer>
                </Productside>
            </TopWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>





        </ProductParent>







    )








}


export default Product;