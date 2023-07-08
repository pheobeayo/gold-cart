import FormButton from "../custom-button/FormButton";
import { ContentContainer, LandingParent, GalaxyContainer, CenterWrapper } from "./landing.center.styles";
import React from "react";
import galaxy from "../../assets/galaxy.png";
import { ButtonWrapper } from "../../pages/landingpage/landing.page.styles";




const LandingCenter = () => {

    return (
        <LandingParent>
            <CenterWrapper>
            <ContentContainer>
                <h2>Best Deals!</h2>
                <br></br>
                <h1>Galaxy Watch 5 </h1>
                <p>Find your starting line with Auto Workout Tracking and
                <br></br> BioActive Sensor to help see improvement with every
                <br></br>movement.</p>
                <ButtonWrapper>
                <FormButton text="Shop Now"
                    backgroundColor="#CF9D3A"
                    color="#fff"
                    borderColor="#CF9D3A"
                    width="10rem" />
                <FormButton text="Add to Cart"
                    backgroundColor="#FEF2E6"
                    color="#CF9D3A"
                    borderColor="#FEF2E6"
                    width="10rem"
                     />
                    </ButtonWrapper>
            </ContentContainer>
              <GalaxyContainer>
                    <img src={galaxy} alt="galaxy" />
                </GalaxyContainer>
                </CenterWrapper>
        </LandingParent>


    )



}

export default LandingCenter;