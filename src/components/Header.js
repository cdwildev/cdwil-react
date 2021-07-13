import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ChevronUp, ChevronDown, X, Plus, Menu } from "react-feather";
import useWindowDimensions from "../helpers/Window";

const HeaderUI = styled.div`
  display: flex;
  height: 120px;
  width: 100vw;
  min-height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 3px solid black;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background: white;
  transition: 0.2s ease;
`;

const ContainerUI = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const NavUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  height: 12.5vh;
  max-height: 55px;
  justify-content: space-between;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileNavButtonUI = styled.div`
  display: none;
  position: relative;

  height: 100%;
  min-width: 120px;
  margin: 0 5vh 0 0;

  border-right: 3px solid black;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const MobileMenuUI = styled.div`
  background: white;
  width: 100vw;
  height: calc(100vh);
  position: fixed;
  top: 120px;
  left: 0;
  z-index: 10000;
  flex-direction: column;

`;

const MobileLinkUI = styled.div`
  border-bottom: 3px solid black;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 0 0 5vw;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
`;

const NavTopUI = styled.div`
  display: flex;
  justify-content: flex-end; ;
`;

const NavBottomUI = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LogoUI = styled.img`

  @media (max-width: 1100px) {
    width: 20vw;
    min-width: 150px;
  }
`;

const NavLinkTopUI = styled.a`
  font-weight: 400;
  font-size: 16px;
  margin-left: 35px;
`;

const NavLinkUI = styled.a`
  font-weight: 700;
  font-size: 16px;
  margin-left: 35px;
  text-decoration: none;

  color: black;
`;

export const Header = ({width}) => {

 
  const [active, setActive] = useState(false);

  useEffect(() => {
    if(active){
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
  }, [active])

  useEffect(() => {
    if(width >= 1000){
      setActive(false)
    } 
    
  }, [width])

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setCurrentScrollPosition(currentScrollPos);

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <MobileMenuUI style={{ display: active ? "flex" : "none" }}>
        <Link
          onClick={() => setActive(!active)}
          to="/home"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Home</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/tools"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Tools</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/resources"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Resources</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/news"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>News + Events</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/students"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Artswork</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/about"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>About</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/employers"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Employers/Alumni/Prospective </MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/students"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Non-ECU students / Alumni</MobileLinkUI>
        </Link>
      </MobileMenuUI>

      <HeaderUI
        style={{
      
          transform: visible ? "translateY(0px)" : "translateY(-150px)",
        }}
      >
        <MobileNavButtonUI onClick={() => setActive(!active)}>
          <Menu style={{ display: active ? "none" : "flex" }} />
          <X style={{ display: active ? "flex" : "none" }} />
        </MobileNavButtonUI>

        <ContainerUI>
          <Link to="/home">
            <LogoUI src={logo}></LogoUI>
          </Link>

          <NavUI>
            <NavTopUI>
              <Link
                to="/employers"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkTopUI>For Employers</NavLinkTopUI>
              </Link>

              <NavLinkTopUI>|</NavLinkTopUI>

              <Link
                to="/students"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkTopUI>For Alumni</NavLinkTopUI>
              </Link>
            </NavTopUI>
            <NavBottomUI>
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkUI>Home</NavLinkUI>
              </Link>
              <Link
                to="/tools"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkUI>Tools</NavLinkUI>
              </Link>
              <Link
                to="/resources"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkUI>Resources</NavLinkUI>
              </Link>
              <Link
                to="/news"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkUI>News + Events</NavLinkUI>
              </Link>
              <NavLinkUI target="_blank" href="https://artswork.ecuad.ca/">
                Artswork
              </NavLinkUI>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkUI>About</NavLinkUI>
              </Link>
              {/*             <Link
              to="/stories"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavLinkUI>Stories</NavLinkUI>
            </Link> */}
            </NavBottomUI>
          </NavUI>
        </ContainerUI>
      </HeaderUI>
    </>
  );
};

export default Header;
