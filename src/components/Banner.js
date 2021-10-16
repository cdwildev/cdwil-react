import { useEffect, useState, lazy, Suspense } from "react";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import styled from "styled-components";
import { Feather, Info, X } from "react-feather";



const BannerButtonUI = styled.div`
    position: fixed;
    right: 2.5vw;
    bottom: 2.5vh;
    border-radius: 50%;
    background: white;
    border: 3px solid #252525;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1000;
    &:hover{
        background: #252525;
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

const BannerUI = styled.div`
    position: fixed;
    right: 2.5vw;
    bottom: 2.5vh;
    border-radius: 15px;
    background: white;
    border: 3px solid #252525;
    padding: 50px;
    width: 300px;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


function Banner(props) {
const [banner, setBanner] = useState(false)

  return (
<>

{banner ? 
<BannerUI onClick={() => setBanner(false)}>
    <X style={{position: 'absolute', top: '10px', right: '10px'}}/>
    <p>
Welcome to creativecareers.ca! <br/> The site is currently in the development/beta testing phase. We would love your feedback and ideas, please submit them <a target="_blank" href="https://www.surveymonkey.com/r/2KKY6CJ">here</a>
</p>
</BannerUI> :

<BannerButtonUI onClick={() => setBanner(true)}><Info/></BannerButtonUI>
}
</>

  );
}

export default Banner;

