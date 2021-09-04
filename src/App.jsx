import "./App.css";
import { useEffect, useState, lazy, Suspense } from "react";

import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import useWindowDimensions from "./helpers/Window";
import ScrollToTop from "./helpers/ScrollToTop";

import styled from "styled-components";
import heroOne from "./images/hero-1.png";
import heroTwo from "./images/hero-2.png";
import heroThree from "./images/hero-3.png";

import Footer from "./components/Footer";
import sanityClient from "./client";

import { Link } from "react-router-dom";
import { Twitter, Instagram, } from "react-feather";


import { SiTiktok } from "react-icons/si";
import Alumni from "./Alumni";
import Instruction from "./components/Instruction";

const NavGrid = lazy(() => import("./components/Home/NavGrid"));
const InspireGrid = lazy(() => import("./components/Home/InspireGrid"));

const SkillIdentifierTool = lazy(() => import("./SkillIdentifierTool"));
const ResumeBuilder = lazy(() => import("./ResumeBuilder"));
const CareerPathways = lazy(() => import("./CareerPathways"));
const Tools = lazy(() => import("./Tools"));
const Resources = lazy(() => import("./Resources"));
const News = lazy(() => import("./News"));
const About = lazy(() => import("./About"));
const Stories = lazy(() => import("./Stories"));
const Post = lazy(() => import("./Post"));
const Employers = lazy(() => import("./Employers"));
const Students = lazy(() => import("./Students"));


const SectionUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 75vw;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const ButtonUI = styled.div`
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid #252525;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;

  cursor: pointer;

  &:hover {
    background: #252525;
    color: white;
  }
`;

const TitleUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 70px;
  padding: 0 0 10px 0;
  background: linear-gradient(113.03deg, #e01583 31.82%, #1c878c 71.61%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  animation: gradient 5s ease infinite;
  z-index: 1000;

  @media (max-width: 1200px) {
    font-size: 48px;
  }

  @media (max-width: 800px) {
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

  @media (max-width: 1100px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 18px;
    width: 90vw;
  }
`;

const RightColumn = styled.div`
  width: 100%;
  display: flex;

  justify-content: flex-end;

  @media (max-width: 800px) {
    display: none;
  }
`;

const ImageGrid = styled.div`
  width: 80%;
  min-width: 250px;
  display: grid;
  grid-template-columns: repeat(8, auto);
  justify-items: end;
  grid-column-gap: 5px;
  grid-row-gap: 10px;
`;

const ImageUI = styled.img`
  border: 4px solid black;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  max-width: 533px;
  max-height: 339px;
  border-radius: 10px;
`;

const GradientMobileUI = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vw;
  top: -50px;
  left: -10vh;
  background: #c1d42f;
  filter: blur(50px);
  -webkit-filter: blur(50px);

  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  display: none;
  @media (max-width: 1100px) {
    display: flex;
  }
`;

const GradientUI = styled.div`
  position: absolute;
  width: 40vw;
  height: 20vw;

  background: #c1d42f;
  filter: blur(50px);
  -webkit-filter: blur(100px);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  border-radius: 50px;
  display: flex;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const InspireTitleUI = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 150px;
  font-style: normal;
  font-weight: 900;
  z-index: 1000;
  text-align: left;
  color: white;
  width: 100%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

const InspireTitleMobileUI = styled.div`
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

const LoadingUI = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;

  top: 0;
  left: 0;
  z-index: 10000;
  overflow: hidden;
  transition: 1s ease;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 800px) {
    display: none;
  }
`;

const LoadingContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0vh;
  left: 0;
`;

const LoadingGradientUI = styled.div`
  position: absolute;
  width: 300vw;
  height: 300vh;
  left: -100vw;
  top: 0vh;
  border-radius: 100%;
  background: #c1d42f;
  -webkit-filter: blur(50px);
  display: flex;
  transition: 1s ease;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
`;
const LoadingGradientTwoUI = styled.div`
  position: absolute;
  width: 200vw;
  height: 200vh;

  top: -100vh;
  border-radius: 100%;
  background: #e01583;
  -webkit-filter: blur(50px);
  display: flex;
  animation: rotate 4s ease infinite;
  transition: 1s ease;

  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;

  @media (max-width: 1100px) {
    width: 150vw;
    height: 250vh;
  }
`;

const LoadingGradientThreeUI = styled.div`
  position: absolute;
  width: 200vw;
  height: 200vh;
  border-radius: 100%;
  background: #00b188;
  top: -100vh;
  left: -100vw;
  -webkit-filter: blur(50px);
  display: flex;
  animation: rotate 4s ease infinite;
  transition: 1s ease;

  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;

  @media (max-width: 1100px) {
    width: 150vw;
    height: 150vh;
  }
`;

const IconContainerUI = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1000px) {
    justify-content: flex-start;
  }
`;

const IconUI = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #252525;
  text-decoration: none;

  border: 4px solid #252525;
  border-radius: 15px;
  font-weight: bold;
  margin: 0 0 0 12px;

  &:hover {
    color: white;
    background: #252525;
  }
`;

