import React from "react";
import styled from "styled-components";
import Button from "../button/button";
import Form from "../form/form";

export const Body = styled.div`
    padding-top: 100px;
    background-color: #0069ff;
    display: flex;
    flex-direction: row;
    height: 300px;
`;
const H1 = styled.h1`
    color: white;
`;

const H3 = styled.h3`
    font-color: white;
`;

const Text = styled.div`
    float: left;
    .clearfix {
        overflow: auto;
    }
    width: 60%;
`;

const P = styled.p`
    color: white;
`;

const Main = () => {
    return (
        <Body>
            <Text>
                <H1>Welcome to the developer cloud</H1>
                <P>
                    We make it simple to launch in the cloud and scale up as you
                    grow – with an intuitive control panel, predictable pricing,
                    team accounts, and more.
                </P>
            </Text>
            <Form />
        </Body>
    );
};

export default Main;
