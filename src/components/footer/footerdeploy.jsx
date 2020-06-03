import React from "react";
import styled from "styled-components";
import kubelogo from "../../images/kube.png";

const Textdiv = styled.div`
    text-align: left;
    width: 80%;
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    color: #5b6987;
    font-size: 16px;
    line-height: 160%;
    font-weight: 400;
    font-style: normal;
`;

const BlockImg = styled.img`
    display: flex;
    align-items: flex-end;
`;

const Sidenav = styled.div`
    float: left;
    width: 200px;
    z-index: 1;
    top: 20px;
    left: 10px;
    background: while;
    padding: 8px 0;
`;
const SidenavMenu = styled.a`
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    font-size: 25px;
    color: #2196f3;
    display: block;
    width: 20%;
    border-left-style: solid;
    border-width: 2px;
    border-color: #e8e8e8;
    &:hover {
        color: #0a0a0a;
        border-left-style: solid;
        border-width: 2px;
        border-color: #0a0a0a;
    }
`;

const SidenavDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
`;

const SidenavText = styled.text`
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    padding-left: 0px;
    float: right;
    width: 80%;
    display: grid;
    grid-row-gap: 20px;
    grid-colmn-gap: 20px;
    grid-template-columns: 1fr 1fr;
`;

const H1 = styled.h1`
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    text-decoration: bold;
    font-size: 2.5rem;
    color: #0a0a0a;
`;
const H2 = styled.h2`
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    text-decoration: bold;
    font-size: 1.5rem;
    color: #0a0a0a;
`;

const P = styled.p`
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    font-size: 1.5rem;
    color: #0a0a0a;
`;

const P2 = styled.p`
    font-family: Sailec-Regular, "system-ui", -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, "sans-serif";
    font-size: 1rem;
    color: #7a7c7c;
`;

const Divdeploy = styled.div`
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
    background-color: white;
`;

const Deploy = () => {
    return (
        <Divdeploy>
            <H1>Deploy and scale seamlessly</H1>
            <P>
                Our optimized configuration process saves your team time when
                running and scaling distributed applications, AI & machine
                learning workloads, hosted services, client websites, or CI/CD
                environments.
            </P>
            <SidenavDiv>
                <Sidenav>
                    <SidenavMenu href="#about">About</SidenavMenu>
                    <SidenavMenu href="#services">Services</SidenavMenu>
                    <SidenavMenu href="#clients">Clients</SidenavMenu>
                    <SidenavMenu href="#contact">Contact</SidenavMenu>
                </Sidenav>
                <SidenavText>
                    <Textdiv>
                        <P2>
                            <BlockImg
                                src={kubelogo}
                                alt="Logo"
                                height="15%"
                                width="15%"
                            />
                            <H2>Kubernates in minutes</H2>
                            Spin up a managed Kubernetes cluster in just a few
                            clicks. Simply specify the size and location of your
                            worker nodes.
                        </P2>
                    </Textdiv>

                    <Textdiv>
                        <BlockImg
                            src={kubelogo}
                            alt="Logo"
                            height="15%"
                            width="15%"
                        />
                        <P2>
                            <H2>Flexible compute types</H2>
                            With Standard, General Purpose, CPU-Optimized or
                            Memory-Optimized Droplets, you can choose the right
                            infrastructure for your workload.
                        </P2>
                    </Textdiv>

                    <Textdiv>
                        <BlockImg
                            src={kubelogo}
                            alt="Logo"
                            height="15%"
                            width="15%"
                        />
                        <P2>
                            <H2>1-Click App Marketplace</H2>
                            Quickly deploy projects using one of our
                            preconfigured 1-Click Apps, like LAMP, Docker, and
                            WordPress.
                        </P2>
                    </Textdiv>

                    <Textdiv>
                        <BlockImg
                            src={kubelogo}
                            alt="Logo"
                            height="15%"
                            width="15%"
                        />
                        <P2>
                            <H2>Global availability</H2>
                            Deploy to any of our data center locations – New
                            York, SF, London, Amsterdam, Bangalore, and more.
                        </P2>
                    </Textdiv>
                </SidenavText>
            </SidenavDiv>
        </Divdeploy>
    );
};

export default Deploy;
