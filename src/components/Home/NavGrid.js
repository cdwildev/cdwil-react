import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TitleContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 18px;
  margin: 0 0 48px 0;
`;

const TitleUI = styled.div`
  width: 100%;
  font-weight: 700;
`;

const LineUI = styled.div`
  border-bottom: 3px solid #252525;
  width: 100%;
`;

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  width: 100%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const MobileGridUI = styled.div`
  display: none;

  text-align: left;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  width: 100%;
  font-size: 22px;
  @media (max-width: 1000px) {
    display: grid;
    font-size: 18px;
  }
`;

const TileUI = styled.div`
  height: 168px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  background: white;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 22px;
  color: #252525;
  cursor: pointer;
  @media (max-width: 500px) {
    
  }

  &:hover {
    background: #252525;
    color: white;
  }
`;

const FlashUI = styled.span`
position: absolute;
  visibility: hidden;
  width: 600px;
`;

const LinkUI = styled.a`
  text-decoration: none;
`;

export const NavGrid = ({
  allPostsData,
  showPost,
  setShowPost,
  data,
  color = "white",
}) => {

  return (
    <ContainerUI>
      <TitleContainerUI>
        {" "}
        <LineUI></LineUI>
        <TitleUI>Not sure where to start? </TitleUI>
        <LineUI></LineUI>
      </TitleContainerUI>
      <GridUI>
        <LinkUI target="_blank" href="https://artswork.ecuad.ca/">
          <TileUI style={{}}>Find Work</TileUI>
        </LinkUI>
        <Link
          style={{ gridColumn: "2 / span 2", textDecoration: "none" }}
          to="/skill-identifier"
        >
          <TileUI style={{ background: "#00B188", color: "#252525" }}>
            {" "}
            Identify Your Skills
          </TileUI>
        </Link>
        <Link
          style={{ gridColumn: "4 / span 3", textDecoration: "none" }}
          to="/resources"
        >
        <TileUI style={{ width: "auto"}}>
          Read How To{" "}
          <span style={{ animation: "flash 6s linear infinite" }}>
            Price Work
          </span>{" "}
          <FlashUI style={{ animation: "flash 6s linear 2s infinite" }}>
          Apply For Grants
          </FlashUI>{" "}
          <FlashUI style={{ animation: "flash 6s linear 4s infinite" }}>
            Apply For Grad School
          </FlashUI>
        </TileUI>
        </Link>
        <Link
          style={{ textDecoration: "none", gridColumn: "1 / span 2" }}
          to="/career-pathways"
        >
          <TileUI style={{ background: "#C1D42F", color: "#252525" }}>
          Explore Career Paths
          </TileUI>
        </Link>
        <Link
          style={{ gridColumn: "3 / span 2", textDecoration: "none" }}
          to="/resume-builder"
        >
          <TileUI style={{ background: "#F02091", color: "#252525" }}>
            Build a Resume
          </TileUI>
        </Link>

        <Link
          style={{ gridColumn: "5 / span 2", textDecoration: "none" }}
          to="/about"
        >
          <TileUI style={{}}>Meet with a Career Advisor</TileUI>
        </Link>

        <Link
          style={{ gridColumn: "1 / span 3", textDecoration: "none" }}
          to="/about"
        >
          <TileUI style={{}}>
          Learn about Co-op
          </TileUI>
        </Link>

        <Link
          style={{ gridColumn: "4 / span 3", textDecoration: "none" }}
          to="/news"
        >
          <TileUI style={{}}>
            Attend<br></br>
            an Event
          </TileUI>
        </Link>
      </GridUI>

      <MobileGridUI>
        <LinkUI target="_blank" href="https://artswork.ecuad.ca/">
          <TileUI style={{ }}>Find Work</TileUI>
        </LinkUI>

        <Link
          style={{ textDecoration: "none" }}
          to="/about"
        >
          <TileUI style={{}}>Meet with a Career Advisor</TileUI>
        </Link>


        <Link
          style={{ textDecoration: "none", gridColumn: "1 / span 2"  }}
          to="/resources"
        >
        <TileUI style={{ width: "auto"}}>
          Read How To{" "}
          <span style={{ animation: "flash 6s linear infinite" }}>
            Price Work
          </span>{" "}
          <FlashUI style={{ animation: "flash 6s linear 2s infinite" }}>
          Apply For Grants
          </FlashUI>{" "}
          <FlashUI style={{ animation: "flash 6s linear 4s infinite" }}>
            Apply For Grad School
          </FlashUI>
        </TileUI>

        </Link>

        <Link
          style={{ textDecoration: "none", gridColumn: "1 / span 2" }}
          to="/skill-identifier"
        >
          <TileUI style={{ background: "#00B188", color: "#252525" }}>
            {" "}
            Identify Your Skills
          </TileUI>
        </Link>

        <Link
          style={{ textDecoration: "none" }}
          to="/career-pathways"
        >

        <TileUI style={{ background: "#C1D42F", color: "#252525" }}>
        Explore Career Paths
        </TileUI>

        </Link>

        <Link
          style={{textDecoration: "none" }}
          to="/resume-builder"
        >
        <TileUI style={{ background: "#F02091", color: "#252525" }}>
          Build a Resume
        </TileUI>

        </Link>

        <Link
          style={{textDecoration: "none" }}
          to="/about"
        >

        <TileUI style={{}}>
        Learn about Co-op
        </TileUI>

        </Link>


        <Link
          style={{ textDecoration: "none" }}
          to="/news"
        >
          <TileUI style={{}}>
            Attend<br></br>
            an Event
          </TileUI>
        </Link>
      </MobileGridUI>
    </ContainerUI>
  );
};

export default NavGrid;