function App(props) {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);

  console.log(props.location);

  useEffect(() => {
    setTimeout(() => {
      setWindowWidth(document.body.clientWidth);
    }, 100);
  }, []);

  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    const videos = JSON.parse(sessionStorage.getItem("videos"));

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
          setAllPosts(
            data.sort((a, b) => (a.title < b.title ? -1 : 1))
          );
          sessionStorage.setItem("videos", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    const news = JSON.parse(sessionStorage.getItem("news"));

    if (news) {
    } else {
      sanityClient
        .fetch(
          `*[_type == "post"]{
            title,
            body,
            publishedAt,
            categories,
            mainImage{
              asset->{
                _id, 
                url
              },
              alt
            },
            author,
            slug,
    
            
        }`
        )
        .then((data) => {
          sessionStorage.setItem("news", JSON.stringify(data));
        })
        .catch(console.error);
    }
  }, []);

  const [isAnimate, setIsAnimate] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [imagesloaded, setImagesLoaded] = useState(0);

  const { width } = useWindowDimensions();

  if (imagesloaded > 2) {
    setTimeout(() => {
      setIsAnimate(false);
    }, 500);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    if (width < 800) {
      setIsAnimate(false);
      setIsLoading(false);
    }
  }, []);

  return (
    <Router >
      <Suspense fallback={<div></div>}>
        <Header width={width}  />

        <ScrollToTop />
        <Switch>
          <Route exact path="/">

            <div className="container">

              <LoadingUI style={{ display: isLoading ? "flex" : "none" }}>
                <LoadingContainerUI>
                  <LoadingGradientUI
                    style={{ top: isAnimate ? "-100vh" : "300vh" }}
                  />
                  <LoadingGradientTwoUI
                    style={{ left: isAnimate ? "0vw" : "300vw" }}
                  />
                  <LoadingGradientThreeUI
                    style={{ left: isAnimate ? "-100vw" : "-300vw" }}
                  />
                </LoadingContainerUI>
              </LoadingUI>
              <SectionUI
                style={{
                  margin: "200px 0 200px 0 ",
                  alignItems: "flex-start",
                  
                }}
              >
                <LeftColumn>
                <SubTitleUI style={{fontWeight: '700'}}>
                    Welcome students and alumni!
                  </SubTitleUI>
                  <TitleUI>
                    The Career <br></br> Development <br></br>+ Work Integrated{" "}
                    <br></br>
                    Learning Office
                  </TitleUI>
                  <SubTitleUI>
                    Connects students and alumni with local, national and
                    international employers in the creative industries and
                    beyond.
                  </SubTitleUI>

           

                  <div
                    style={{
                      display: "flex",
                      margin: "20px 0 0 0",
                      alignItems: "flex-start",
                    }}
                  >
                    <Link
                      to="/about"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <ButtonUI>Learn More</ButtonUI>
                    </Link>

                    <IconUI
                      href="https://www.instagram.com/ecucareerswil/"
                      target="_blank"
                    >
                      <Instagram />
                    </IconUI>

                    <IconUI
                      href="https://twitter.com/emilycarrcareer?lang=en"
                      target="_blank"
                    >
                      <Twitter />
                    </IconUI>

                    <IconUI
                      href="https://www.tiktok.com/@ecucareerswil?lang=en&is_copy_url=1&is_from_webapp=v1"
                      target="_blank"
                    >

                      <SiTiktok style={{fontSize: '20px'}}/>
                      
                    </IconUI>
                  </div>
                </LeftColumn>
                <RightColumn>
                  <ImageGrid >
                    <ImageUI
                      alt="Design student looking down writing in a notebook in an office setting."
                      style={{ width: "100%", gridColumn: "2 / span 8" }}
                      src={heroOne}
                      onLoad={() => setImagesLoaded(imagesloaded + 1)}
                    />

                    <ImageUI
                      alt="Fine arts student sitting and painting on a large canvas in a studio space."
                      style={{ width: "100%", gridColumn: "2 / span 3" }}
                      src={heroTwo}
                      onLoad={() => setImagesLoaded(imagesloaded + 1)}
                    />

                    <ImageUI
                      alt="Media student applying film to a box light."
                      style={{ width: "100%", gridColumn: "6 / span 4" }}
                      src={heroThree}
                      onLoad={() => setImagesLoaded(imagesloaded + 1)}
                    />
                  </ImageGrid>
                </RightColumn>
              </SectionUI>

              <SectionUI
                className="section"
                style={{
                  margin: "0vh 0 200px 0 ",
                  alignItems: "flex-start",
                }}
              >
                <NavGrid />
              </SectionUI>

              <SectionUI
                className="section"
                style={{
                  margin: "00px 0 0 0 ",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <GradientUI></GradientUI>
                <GradientMobileUI></GradientMobileUI>
                <GradientUI
                  style={{ left: "0", top: "0", width: "40vw" }}
                ></GradientUI>
                <GradientUI
                  style={{ right: "0", bottom: "0", width: "60vw" }}
                ></GradientUI>
                <InspireTitleUI>GET</InspireTitleUI>

                <InspireTitleMobileUI>GET INSPIRED</InspireTitleMobileUI>
                <InspireGrid allPostsData={allPostsData} />
                <InspireTitleUI style={{ textAlign: "right" }}>
                  INSPIRED
                </InspireTitleUI>
              </SectionUI>

              <Footer />

              </div>
        
          </Route>


          <Route path="/tools" component={Tools} />
          <Route path="/career-pathways" component={CareerPathways} />
          <Route path="/skill-identifier" component={SkillIdentifierTool} />
          <Route path="/resume-builder" component={ResumeBuilder} />
          <Route path="/resources" component={Resources} />
          <Route path="/news" component={News} exact />
          <Route path="/news/:slug" component={Post} />

          <Route path="/about" component={About} />
          <Route path="/stories" component={Stories} />

          <Route path="/employers" component={Employers} />
          <Route path="/students" component={Students} />
          <Route path="/alumni" component={Alumni} />
        </Switch>

    
      </Suspense>
    </Router>
  );
}

export default App;
