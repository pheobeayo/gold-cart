import React from "react";
import logo from "../../assets/logo.png";
import {
    SigninParent,
    SigninWrapper,
    FormHeader,
    FormContainer,
    FormFooter,
    LContainer
} from "./sign.in.styles";
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react";

// import { useDispatch } from "react-redux";


// import { setUser } from "../../slices/users";

const Signin = () => {

    return (
        <SigninParent>
            <SigninWrapper>
                <LContainer>
                    <img src={logo} alt="logo" />
                </LContainer>
                <FormContainer>
                    <form>
                        <FormHeader>
                            <h1> Sign in</h1>
                            <h3>Sign into your Goldcart account</h3>

                        </FormHeader>


                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
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
                                width={"18rem"}
                            />
                        </FormControl>

                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Password
                            </FormLabel>
                            <Input
                                type="password"
                                fontSize="12"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Password"
                                borderRadius={"5px"}
                                width={"18rem"}

                            />
                        </FormControl>

                        <FormControl marginBottom={"2px"}>
                            {" "}
                            <Button
                                colorScheme={"#CF9D3A"}
                                color={"#fff"}
                                width={"18.5rem"}
                                mt={4}
                                fontSize="12"
                                fontWeight="600"
                                fontFamily="inherit"
                                backgroundColor={"#CF9D3A"}
                                height={"2rem"}
                                marginBottom={"0.1rem"}
                                borderRadius={"5px"}
                                borderColor={"#CF9D3A"}
                                text="Sign Up"
                            >
                                Sign in
                            </Button>
                        </FormControl>
                        <FormFooter>
                            <p> Don't have an account?       <Link to="/sign-up">Sign Up</Link>
                            </p>
                        </FormFooter>
                    </form>
                </FormContainer>
            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;