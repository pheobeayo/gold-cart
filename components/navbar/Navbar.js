import React from "react";
import { NavbarParent, 
         Heading,
         SearchBarContainer,
         SearchBarForm,
         Button,
         LinkContainer, 
         CartContainer } from "./navbar.styles";
import searchIcon from "../../assets/search-icon.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";






const Navbar = ()=>{
      
    return(
            <NavbarParent>
             <Heading>My Account</Heading>
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

          <LinkContainer><Link>Support</Link>
          </LinkContainer>
          <CartContainer> <img src={cart} alt="cart" /></CartContainer>
            </NavbarParent>



)




}


export default Navbar;