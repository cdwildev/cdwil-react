import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import gridOne from '../../images/grid-1.png';
import gridTwo from '../../images/grid-2.png';
import gridThree from '../../images/grid-3.png';
import gridFour from '../../images/grid-4.png';
import gridFive from '../../images/grid-5.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const GridUI = styled.div`
  display: grid;
  
  text-align: left;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  max-width: 1040px;
  width: 60vw;

  @media (max-width: 1000px) {
    display: none;

    width: 90vw;
  }


`


const MobileGridUI = styled.div`
  display: none;
  
  text-align: left;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  max-width: 1040px;
  width: 60vw;

  @media (max-width: 1000px) {
    display: grid;
    width: 90vw;
  }


`


const TileImageUI = styled.div`

  height: 168px;

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

const TileUI = styled.div`

  height: 168px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: white;
    border: 4px solid #252525;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 22px;
    overflow: hidden;

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
    <svg style={{position: 'absolute', top: '-100px', left: '-100px', zIndex: '-100',}}width="333" height="136" viewBox="0 0 333 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.3759 56.888H115.048V127.728C108.301 130.059 100.512 131.96 91.6799 133.432C82.9706 134.904 73.8319 135.64 64.2639 135.64C51.6292 135.64 40.5279 133.187 30.9599 128.28C21.5146 123.373 14.0932 115.891 8.6959 105.832C3.42124 95.7734 0.783903 83.0774 0.783903 67.744C0.783903 54.0054 3.42124 42.1067 8.6959 32.048C13.9706 21.9894 21.6986 14.2614 31.8799 8.86405C42.1839 3.34404 54.8186 0.584042 69.7839 0.584042C78.0026 0.584042 85.7919 1.38138 93.1519 2.97604C100.512 4.44804 106.891 6.41071 112.288 8.86405L101.064 36.648C96.4026 34.3174 91.4959 32.6 86.3439 31.496C81.1919 30.2694 75.7332 29.656 69.9679 29.656C62.1172 29.656 55.7999 31.4347 51.0159 34.992C46.2319 38.5494 42.7359 43.272 40.5279 49.16C38.4426 55.048 37.3999 61.5494 37.3999 68.664C37.3999 80.9307 39.9759 90.3147 45.1279 96.816C50.2799 103.195 57.6399 106.384 67.2079 106.384C69.2932 106.384 71.8079 106.261 74.7519 106.016C77.8186 105.648 80.1492 105.28 81.7439 104.912V84.304H58.3759V56.888ZM219.787 133.8H141.771V2.42404H219.787V30.944H177.283V51.552H216.659V80.072H177.283V104.912H219.787V133.8ZM300.715 133.8H265.203V31.496H233.187V2.42404H332.731V31.496H300.715V133.8Z" fill="url(#paint0_linear)"/>
        <defs>
        <linearGradient id="paint0_linear" x1="213.272" y1="273.394" x2="24.8155" y2="147.599" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C1D42F"/>
        <stop offset="1" stop-color="#09AB88"/>
        </linearGradient>
        </defs>
    </svg>

    <svg style={{position: 'absolute', bottom: '-100px', right: '-100px', }} width="827" height="127" viewBox="0 0 827 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.8203 124.8H0.836282V105.88L16.1443 100.032V26.588L0.836282 20.912V1.99204H64.8203V20.912L49.5123 26.588V100.032L64.8203 105.88V124.8ZM200.946 124.8H157.43L112.538 38.284H111.85C112.08 40.9214 112.309 44.132 112.538 47.916C112.768 51.5854 112.94 55.312 113.054 59.096C113.284 62.88 113.398 66.32 113.398 69.416V124.8H83.9862V1.99204H127.33L172.05 87.304H172.566C172.452 84.6667 172.28 81.5707 172.05 78.016C171.821 74.4614 171.649 70.8494 171.534 67.18C171.42 63.5107 171.362 60.3 171.362 57.548V1.99204H200.946V124.8ZM307.756 87.476C307.756 94.1267 306.036 100.433 302.595 106.396C299.27 112.359 294.053 117.232 286.944 121.016C279.949 124.685 270.833 126.52 259.595 126.52C253.977 126.52 249.046 126.233 244.804 125.66C240.676 125.201 236.777 124.399 233.108 123.252C229.438 122.105 225.654 120.615 221.756 118.78V89.196C228.406 92.5214 235.114 95.1014 241.88 96.936C248.645 98.656 254.78 99.516 260.284 99.516C265.214 99.516 268.826 98.656 271.12 96.936C273.413 95.216 274.56 93.0374 274.56 90.4C274.56 87.1894 272.84 84.6094 269.4 82.66C266.074 80.596 260.398 77.7867 252.372 74.232C246.294 71.3654 241.02 68.384 236.548 65.288C232.076 62.0774 228.636 58.1787 226.228 53.592C223.82 49.0054 222.616 43.2147 222.616 36.22C222.616 28.308 224.565 21.7147 228.464 16.44C232.362 11.0507 237.752 7.03737 244.632 4.40004C251.626 1.64804 259.71 0.272043 268.884 0.272043C276.91 0.272043 284.134 1.18938 290.556 3.02405C296.977 4.74405 302.71 6.75071 307.756 9.04404L297.608 34.672C292.333 32.264 287.116 30.372 281.956 28.996C276.91 27.5054 272.209 26.76 267.852 26.76C263.609 26.76 260.456 27.5054 258.391 28.996C256.442 30.4867 255.468 32.3787 255.468 34.672C255.468 36.6214 256.213 38.3414 257.704 39.832C259.194 41.3227 261.66 42.9854 265.1 44.82C268.654 46.54 273.47 48.776 279.548 51.528C285.51 54.1654 290.556 57.0894 294.684 60.3C298.926 63.396 302.137 67.1227 304.316 71.48C306.609 75.7227 307.756 81.0547 307.756 87.476ZM369.185 1.99204C384.78 1.99204 396.418 5.37471 404.101 12.14C411.898 18.9054 415.797 28.5374 415.797 41.036C415.797 46.6547 414.994 52.044 413.389 57.204C411.784 62.2494 409.146 66.836 405.477 70.964C401.922 74.9774 397.164 78.188 391.201 80.596C385.238 82.8894 377.9 84.036 369.185 84.036H359.897V124.8H326.701V1.99204H369.185ZM368.497 28.824H359.897V57.032H366.433C370.79 57.032 374.574 55.9427 377.785 53.764C380.996 51.4707 382.601 47.5147 382.601 41.896C382.601 37.9974 381.454 34.844 379.161 32.436C376.868 30.028 373.313 28.824 368.497 28.824ZM491.965 124.8H427.981V105.88L443.289 100.032V26.588L427.981 20.912V1.99204H491.965V20.912L476.657 26.588V100.032L491.965 105.88V124.8ZM551.379 1.99204C584.747 1.99204 601.431 14.0894 601.431 38.284C601.431 45.7374 599.539 52.216 595.755 57.72C592.085 63.1094 587.04 67.6387 580.619 71.308L616.395 124.8H578.727L552.755 80.08H544.327V124.8H511.131V1.99204H551.379ZM550.863 27.104H544.327V55.14H550.519C555.564 55.14 559.692 54.0507 562.903 51.872C566.228 49.5787 567.891 45.5654 567.891 39.832C567.891 35.8187 566.572 32.7227 563.935 30.544C561.297 28.2507 556.94 27.104 550.863 27.104ZM700.461 124.8H627.533V1.99204H700.461V28.652H660.729V47.916H697.537V74.576H660.729V97.796H700.461V124.8ZM826.164 60.816C826.164 75.0347 823.469 86.9027 818.08 96.42C812.805 105.937 805.352 113.047 795.72 117.748C786.088 122.449 774.736 124.8 761.664 124.8H721.932V1.99204H764.416C784.253 1.99204 799.504 7.03737 810.168 17.128C820.832 27.2187 826.164 41.7814 826.164 60.816ZM791.764 62.02C791.764 39.8894 782.762 28.824 764.76 28.824H755.128V97.624H762.524C772.614 97.624 780.01 94.7 784.712 88.852C789.413 83.004 791.764 74.06 791.764 62.02Z" fill="url(#paint0_linear)"/>
        <defs>
        <linearGradient id="paint0_linear" x1="747.04" y1="125.2" x2="389.854" y2="-94.2584" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FE289C"/>
        <stop offset="1" stopColor="#09AB88"/>
        </linearGradient>
        </defs>
    </svg>

    <GridUI>
      <TileImageUI style={{gridColumn: '1 / span 2'}}><ImageUI style={{objectFit: 'contain',}} src={gridOne}/></TileImageUI>
      <TileImageUI style={{gridColumn: '3 / span 1'}}><ImageUI src={gridTwo}/></TileImageUI>
      <TileImageUI style={{gridColumn: '4 / span 2'}}><ImageUI src={gridThree}/></TileImageUI>
      <TileImageUI style={{gridColumn: '1 / span 2'}}><ImageUI src={gridFour}/></TileImageUI>
      <TileImageUI style={{gridColumn: '3 / span 2'}}><ImageUI src={gridFive}/></TileImageUI>
      <TileUI style={{gridColumn: '5 / span 1'}}>More</TileUI>
    </GridUI>

    <MobileGridUI>
      <TileImageUI ><ImageUI style={{objectFit: 'contain',}} src={gridOne}/></TileImageUI>
      <TileImageUI ><ImageUI src={gridTwo}/></TileImageUI>
      <TileImageUI ><ImageUI src={gridThree}/></TileImageUI>
      <TileImageUI ><ImageUI src={gridFour}/></TileImageUI>
      <TileImageUI ><ImageUI src={gridFive}/></TileImageUI>
      
      <TileUI >More</TileUI>
    </MobileGridUI>
    </div>
  );
};

export default InspireGrid