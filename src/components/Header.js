import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from '../images/logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const HeaderUI = styled.div`
  display: flex;
  height: 140px;
  width: 100vw;

  border-bottom: 4px solid black;
    justify-content:center;
    align-items: center;

`

const ContainerUI = styled.div`

    width: 75vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`

const NavUI = styled.div`

display: flex;
flex-direction: column;
align-items: space-between;

height: 66px;
justify-content: space-between;

`;

const NavTopUI = styled.div`

display: flex;
justify-content: flex-end;;

`;

const NavBottomUI = styled.div`

display: flex;
align-items: flex-end;

`;


const NavLinkTopUI = styled.a`

font-weight: 400;
font-size: 18px;
margin-left: 35px;


`


const NavLinkUI = styled.a`

font-weight: 700;
font-size: 18px;
margin-left: 35px;


`



export const Header = ({  }) => {

  return (
    <HeaderUI>

        <ContainerUI>
        <Link to="/Home"><img src={logo}></img></Link>
        
        <NavUI>
            <NavTopUI>
            <NavLinkTopUI>For Employers</NavLinkTopUI>
            <NavLinkTopUI>|</NavLinkTopUI>
            <NavLinkTopUI>For Students</NavLinkTopUI>

            </NavTopUI>
            <NavBottomUI>
                <NavLinkUI>Home</NavLinkUI>
                <NavLinkUI>Tools</NavLinkUI>
                <NavLinkUI>Resources</NavLinkUI>
                <NavLinkUI>News + Events</NavLinkUI>
                <NavLinkUI>Artswork</NavLinkUI>
                <NavLinkUI>About</NavLinkUI>

            </NavBottomUI>



        </NavUI>
        </ContainerUI>

    </HeaderUI>
  );
};

export default Header
