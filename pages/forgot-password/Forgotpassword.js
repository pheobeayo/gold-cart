import React from "react";
import { FlContainer, ForgotParent, ForgotContainer, ForgotWrapper, BtnWrapper, BoxContainer } from "./forgot.password.styles";
import FormButton from "../../components/custom-button/FormButton";
import {
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";



const Forgotpassword = () => {

    return (
        <ForgotParent>

            <ForgotWrapper>
                <FlContainer>
                    <img src={logo} alt="logo" />
                </FlContainer>
                <ForgotContainer>
                    <BoxContainer>
                    <h1>Forgot Password?</h1>
                    <p>Reset your Goldcart Password</p>
                    <FormControl mt={4} marginTop={"15"} marginBottom={"7px"}>
                        <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="5px" marginLeft={7}>
                            Email Address or Phone Number
                        </FormLabel>
                        <Input
                            type="email address or phonenumber"
                            fontSize="12"
                            fontWeight="300"
                            fontFamily="inherit"
                            height={"1.8rem"}
                            placeholder="Email address or Phone Number"
                            name="email address or phonenumber"
                            borderRadius={"5px"}
                            width={"17.5rem"}
                            marginLeft={"11"}
                        />
                    </FormControl>

                  <BtnWrapper>
                    <FormButton text="Send Code"
                        backgroundColor="#CF9D3A"
                        color="#fff"
                        borderColor="#CF9D3A"
                        width="18rem"

                    />

                    <FormButton text="Back"
                        backgroundColor="#FFFBF3"
                        color="#CF9D3A"
                        borderColor="#CF9D3A"
                        width="18rem"
                        
                    />
                 </BtnWrapper>
                    
                    </BoxContainer>
                </ForgotContainer>
            </ForgotWrapper>






        </ForgotParent>




    )


}

export default Forgotpassword;