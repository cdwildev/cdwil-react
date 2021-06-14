import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";
import InspireGrid from "./components/Home/InspireGrid";
import gridOne from './images/grid-1.png';
import gridTwo from './images/grid-2.png';
import gridThree from './images/grid-3.png';
import gridFour from './images/grid-4.png';
import gridFive from './images/grid-5.png'
import Dropdown from './components/Dropdown.js'
/* import "node_modules/video-react/dist/video-react.css"; // import css */


import React from 'react';
import { Player } from 'video-react';


const SectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  width: 75vw;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 10vh 0 0 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
 

  @media (max-width: 1000px) {
    width: 90vw;
  }
  
`;

const InfoContainerUI = styled.div`

display: flex;
justify-content: flex-start;
align-items: flex-start;

width: 75vw;
text-align: left;
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
margin: 64px 0 160px 0;

@media (max-width: 1000px) {
  flex-direction: column;
  
}


`

const LeftColumn = styled.div`
width: 420px;
margin: 0 64px 0 0;
@media (max-width: 1000px) {

  margin: 0 0 64px 0;

  width: 100%;
}

`;

const RightColumn = styled.div`
  width: 318px;

  @media (max-width: 1000px) {
 
  
    width: 100%;
  }
`;

const HeroOneUI = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const HeroTwoUI = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TitleUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 120px;
  background: -webkit-linear-gradient(
    113.03deg,
    #e01583 31.82%,
    #1c878c 71.61%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }

  
`;

const SubTitleUI = styled.p`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 480px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 32px;
  position: relative;
  top: -55px;
`;

const TileUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  height: 168px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 22px;


`;

const FlexUI = styled.div`
  display: flex;
`;


const GridUI = styled.div`
  display: grid;
  
  text-align: left;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  width: 75vw;

  @media (max-width: 1000px) {

    width: 100%;
    
  }


`

const TileImageUI = styled.div`

  height: 30vh;

  background: white;
    border: 4px solid #252525;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
  

`;


const ImageUI = styled.img`

flex-shrink: 0;

min-height: 100%

`;

export default function Stories() {
  const [allPostsData, setAllPosts] = useState([]);

  return (
  <div className="container">

    <SectionUI>

    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />



    </SectionUI>





  </div>
  )
}
