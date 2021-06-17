import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import gridOne from '../../images/grid-1.png';
import gridTwo from '../../images/grid-2.png';
import gridThree from '../../images/grid-3.png';
import gridFour from '../../images/grid-4.png';
import gridFive from '../../images/grid-5.png'
import ReactPlayer from "react-player";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const GridUI = styled.div`
  display: grid;
  
  text-align: left;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  justify-content: space-between;
  grid-gap: 20px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 75vw;
  align-items: flex-start;




  @media (max-width: 1200px) {

    grid-template-columns: auto auto ;
    width: 90vw;
  }


  @media (max-width: 800px) {

    grid-template-columns: auto ;
  }

`
const VideoUI = styled.div`

width: 365px;
height: 186px;

@media (max-width: 1200px) {
  width: 365px;

}


@media (max-width: 800px) {


  width: 90vw;
}
  

`;

/* const MobileGridUI = styled.div`
  display: none;
  
  text-align: left;
  grid-template-columns: auto auto;
  justify-content: center;
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  max-width: 1040px;
  width: 60vw;
  height: 363px;

  @media (max-width: 1200px) {
    display: grid;
    width: 90vw;
  }


` */




const ImageUI = styled.img`

flex-shrink: 0;

min-height: 100%

`;

const TileUI = styled.div`
width: 365px;
 
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

    @media (max-width: 800px) {


      width: 90vw;
    }

    &:hover{
      background: #252525;
      color: white;
    }
      

`;



export const InspireGrid = ({ allPostsData, showPost, setShowPost, data, color='white',  }) => {
  const [showRelated, setShowRelated] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  const handleSkillClick = (e) => {

    setShowRelated(!showRelated);
    setAddSkill(!addSkill);
  };

  const handleRelatedClick = (e) => {

  };



  return (

    <div style={{position: 'relative'}}>


    <GridUI>



{allPostsData.slice(0,5).map((video) => (

  <VideoUI>

              <ReactPlayer
              width="100%"
              height="100%"
                style={{ border: "5px solid #252525", boxSizing: 'border-box', borderRadius: "10px" }}
                light={true}
                controls={true}
                url={video.link}
              />

</VideoUI>
    
          ))}
      <TileUI style={{ border: "5px solid #252525", borderRadius: "10px"}}>More</TileUI>
    </GridUI>

{/*     <MobileGridUI>
    {allPostsData.slice(0,5).map((video) => (

<ReactPlayer
    width="420px"
    height="206px"
  style={{ border: "5px solid #252525", boxSizing: 'border-box', borderRadius: "10px" }}
  light={true}
  controls={true}
  url={video.link}
/>

))}
<TileUI style={{width: '100%', height: '100%', border: "5px solid #252525", borderRadius: "10px"}}>More</TileUI>
    </MobileGridUI> */}
    </div>
  );
};

export default InspireGrid