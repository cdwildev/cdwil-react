import { useState } from "react";
import styled from "styled-components";
import skillIdentifier from "../src/images/skill-identifier-borderless.svg";
import resumeBuilder from "../src/images/resume-builder-borderless.svg";
import careerPathfinder from "../src/images/career-pathfinder-borderless.svg";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const ContainerUI = styled.div`
  width: 75vw;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const HeaderUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 120px;

  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  animation: gradient 5s ease infinite;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }
`;

const RowUI = styled.div`
  justify-content: space-between;
  width: 75vw;

  display: flex;
  @media (max-width: 1400px) {
    width: 90vw;
  }

  @media (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
  }
`;

const TitleUI = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 82px;
  /* or 241% */
`;

const BodyTextUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  width: 305px;

  text-align: center;
  @media (max-width: 1400px) {
    width: 305px;
  }
`;

const ToolContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 0 100px 0;
`;

const ImageUI = styled.div`
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  width: 305px;
  height: 197px;
  cursor: pointer;
  position: relative;

  &:hover {
    background: #00b188;
  }

  @media (max-width: 1400px) {
    width: 305px;
    height: 197px;
  }
`;

const ImageTwoUI = styled.div`
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  width: 305px;
  height: 197px;
  cursor: pointer;

  &:hover {
    background: #e01583;
  }

  @media (max-width: 1400px) {
    width: 305px;
    height: 197px;
  }
`;

const ImageThreeUI = styled.div`
  border: 4px solid #000000;
  box-sizing: border-box;
  border-radius: 25px;
  width: 305px;
  height: 197px;
  cursor: pointer;

  &:hover {
    background: #c1d42f;
  }

  @media (max-width: 1400px) {
    width: 305px;
    height: 197px;
  }
`;

const InfoContainerUI = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  text-align: left;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin: 50px 0 0 0 ;

  @media (max-width: 800px) {
    font-family: Noto Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
  }
`;

export default function Tools() {
  return (
    <>
      <div className="container">
        <ContainerUI>
          <HeaderUI style={{ margin: "200px 0 0 0" }}>Tools</HeaderUI>

          <InfoContainerUI>
          Please note: for full experience, use tools full screen on a desktop or laptop. For increased accessibility, use tools on mobile or half screen.
        </InfoContainerUI>
        </ContainerUI>



        <RowUI style={{ margin: "100px 0 0 0" }}>
          <Link
            to="/skill-identifier"
            style={{ color: "#252525", textDecoration: "none" }}
          >
            <ToolContainerUI>
              <ImageUI>
                <img
                  alt="Black, white and grey illustration of a student in a black shirt looking through a telescope.The student stands sideways and through the telescope sees the night sky with stars, planets and constellations. "
                  style={{ width: "105%", position: "relative", left: "4px" }}
                  src={skillIdentifier}
                />
              </ImageUI>
              <TitleUI>Skill Identifier</TitleUI>
              <BodyTextUI>
                Explore the skills and software connected to each major
              </BodyTextUI>
            </ToolContainerUI>
          </Link>

          <Link
            to="/resume-builder"
            style={{ color: "#252525", textDecoration: "none" }}
          >
            <ToolContainerUI>
              <ImageTwoUI>
                <img
                  alt="Black, white and grey illustration of a student in a black shirt holding a magnifying glass while looking at a long unfolding list. A paper airplane flies off the top righthand corner. A few sheets of paper and a crumpled paper ball is in the bottom lefthand corner."
                  style={{ width: "90%", position: "relative", top: "12px" }}
                  src={resumeBuilder}
                />
              </ImageTwoUI>
              <TitleUI>Resume Builder</TitleUI>
              <BodyTextUI>
                Build a master resume documenting your creative background,
                skills and artistic achievements
              </BodyTextUI>
            </ToolContainerUI>
          </Link>

          <Link
            to="/career-pathways"
            style={{ color: "#252525", textDecoration: "none" }}
          >
            <ToolContainerUI>
              <ImageThreeUI>
                <img
                  alt="Black, white and grey illustration of a student in a black shirt looking through binoculars. A large three arrow sign post is behind the student and a stone pathway is in front."
                  style={{ width: "100%", position: "relative", top: "-14px" }}
                  src={careerPathfinder}
                />
              </ImageThreeUI>
              <TitleUI>Career Pathfinder</TitleUI>
              <BodyTextUI>
                Explore career interests and discover creative careers connected
                to each major
              </BodyTextUI>
            </ToolContainerUI>
          </Link>
        </RowUI>

        <Footer />
      </div>
    </>
  );
}
