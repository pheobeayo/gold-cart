import React from "react";
import {
    ProductreviewParent,
    ProductNavBar,
    NavBarContainer,
    LogoContainer,
    SearchBarContainer,
    SearchBarForm,
    Button,
    LinkContainer,
    CartContainer,
    Select,
    TopWrapper,
    SummaryCard,
    SellerProducts,
    ContentWrapper,
    Wrapper,
    ReviewContainer
} from "./product.review.styles";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { FooterWrapper } from "../landingpage/landing.page.styles";
import Footer from "../../components/footer/Footer";
import oraimonew from "../../assets/oraimonew.png";
import Seller from "../../components/seller-wrap/Seller.js";
import Review from "../../components/review/Review";



const Productreview = () => {


    return (
        <ProductreviewParent>
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
                <Wrapper>
                    <SummaryCard background="#FFFFFF" borderColor="#FFFFFF">
                        <img src={oraimonew} alt="oraimonew" />
                    </SummaryCard>
                    <ContentWrapper>

                    </ContentWrapper>
                </Wrapper>

                <ReviewContainer>
                    <Review />
                </ReviewContainer>

                <SellerProducts>

                    <Seller />

                </SellerProducts>


            </TopWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>





        </ProductreviewParent>







    )








}


export default Productreview;