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
  font-size: 32px;

  width: 100%;
  @media (max-width: 1000px) {
    display: grid;
    font-size: 16px;
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
  @media (max-width: 1000px) {
    padding: 22px;
  }

  &:hover {
    background: #252525;
    color: white;
  }
`;

const FlashUI = styled.span`
  animation: flash 6s ease infinite;
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
  const [showRelated, setShowRelated] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  const handleSkillClick = (e) => {
    console.log(e.target);
    setShowRelated(!showRelated);
    setAddSkill(!addSkill);
  };

  const handleRelatedClick = (e) => {
    console.log(e.target);
  };

  console.log(allPostsData);

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
          <TileUI style={{}}>
            Read How To <span>Price Work</span>
          </TileUI>
        </Link>
        <Link
          style={{ textDecoration: "none", gridColumn: "1 / span 2" }}
          to="/career-pathways"
        >
          <TileUI style={{ background: "#C1D42F", color: "#252525" }}>
            Explore Career Pathways
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
            Questions <br></br>
            about Co-op?
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
        <TileUI style={{ gridColumn: "1 / span 1" }}>Find Work</TileUI>
        <TileUI style={{}}>Meet with a Career Advisor</TileUI>
        <TileUI style={{ width: "auto", gridColumn: "1 / span 2" }}>
          Read How To{" "}
          <span style={{ animation: "flash 6s linear infinite" }}>
            Price Work
          </span>{" "}
          <FlashUI style={{ animation: "flash 6s linear 2s infinite" }}>
            Budget
          </FlashUI>{" "}
          <FlashUI style={{ animation: "flash 6s linear 4s infinite" }}>
            Apply For Grad School
          </FlashUI>
        </TileUI>
        <Link
          style={{ textDecoration: "none", gridColumn: "1 / span 2" }}
          to="/skill-identifier"
        >
          <TileUI style={{ background: "#00B188", color: "#252525" }}>
            {" "}
            Identify Your Skills
          </TileUI>
        </Link>

        <TileUI style={{ background: "#C1D42F", color: "#252525" }}>
          Explore Career Pathways
        </TileUI>
        <TileUI style={{ background: "#F02091", color: "#252525" }}>
          Build a Resume
        </TileUI>

        <TileUI style={{}}>
          Questions <br></br>
          about Co-op?
        </TileUI>
        <TileUI style={{}}>
          Hire an <br></br>
          Artist/Designer
        </TileUI>
      </MobileGridUI>
    </ContainerUI>
  );
};

export default NavGrid;
