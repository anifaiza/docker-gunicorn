import React from "react";
import styled from "styled-components";

import dockerlogo from "../../images/docker.png";
import gitlablogo from "../../images/gitlab.png";
import slacklogo from "../../images/slack.png";

const Divbs = styled.div`
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
    background-color: #e8e8e8;
`;

const Divfooter = styled.div`
    postion: absolute;
`;

const Textdiv = styled.div`
    padding-bottom: 50px;
`;

const Text = styled.text`
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    font-size: 1.5rem;
`;

const Imgdiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    allign items: flex-end;
`;

const Img = styled.img``;

const Linkdiv = styled.div`
    padding-top: 50px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
`;

const Link = styled.a`
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    font-size: 1.5rem;
    color: #0069ff;
    text-decoration: none;
    &:hover {
        color: darkblue;
    }
`;

const Footerbs = () => {
    return (
        <Divfooter>
            <Divbs>
                <Textdiv>
                    <Text>INNOVATIVE BUSINESSES TRUST DIGITALOCEAN</Text>
                </Textdiv>
                <Imgdiv>
                    <Img src={dockerlogo} alt="Logo" height="8%" width="8%" />
                    <Img src={gitlablogo} alt="Logo" height="20%" width="20%" />
                    <Img src={slacklogo} alt="Logo" height="10%" width="10%" />
                    <span />
                    <Img src={dockerlogo} alt="Logo" height="8%" width="8%" />
                    <Img src={gitlablogo} alt="Logo" height="20%" width="20%" />
                    <Img src={slacklogo} alt="Logo" height="10%" width="10%" />
                </Imgdiv>
                <Linkdiv>
                    <Link href="#">See Business Solutions</Link>
                </Linkdiv>
            </Divbs>
        </Divfooter>
    );
};

export default Footerbs;
