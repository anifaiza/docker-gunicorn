import React, { Component } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../button/button";
import logo from "../../images/dgo.png";

const Nav = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

const NavLeft = styled.div`
    width: 75%;
    text-align: left;
`;

const NavCenter = styled.div`
    width: 33.333%;
    text-align: center;
`;

const NavRight = styled.div`
    width: 25%;
    text-align: right;

    svg {
        margin-right: 20px;
    }
`;

const MenuLink = styled.a`
    font-size: 1rem;
    color: #0069ff;
    padding: 0.5rem;
`;

const DropdownMenu = styled.li`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
`;

const Dropdown = styled.ul`
    position: relative;
    display: inline-block;
    &:hover ${DropdownMenu} {
        display: block;
    }
`;

const Img = styled.img`
    height: 4rem;
    width: 4rem;
    padding-bottom: 0;
`;

const H1 = styled.text`
    font-size: 2rem;
`;

const Link = styled.a`
    font-size: 1.5rem;
    color: #0069ff;
    text-decoration: none;
    &:hover {
        color: hotpink;
    }
`;

function Header() {
    return (
        <Nav>
            <NavHeader>
                <NavLeft>
                    <Img src={logo} alt="Logo" />
                    <MenuLink>
                        <H1>DigitalOcean</H1>
                    </MenuLink>

                    <MenuLink>
                        <Dropdown>
                            {" "}
                            Products
                            <DropdownMenu>
                                <Link>Droplets</Link>
                                <br />
                                <Link>Kubernates</Link>
                                <br />
                                <Link>Databases</Link>
                                <br />
                            </DropdownMenu>
                        </Dropdown>
                    </MenuLink>

                    <MenuLink>Marketplace</MenuLink>
                    <MenuLink>Customer</MenuLink>
                    <MenuLink>Pricing</MenuLink>
                </NavLeft>

                <NavRight>
                    <MenuLink href="#">
                        <Button>Sign up</Button>
                    </MenuLink>
                </NavRight>
            </NavHeader>
        </Nav>
    );
}

export default Header;
