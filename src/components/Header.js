import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ChevronUp, ChevronDown, X, Plus, Menu, } from "react-feather";
import useWindowDimensions from "../helpers/Window";

const HeaderUI = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
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

  height: 50px;

  justify-content: center;

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
  top: 103px;
  left: 0;
  z-index: 100000;
  flex-direction: column;
`;

const MobileLinkUI = styled.div`
  border-bottom: 3px solid black;
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  padding: 0 0 0 5vw;

  font-size: 16px;
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
  width: 15vw;
  @media (max-width: 1200px) {
    width: 20vw;
    min-width: 150px;
  }
`;

const NavLinkTopUI = styled.a`
  font-weight: 400;
  font-size: 14px;
  margin-left: 35px;
`;



const NavLinkUI = styled.a`
  font-weight: 700;
  font-size: 16px;
  margin-left: 50px;
  text-decoration: none;
position: relative;
  color: black;
  cursor: pointer;
`;

const BannerUI = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  border-radius: 0 0 5px 5px;
  background: white;
  border: 3px solid #252525;
  color: white;

  width: 100vw;
  background: #252525;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const DropDownUI = styled.div`
  position: absolute;
  display: flex;
  left: ;

  z-index: 1000;
  background: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 25px 0 0 0;

`;

const DropDownLinkUI = styled.div`

  display: flex;
  left: 0;
  width: 200px;
  padding:10px  25px;
  z-index: 1000;
  background: white;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover{

background: #252525;
color: white;
text-decoration: underline;
  }
`;

export const Header = ({ width }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [active]);

  useEffect(() => {
    if (width >= 1000) {
      setActive(false);
    }
  }, [width]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

  const [showResources, setShowResources] = useState(false);

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
          <MobileLinkUI>Resources For Students / Alumni</MobileLinkUI>
        </Link>

        <Link
          onClick={() => setActive(!active)}
          to="/employers"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Resources For Employers</MobileLinkUI>
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

{/*         <Link
          onClick={() => setActive(!active)}
          to="/alumni"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>Alumni</MobileLinkUI>
        </Link> */}

        <Link
          onClick={() => setActive(!active)}
          to="/about"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>About</MobileLinkUI>
        </Link>
        {/* 
        <Link
          onClick={() => setActive(!active)}
          to="/students"
          style={{ textDecoration: "none", color: "black" }}
        >
          <MobileLinkUI>For Prospective Students</MobileLinkUI>
        </Link> */}


      </MobileMenuUI>

      <HeaderUI
        style={{
          transform: visible ? "translateY(0px)" : "translateY(-200px)",
        }}
      >
        <BannerUI>
          <p style={{ width: "90%" }}>
            Welcome to creativecareers.ca! The site is currently in the
            development/beta testing phase. We would love your feedback and
            ideas, please submit them{" "}
            <a
              style={{ color: "inherit" }}
              target="_blank"
              href="https://www.surveymonkey.com/r/2KKY6CJ"
            >
              here
            </a>
          </p>
        </BannerUI>
        <MobileNavButtonUI onClick={() => setActive(!active)}>
          <Menu style={{ display: active ? "none" : "flex" }} />
          <X style={{ display: active ? "flex" : "none" }} />
        </MobileNavButtonUI>

        <ContainerUI>
          <Link to="/">
            <LogoUI
              src={logo}
              alt="career development and work integrated learning at emily carr logo"
            ></LogoUI>
          </Link>

          <NavUI>
            {/*             <NavTopUI>

              <Link
                to="/students"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkTopUI>For Prospective Students</NavLinkTopUI>
              </Link>

              <NavLinkTopUI>|</NavLinkTopUI>

              <Link
                to="/employers"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkTopUI>Resources For Employers</NavLinkTopUI>
              </Link>
            </NavTopUI> */}
            <NavBottomUI>
              <Link
                to="/tools"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavLinkUI>Tools</NavLinkUI>
              </Link>

                <NavLinkUI onMouseEnter={() => setShowResources(true)} onMouseLeave={() => setShowResources(false)}>Resources <ChevronDown style={{position: 'absolute', top: '-2px'}}></ChevronDown>

                {showResources ? <DropDownUI>
                  
                <Link
                to="/resources"
                style={{ textDecoration: "none", color: "black" }}
              >
                <DropDownLinkUI>
               For Students / Alumni
               </DropDownLinkUI>
              </Link>

              <Link
                to="/employers"
                style={{ textDecoration: "none", color: "black" }}
              >
                          <DropDownLinkUI>
                          For Employers
               </DropDownLinkUI>
              </Link>

              </DropDownUI> : <></>}
                </NavLinkUI>


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
            </NavBottomUI>
          </NavUI>
        </ContainerUI>
      </HeaderUI>
    </>
  );
};

export default Header;
