import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import kubeslide from "../../images/kubess.png";
import dropletslide from "../../images/dropletss.jpg";
import dbslide from "../../images/databasess.png";

const SlideshowDiv = styled.div`
    pdisplay: block;
`;

const SlideshowContainer = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;
`;

const Slides = styled.div`
    display: Block;
`;

const Img = styled.img``;

const ImgDiv = styled.div`
    width: 100%;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    display: block;
    position: relative;
`;

const TextDiv = styled.div`
    text align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    
    position: relative;
    width: 100%;
    text-align: center;
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    color: #5b6987;
    font-size: 18px;
    line-height: 160%;
    font-weight: 400;
    font-style: normal;
`;

const Prev = styled.a`
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #5b6987;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    left: 0;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

const Next = styled.a`
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: #5b6987;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    right: 0;
    border-radius: 3px 0 0 3px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

const DotDiv = styled.div`
    text-align: center;
    padding-bottom: 20px;
`;

const Dot = styled.span`
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &:hover {
        background-color: #717171;
    }
`;

const Slideshow = () => {
    return (
        <SlideshowDiv>
            <SlideshowContainer>
                <Slides className="mySlides">
                    <ImgDiv>
                        <Img
                            src={kubeslide}
                            alt="Logo"
                            height="80%"
                            width="80%"
                        />
                    </ImgDiv>
                    <TextDiv>
                        Use kubernates to improve availablity, scalablity and
                        resource efficiency of your containerized application
                    </TextDiv>
                    <Prev>&#10094;</Prev>
                    <Next>&#10095;</Next>
                </Slides>
                <DotDiv>
                    <Dot className="dot" />
                    <Dot className="dot" />
                    <Dot className="dot" />
                </DotDiv>
            </SlideshowContainer>
        </SlideshowDiv>
    );
};

export default Slideshow;
