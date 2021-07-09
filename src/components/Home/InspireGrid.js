import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import gridOne from "../../images/grid-1.png";
import gridTwo from "../../images/grid-2.png";
import gridThree from "../../images/grid-3.png";
import gridFour from "../../images/grid-4.png";
import gridFive from "../../images/grid-5.png";
import ReactPlayer from "react-player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import sanityClient from "../../client";

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(auto-fit, minmax(30%, 2fr));
  grid-template-rows: auto auto;
  justify-content: space-between;
  grid-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 35px;
  width: 75vw;
  align-items: flex-start;


  @media (max-width: 1400px) {
    width: 90vw;
    grid-template-columns: repeat(auto-fit, minmax(40%, 2fr));
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 2fr));
  }
`;
const VideoUI = styled.div`
  height: 186px;
  position: relative;
  gridcolumn: span 2;
  width: 100%;
  border: 5px solid #252525;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 10px;
  @media (max-width: 1200px) {
  }

  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;


`

const TitleUI = styled.div`
font-family: "Noto Sans JP", sans-serif;
font-size: 150px;
font-style: normal;
font-weight: 900;
z-index: 1000;
text-align: left;
color: white;

@media (max-width: 1100px) {
  display: none;
}

`;

const TitleMobileUI = styled.div`
font-family: "Noto Sans JP", sans-serif;
font-size: 46px;
font-style: normal;
font-weight: 900;
z-index: 1000;
text-align: left;
color: white;
margin 0 0 5vh 0;
display: none;
@media (max-width: 1100px) {
  display: flex;
}

`;

const GradientMobileUI = styled.div`
position: absolute;
width: 100vw;
height: 50vw;
top: -50px;
left: -10vh;
background: #C1D42F;
filter: blur(100px);
display: none;
@media (max-width: 1100px) {
  display: flex;
}

`;

const GradientUI = styled.div`
position: absolute;
width: 40vw;
height: 20vw;
background: #C1D42F;
filter: blur(100px);
display: flex;
@media (max-width: 1100px) {
  display: none;
}
`;



const TileUI = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: white;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 22px;
  overflow: hidden;
  height: 186px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 800px) {
    width: 90vw;
  }

  &:hover {
    background: #252525;
    color: white;
  }
`;

export const InspireGrid = ({
  showPost,
  setShowPost,
  data,
  color = "white",
}) => {
  const [showRelated, setShowRelated] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    const videos = JSON.parse(localStorage.getItem("videos"));

    if (videos) {
      setAllPosts(videos);
    } else {
      sanityClient
        .fetch(
          `*[_type == "videos"]{
            title,
            link,
        }`
        )
        .then((data) => {
          setAllPosts(data);
          localStorage.setItem("videos", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  const handleSkillClick = (e) => {
    setShowRelated(!showRelated);
    setAddSkill(!addSkill);
  };

  const handleRelatedClick = (e) => {};

  return (
  


    <GridUI>
      {allPostsData.slice(0, 5).map((video) => (
        <VideoUI>
          <ReactPlayer
            width="100%"
            height="100%"
            light={true}
            controls={true}
            url={video.link}
          />
        </VideoUI>
      ))}
      <TileUI style={{ border: "5px solid #252525", borderRadius: "10px" }}>
        More
      </TileUI>
    </GridUI>
    

 
  );
};

export default InspireGrid;
