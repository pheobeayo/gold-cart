import React from "react";
import { LinkContainer, SpecificationParent, Wrapper } from "./specification.styles";
import { Link } from "react-router-dom";
const Specification = () => {
    return (

        <SpecificationParent>
            <Wrapper>
                <LinkContainer>
                    <Link to="/product-overview"style={{ marginRight: 70 }}>Overview</Link>
                    <Link to="/product-specification"style={{ marginRight: 70 }}>Specifications</Link>
                    <Link to="/product-review">Reviews</Link>
                </LinkContainer>
                <div style={{ borderTop: "1px solid #D7D1C7", marginLeft: 20, marginRight: 20, marginBottom: 30 }}></div>
                <p><b>BT Version</b> - V5.2
                    <br></br><b>Wireless Range</b> - 10M
                    <br></br><b>Battery Capacity</b> - 45mAh(each earbud), 500mAh (case)
                    <br></br> <b>Battery Life</b> - Up to 8 hours play time. Case provides additional 28 hours
                    <br></br><b>Case Input</b> - Type-C </p>
                    <div style={{ borderTop: "1px solid #D7D1C7", marginLeft: 20, marginRight: 20, marginTop: 30}}></div>
            </Wrapper>
        </SpecificationParent>
    )




}

export default Specification;