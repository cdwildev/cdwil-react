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
        <Link to="/home"><img src={logo}></img></Link>
        
        <NavUI>
            <NavTopUI>
            <NavLinkTopUI>For Employers</NavLinkTopUI>
            <NavLinkTopUI>|</NavLinkTopUI>
            <NavLinkTopUI>For Alumni</NavLinkTopUI>

            </NavTopUI>
            <NavBottomUI>
                <Link to="/home" style={{textDecoration: 'none', color: 'black'}}><NavLinkUI>Home</NavLinkUI></Link>
                <Link to="/tools" style={{textDecoration: 'none', color: 'black'}}><NavLinkUI>Tools</NavLinkUI></Link>
                <Link to="/resources" style={{textDecoration: 'none', color: 'black'}}><NavLinkUI>Resources</NavLinkUI></Link>
                <Link to="/news" style={{textDecoration: 'none', color: 'black'}}><NavLinkUI>News + Events</NavLinkUI></Link>
                <Link to="/artswork" style={{textDecoration: 'none', color: 'black'}}><NavLinkUI>Artswork</NavLinkUI></Link>
                <Link to="/about" style={{textDecoration: 'none', color: 'black'}}><NavLinkUI>About</NavLinkUI></Link>
            </NavBottomUI>



        </NavUI>
        </ContainerUI>

    </HeaderUI>
  );
};

export default Header
