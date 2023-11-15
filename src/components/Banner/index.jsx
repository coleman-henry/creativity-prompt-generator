import React from "react";
import {Header, HeaderH1, HeaderP} from "./BannerElements";


const Banner = ({heading="Welcome to Creative Prompt Generator", paragraph="Click the button below to start"}) => {
    return(
        <Header>
            <HeaderH1>
                {heading}
            </HeaderH1>
            <HeaderP> {paragraph} </HeaderP>
        </Header>
    );
}
export default Banner;