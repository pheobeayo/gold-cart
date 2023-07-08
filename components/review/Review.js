import React from "react";
import { LinkContainer, ReviewParent, Wrapper } from "./review.styles";
import { Link } from "react-router-dom";


const Review = () => {
    return (

        <ReviewParent>
            <Wrapper>
                <LinkContainer>
                    <Link to="/product-overview"style={{ marginRight: 70 }}>Overview</Link>
                    <Link to="/product-sepcification"style={{ marginRight: 70 }}>Specifications</Link>
                    <Link to="/product-review">Reviews</Link>
                </LinkContainer>
                <div style={{ borderTop: "1px solid #D7D1C7", marginLeft: 20, marginRight: 20, marginBottom: 30 }}></div>
                    <p>No reviews on this product yet</p>
                    <div style={{ borderTop: "1px solid #D7D1C7", marginLeft: 20, marginRight: 20, marginTop: 30}}></div>
            </Wrapper>
        </ReviewParent>
    )




}

export default Review;