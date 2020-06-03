import React from "react";
import styled from "styled-components";

import Deploy from "./footerdeploy";
import Footerbs from "./footerbs";
import Slideshow from "./footerslideshow";

const Body = styled.div`
    position: absolute;
`;

const Footer = () => {
    return (
        <Body>
            <Footerbs />
            <Deploy />
            <br />
            <Slideshow />
        </Body>
    );
};

export default Footer;
