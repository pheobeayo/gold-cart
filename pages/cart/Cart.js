import React from "react";
import {
  CartParent, 
  Wrapper,
  CartInfoWrapper,
  CartInformationParent,
  Heading,
  NavBarContainer
} from "./cart.styles.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import { sideBarLinks } from "./cart.routes.js";
import Navbar from "../../components/navbar/Navbar.js";



const Cart = () => {
  

return (
  <CartParent>
     <Sidebar routes={sideBarLinks} />
    <Wrapper>
    <NavBarContainer>
        <Navbar />
      </NavBarContainer>
      <div
        className=""
        style={{
          height: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <CartInformationParent>
          <CartInfoWrapper>
            <Heading>Cart</Heading>

            
          </CartInfoWrapper>
        </CartInformationParent>





      </div>







    </Wrapper>








  </CartParent>




)


}


export default Cart;