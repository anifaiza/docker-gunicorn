import React, { Component } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: #0069ff;
    border: 2px solid #0069ff;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: #0069ff;
        color: white;
    }
`;

const Button = ({ children }) => {
    return <StyledButton> {children} </StyledButton>;
};

export default Button;
