import React from "react";
import { VerifyParent, VerifyWrapper, VerifyContainer, BtnWrapper } from "./verifyaccount.styles";
import FormButton from "../../components/custom-button/FormButton";
import { Link } from "react-router-dom";

const Verifyaccount =()=>{
  
    return(
    
     <VerifyParent>
    <VerifyWrapper>
   <VerifyContainer>
    <h1>Verify Email</h1>
    <p>Please enter the 4-digit code sent to 
         Johndoe@gmail.com</p>
         
        <BtnWrapper> <FormButton text="Confirm"
              backgroundColor="#CF9D3A"
              color="#fff"
              borderColor="#CF9D3A"
              width="17rem" 
              />
              </BtnWrapper>
              <p>Didn't get a code? <Link>Click to resend</Link></p>
              </VerifyContainer>
    </VerifyWrapper>





    </VerifyParent>




    )


}

export default Verifyaccount;