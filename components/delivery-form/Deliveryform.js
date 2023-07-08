import React from "react";

import {
    DeliveryFormParent,
    DeliveryInfoWrapper,
    DeliveryForm,
    Heading,
    DivideWrapper,
    Side,
} from "./delivery.form.styles.js";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";




const Deliveryform = () => {



    return (
        <DeliveryFormParent>
            <DeliveryInfoWrapper>
                <Heading>Delivery Information</Heading>
                <DeliveryForm>
                <DivideWrapper>
                    <Side>
                <FormControl marginBottom={"4px"}>
                            <FormLabel
                                fontSize="15"
                                fontWeight="400"
                                fontFamily="inherit"
                                paddingBlock="4px"
                            >
                                First Name
                            </FormLabel>
                            <Input
                                type="firstname"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="First Name"
                                name="First Name"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                        </Side>
                        <Side>
                        <FormControl marginBottom={"4px"}>
                            <FormLabel
                                fontSize="15"
                                fontWeight="400"
                                fontFamily="inherit"
                                paddingBlock="4px"
                            >
                                Last Name
                            </FormLabel>
                            <Input
                                type="lastname"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Last Name"
                                name="Last Name"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                        </Side>
                        </DivideWrapper>
                        <DivideWrapper>
                            <Side>
                        <FormControl marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                Email Address
                            </FormLabel>
                            <Input
                                type="email"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Enter Email Address"
                                name="Email Address"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                        </Side>
                        <Side>
                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                Phone Number
                            </FormLabel>
                            <Input
                                type="phonenumber"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Enter Phone Number"
                                name="phonenumber"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                        </Side>
                        </DivideWrapper>
                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Delivery Address
                            </FormLabel>
                            <Input
                                type="address"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Street Address, apartment, suite or floor"
                                borderRadius={"5px"}
                                width={"41rem"}

                            />
                        </FormControl>
                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Delivery Address
                            </FormLabel>
                            <Input
                                type="address"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Street Address, apartment, suite or floor"
                                borderRadius={"5px"}
                                width={"41rem"}

                            />
                        </FormControl>
                        <DivideWrapper>
                            <Side>
                        <FormControl marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                City
                            </FormLabel>
                            <Input
                                type="city"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="City"
                                name="City"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                        </Side>
                        <Side>
                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                Postal Code
                            </FormLabel>
                            <Input
                                type="postalcode"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Postal code"
                                name="postalcode"
                                borderRadius={"5px"}
                                width={"18rem"}
                            />
                        </FormControl>
                        </Side>
                        </DivideWrapper>
                        <FormControl mt={4} marginBottom={"7px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Country/State
                            </FormLabel>
                            <Input
                                type="country/state"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Country/State"
                                borderRadius={"5px"}
                                width={"41rem"}

                            />
                        </FormControl>
               



                </DeliveryForm>
            </DeliveryInfoWrapper>
        </DeliveryFormParent>
    );
};

export default Deliveryform;