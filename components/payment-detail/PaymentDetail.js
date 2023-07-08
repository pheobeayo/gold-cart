import React from "react";
import { ButtonWrapper,PaymentParent, Wrapper, DivideWrapper, Side } from "./payment.detail.styles";

import FormButton from "../custom-button/FormButton";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";



const PaymentDetail = () => {



    return (

        <PaymentParent>
            <Wrapper>
                <h1>Payment Details</h1>
                <ButtonWrapper>
                    <FormButton text="Card"
                        backgroundColor="#CF9D3A"
                        color="#fff"
                        borderColor="#CF9D3A"
                        width="13rem"
                    />
                    <FormButton text="PayPal"
                        backgroundColor="#FEF2E6"
                        color="#CF9D3A"
                        borderColor="#FEF2E6"
                        width="13rem"
                    />
                    <FormButton text="Google Pay"
                        backgroundColor="#FEF2E6"
                        color="#CF9D3A"
                        borderColor="#FEF2E6"
                        width="13rem"
                    />

                </ButtonWrapper>
                <FormControl mt={4} marginBottom={"7px"}>
                    <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                        Cardholder Name
                    </FormLabel>
                    <Input
                        type="cardholdername"
                        fontSize="10"
                        fontWeight="300"
                        fontFamily="inherit"
                        height={"1.8rem"}
                        placeholder="Cardholder name"
                        borderRadius={"5px"}
                        width={"41rem"}

                    />
                </FormControl>
                <FormControl mt={4} marginBottom={"7px"}>
                    <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                        Card Number
                    </FormLabel>
                    <Input
                        type="cardnumber"
                        fontSize="10"
                        fontWeight="300"
                        fontFamily="inherit"
                        height={"1.8rem"}
                        placeholder="Enter card number"
                        borderRadius={"5px"}
                        width={"41rem"}

                    />
                </FormControl>
                <DivideWrapper>
                    <Side>
                        <FormControl marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                Expiry Date
                            </FormLabel>
                            <Input
                                type="expirydate"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="MM/YY"
                                name="Expiry Date"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                    </Side>
                    <Side>
                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                CVV
                            </FormLabel>
                            <Input
                                type="cvvcode"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="CVV code"
                                name="CVVCode"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                    </Side>
                </DivideWrapper>

                <label>
                    <input type="checkbox"/>
                    <b>Save my payment Details for further purchase</b>
                </label>

            </Wrapper>
        </PaymentParent>





    )





}

export default PaymentDetail;