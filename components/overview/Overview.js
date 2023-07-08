import React from "react";
import { LinkContainer, OverviewParent, Wrapper } from "./overview.styles";
import { Link } from "react-router-dom";

const Overview = () => {
    return (

        <OverviewParent>
            <Wrapper>
                <LinkContainer>
                    <Link to="/product-overview" style={{ marginRight: 70 }}>Overview</Link>
                    <Link to="/product-specification"style={{ marginRight: 70 }}>Specifications</Link>
                    <Link to="/product-review">Reviews</Link>
                </LinkContainer>
                <div style={{ borderTop: "1px solid #D7D1C7", marginLeft: 20, marginRight: 20, marginBottom: 30 }}></div>

                <p><b>Clear Voice in Calls- Like Face-To-Face Conversation</b>
                    <br></br> FreePods 3 comes with 4-mic beamforming technology to track and provide high-quality voice signals. Then AI
                    <br></br>Deep Neural Network algorithm is used to reduce surrounding noise. Now your voice is crystal clear to the caller on
                    <br></br>the other end.

                    <br></br><b>8+28 Hours-Power On-The-Go</b>
                    <br></br>Because audio is a big part of your life, up to 8 hours of listening on a single charge. Compact charge case provides
                    <br></br>28 more hours to make the total playing time 36 hours.

                    <br></br><b>Charges for 5 Min to play for 40 Min-Always Be Ready</b>
                    <br></br>Charge earbuds in the case for 5 minutes and take them out to play for 40 minutes. You can bring earbuds into
                    <br></br> action at the last minute before commuting or exercise.

                    <br></br> <b>One Pair, Two Different Fits-More Choices To Go Truly Wireless</b>
                    <br></br>FreePods 3 has two different Smart Modes in each pair. Bass mode blocks out ambient noise and stops air leakage
                    <br></br> for bass boost. Awareness Mode will let you adapt to your surroundings. You can still listen to music and will hear
                    <br></br> clearly.

                    <br></br><b>Incredibly Powerful Bass- Power To Amaze You</b>
                    <br></br>Equipped with 13mm high sensitive drivers, FreePods 3 is specially designed for dynamic audio, incredibly powerful
                    <br></br>bass and reproducing every music detail as artists intend.

                    <br></br><b>IPX5 Waterproof - More Sweat? No Fear!</b>
                    <br></br>IPX5 waterproof against rain and sweat. FreePods 3 is always with you no matter what the outdoor condition is.

                    <br></br><b>BT 5.2-Simultaneous, Low Latency</b>
                    <br></br>BT5.2 chip that transmits sound to the left and right ears for a stable connection and impeccable sound experience.
                    <br></br>Low audio latency makes gaming or video viewing more enjoyable and vivid.</p>
                <div style={{ borderTop: "1px solid #D7D1C7", marginLeft: 20, marginRight: 20, marginTop: 30 }}></div>
            </Wrapper>
        </OverviewParent>
    )




}

export default Overview;