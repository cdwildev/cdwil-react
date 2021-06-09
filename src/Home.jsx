import "./App.css";
import { NavGrid } from "./components/NavGrid";
import { InspireGrid } from "./components/InspireGrid";
import { Button } from "./components/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
import heroOne from './images/hero-1.png';
import heroTwo from './images/hero-2.png'
import heroThree from './images/hero-3.png'
import footerGradient from './images/footer.svg'
import buttonBgOne from './images/bg-1.png'
import buttonBgTwo from './images/bg-2.png';
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const SectionUI = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 75vw;
 
`;

const LeftColumn = styled.div`

display: flex;
flex-direction: column;

`;

const RightColumn = styled.div`
  width: 100%;
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

const TitleUI = styled.h1`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  height: 270px;
  font-weight: 900;
  margin: 0;
  
  font-size: 56px;
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
    margin: 0 0 5vh 0;;
`;

const TileUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  width: 337px;
  margin: 0 4.5px;
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

function Home() {
  const [allPostsData, setAllPosts] = useState([]);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/*      
<div onClick={() => router.push('/skill-identifier')}>skill</div> */}
        <SectionUI style={{ padding: '10vh 0 0 0 ', alignItems: 'flex-start', maxHeight: '75vh'}}>
          <LeftColumn>
            <TitleUI>
              Career <br></br> Development <br></br>+ Work Integrated <br></br>
              Learning Office
            </TitleUI>
            <SubTitleUI>
              Connecting students and alumni with local, <br></br> national and
              international employers in the <br></br> creative industries and
              beyond.
            </SubTitleUI>
            <Button></Button>
          </LeftColumn>
          <RightColumn>
            <HeroOneUI>
              <img
                style={{ border: "4px solid black", borderRadius: "8px" }}
                src={heroOne}
              />
            </HeroOneUI>
            <HeroTwoUI>
              <img
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "280px",
                  border: "4px solid black",
                  borderRadius: "8px",
                }}
                src={heroTwo}
              />
              <img
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "00px",
                  border: "4px solid black",
                  borderRadius: "8px",
                }}
                src={heroThree}
              />
            </HeroTwoUI>
          </RightColumn>
        </SectionUI>

    

        <SectionUI className="section">
          <NavGrid />
        </SectionUI>

        <SectionUI className="section"  style={{alignItems: 'center', height: '35vh'}}>

          search
          
          </SectionUI>
  

        <SectionUI className="section">
          <InspireGrid />
        </SectionUI>

      

        
      </div>



    </div>
  );
}

export default Home;
