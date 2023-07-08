import React from "react";
import { FlContainer, BtnWrapper, BoxContainer } from "../forgot-password/forgot.password.styles";
import { ResetParent, ResetContainer,ResetWrapper } from "./reset.password.styles";
import FormButton from "../../components/custom-button/FormButton";
import {
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";



const Resetpassword = () => {

    return (
        <ResetParent>

            <ResetWrapper>
                <FlContainer>
                    <img src={logo} alt="logo" />
                </FlContainer>
                <ResetContainer>
                    <BoxContainer>
                    <h1>Reset Password</h1>
                    <p>Reset your Goldcart Password</p>
                    <FormControl mt={4} marginTop={"12"} marginBottom={"7px"}>
                        <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="5px" marginLeft={7}>
                            New Password
                        </FormLabel>
                        <Input
                            type="password"
                            fontSize="12"
                            fontWeight="300"
                            fontFamily="inherit"
                            height={"1.8rem"}
                            placeholder="Password"
                            name="password"
                            borderRadius={"5px"}
                            width={"17.5rem"}
                            marginLeft={"11"}
                        />
                    </FormControl>

                    <FormControl mt={4} marginTop={"10"} marginBottom={"7px"}>
                        <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="5px" marginLeft={7}>
                            Confirm Password
                        </FormLabel>
                        <Input
                            type="password"
                            fontSize="12"
                            fontWeight="300"
                            fontFamily="inherit"
                            height={"1.8rem"}
                            placeholder="Password"
                            name="password"
                            borderRadius={"5px"}
                            width={"17.5rem"}
                            marginLeft={"11"}
                        />
                    </FormControl>

                  <BtnWrapper>
                    <FormButton text="Reset Password"
                        backgroundColor="#CF9D3A"
                        color="#fff"
                        borderColor="#CF9D3A"
                        width="18rem"

                    />

                    <FormButton text="Cancel"
                        backgroundColor="#FFFBF3"
                        color="#CF9D3A"
                        borderColor="#CF9D3A"
                        width="18rem"
                        
                    />
                 </BtnWrapper>
                    
                    </BoxContainer>
                </ResetContainer>
            </ResetWrapper>






        </ResetParent>




    )


}

export default Resetpassword;