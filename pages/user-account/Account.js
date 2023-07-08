import React from "react";
import {
  AccountParent, 
  Wrapper,
  PersonalInfoWrapper,
  PersonalInformationParent,
  Heading,
  NavBarContainer, 
  DivideWrapper,
  Side, 
  PersonalInformationForm
} from "./account.styles.js";
import Sidebar from "../../components/sidebar/Sidebar.js";
import { sideBarLinks } from "./account.routes.js";
import Navbar from "../../components/navbar/Navbar.js";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";



const Account = () => {
  

return (
  <AccountParent>
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
        <PersonalInformationParent>
          <PersonalInfoWrapper>
            <Heading>Personal Information</Heading>
            <PersonalInformationForm>
                <DivideWrapper>
                    <Side>
                <FormControl marginBottom={"2px"}>
                            <FormLabel
                                fontSize="15"
                                fontWeight="400"
                                fontFamily="inherit"
                                paddingBlock="2px"
                            >
                                Name
                            </FormLabel>
                            <Input
                                type="name"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Name"
                                name="Name"
                                borderRadius={"5px"}
                                width={"10rem"}
                            />
                        </FormControl>
                        </Side>
                        <Side>
                        <FormControl marginBottom={"2px"}>
                            <FormLabel
                                fontSize="15"
                                fontWeight="400"
                                fontFamily="inherit"
                                paddingBlock="2px"
                            >
                                Email Address
                            </FormLabel>
                            <Input
                                type="email"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Email Address"
                                name="Email Address"
                                borderRadius={"5px"}
                                width={"10rem"}
                            />
                        </FormControl>
                        </Side>
                        </DivideWrapper>
                        <DivideWrapper>
                            <Side>
                        <FormControl marginBottom={"2px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Username
                            </FormLabel>
                            <Input
                                type="email"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Username"
                                name="Username"
                                borderRadius={"5px"}
                                width={"10rem"}
                            />
                        </FormControl>
                        </Side>
                        <Side>
                        <FormControl mt={4} marginBottom={"2px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
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
                                width={"10rem"}
                            />
                        </FormControl>
                        </Side>
                        </DivideWrapper>
                        <DivideWrapper>
                            <Side>
                        <FormControl marginBottom={"2px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Gender
                            </FormLabel>
                            <Input
                                type="gender"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Gender"
                                name="Gender"
                                borderRadius={"5px"}
                                width={"10rem"}
                            />
                        </FormControl>
                        </Side>
                        <Side>
                        <FormControl mt={4} marginBottom={"2px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Date of Birth
                            </FormLabel>
                            <Input
                                type="date"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Date of Birth"
                                name="dateofbirth"
                                borderRadius={"5px"}
                                width={"10rem"}
                            />
                        </FormControl>
                        </Side>
                        </DivideWrapper>
                        <FormControl mt={4} marginBottom={"2px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Shipping Address
                            </FormLabel>
                            <Input
                                type="address"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Shipping Address"
                                borderRadius={"5px"}
                                width={"25rem"}

                            />
                        </FormControl>
                        
                        
                        <FormControl mt={4} marginBottom={"4px"}>
                            <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                Country
                            </FormLabel>
                            <Input
                                type="country"
                                fontSize="10"
                                fontWeight="300"
                                fontFamily="inherit"
                                height={"1.8rem"}
                                placeholder="Country"
                                borderRadius={"5px"}
                                width={"25rem"}

                            />
                        </FormControl>
                        <FormControl marginBottom={"2px"}>
                            {" "}
                            <Button
                                colorScheme={"#CF9D3A"}
                                color={"#fff"}
                                width={"10rem"}
                                mt={4}
                                fontSize="12"
                                fontWeight="600"
                                fontFamily="inherit"
                                backgroundColor={"#CF9D3A"}
                                height={"2rem"}
                                marginBottom={"0.1rem"}
                                marginLeft={"7rem"}
                                borderRadius={"5px"}
                                borderColor={"#CF9D3A"}
                                text="Submit"
                                
                            >
                               Submit
                              
             
                            </Button>
                        </FormControl>
            </PersonalInformationForm>
          </PersonalInfoWrapper>
        </PersonalInformationParent>





      </div>







    </Wrapper>








  </AccountParent>




)


}


export default Account;