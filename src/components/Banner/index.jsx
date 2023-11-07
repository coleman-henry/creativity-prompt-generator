import React from "react";
import {Header, HeaderH1, HeaderP} from "./BannerElements";


const Banner = ({heading="Fill me with text", paragraph="Text please?"}) => {
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