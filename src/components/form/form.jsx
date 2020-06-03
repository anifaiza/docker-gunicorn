import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "../button/button";

export const Body = styled.div`
    background-color: #0069ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    border: 3px solid lightblue;
`;
export const FormDiv = styled.div`
    background-color: white;
    float: right;
    width: 30%;
    height: 400 px
    margin: 50px auto;
    .clearfix {
        overflow: auto;
    }
    position: absolute;
    right: 30px;
    border: 5px solid white;
    border-radius: 5px;
`;

export const FormGroup = styled.div`
    color: #0069ff;;
    display: flex;
    flex-direction: column
    height: 10%;
    width: 200px;
    margin: 10px auto;
    margin-bottom: none;
`;

export const Label = styled.label`
    margin-bottom: 0.2em;
    color: #0069ff;
`;

export const Input = styled.input`
    padding: 0.5em;
    color: #0069ff;
    background: #dde8f0;
    border: none;
    border-radius: 3px;
    width: 80%;
    margin-bottom: 0.2em;
`;

const Text = styled.h3``;

const Form = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            username: username,
            email: email,
            password: password,
        };
    };
    return (
        <FormDiv>
            <Text>Deploy in seconds</Text>
            <form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Name: </Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email: </Label>
                    <Input
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                    />
                </FormGroup>

                <Button type="submit">Sign Up</Button>
                <br />
            </form>
        </FormDiv>
    );
};

export default Form;
