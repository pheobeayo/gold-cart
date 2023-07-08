import React from "react";
import { FlContainer, LocationParent, LocationContainer, LocationWrapper, SelectBox,BtnWrapper, BoxContainer } from "./location.styles";
import FormButton from "../../components/custom-button/FormButton";
import {Select} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { MdArrowDropDown } from "react-icons/md";



const Location = () => {

    return (
        <LocationParent>

            <LocationWrapper>
                <FlContainer>
                    <img src={logo} alt="logo" />
                </FlContainer>
                <LocationContainer>
                    <BoxContainer>
                    <h1>Location</h1>
                    <h3>Select your region</h3>
                    
                    <SelectBox> <Select
                placeholder="Choose a region"
                height={"2.2rem"}
                marginLeft={5}
                name="region"
                value="region"
                icon={<MdArrowDropDown />}
                size='md'
                variant="outline" 
              >
                <option value="africa">Africa</option>
                <option value="asia">Asia</option>
                <option value="australia">Australia</option>
                <option value="europe">Europe</option>
                <option value="northamerica">North America</option>
                <option value="southamerica"> South America</option>
              </Select>
              </SelectBox>
                 <p>This will help streamline the products you see on Goldcart
                    <br></br>to those available in your region. </p>
                  <BtnWrapper>
                   
                    <FormButton text="Continue"
                        backgroundColor="#CF9D3A"
                        color="#FFFFFF"
                        borderColor="#CF9D3A"
                        width="18rem"
                        
                    />
                 </BtnWrapper>
                    
                    </BoxContainer>
                </LocationContainer>
            </LocationWrapper>






        </LocationParent>




    )


}

export default Location;