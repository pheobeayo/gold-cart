import React from "react";
import {
    ProductdeliveryParent,
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
    Wrapper,
    FooterWrapper,
    DeliveryFormContainer,
    PaymentContainer
} from "./product.delivery.styles.js";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search-icon.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Deliveryform from "../../components/delivery-form/Deliveryform.js";
import PaymentDetail from "../../components/payment-detail/PaymentDetail.js";



const Productdelivery = () => {


    return (
        <ProductdeliveryParent>
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

                </Wrapper>

                <DeliveryFormContainer>
                    <Deliveryform />
                </DeliveryFormContainer>
                <PaymentContainer>
                    <PaymentDetail />
                </PaymentContainer>
            </TopWrapper>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>





        </ProductdeliveryParent>







    )








}


export default Productdelivery;