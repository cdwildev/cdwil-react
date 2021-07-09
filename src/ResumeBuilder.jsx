import { useEffect, useState } from "react";
import {SkillIdentifier} from './components/SkillIdentifier/SkillIdentifier';
import sanityClient from './client';
import styled from "styled-components";
import skillIdentifierImage from '../src/images/resume-builder.svg'

const SectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContainerUI = styled.div`
  width: 75vw;
  min-height: 100vh;
  display: flex;
  padding: 200px 0 0 0;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const TitleUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 120px;
  text-align: left;
  margin: 0 0 35px 0;
  width: 600px;

  @media (max-width: 1200px) {
    font-size: 10vw;
  }
`;

const BodyTextUI = styled.div`
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 0 50px 0;
  width: 600px;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

const DetailTextUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 0em;
  text-align: left;
`;

const LineBreakUI = styled.div`
  border-bottom: 2px solid white;
  width: 200px;
  margin: 128px 0;
`;

const InfoUI = styled.div`
  width: 60%;
  min-height: 100vh;

  justify-content: flex-start;
  color: white;
`;

const ImageUI = styled.div`
  width: 40%;
  min-height: 100vh;

  @media (max-width: 1200px) {
    display: none;
  }
`;


const FormSectionUI = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;

const IframeSectionUI = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
background: white;
align-items: center;

`;


const IframeContainerUI = styled.div`
position: relative;
height: 10vh;
width: 100vw;
display: flex;
justify-content: center;
background: white;
align-items: center;

`;



export default function SkillIdentifierTool() {
  const [allPostsData, setAllPosts] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="container"
      style={{
        overflow: "hidden",
        background:
          "radial-gradient(183.17% 165.84% at 50% 0%, #E01583 0%, #1C4061 79.69%, #1C4061 90.62%)",
      }}
    >
      <SectionUI>
        <ContainerUI>
          <InfoUI>
            <TitleUI>Resume Builder</TitleUI>

            <BodyTextUI>
            A master resume is a document that lists all of your work experience, training and achievements. While a targeted resume should only be 1 to 2 pages, your master resume can be much longer. An artist resume is a document presenting an artist’s background, skills, and accomplishments. It differs from a standard resume as it contains a list of artistic achievements and is therefore much more detailed and way longer.
<br></br><br></br>
            This tool will help you build a master resume listing all your creative and/or artistic achievements.

            </BodyTextUI>

 
          </InfoUI>

          <ImageUI>
            <img src={skillIdentifierImage} />
          </ImageUI>
        </ContainerUI>
      </SectionUI>
{/*       <button  data-popup-button="1" prefill-inherit data-paperform-id="resume-builder" /> */}

<IframeSectionUI>
<iframe frameborder="0" height="100%" width="100%" src="https://resume-builder.paperform.co/" ></iframe>
{/* <div style={{width: '100vw', height: '1000px', position: 'absolute'}}  data-takeover="1" data-paperform-id="resume-builder"></div> */}
</IframeSectionUI>


{/* <iframe frameborder="0" height="100%" width="100%" src="https://resume-builder.paperform.co/" ></iframe> */}

{/* <div style={{width: '100vw', height: '1000px'}} data-paperform-id="resume-builder"></div> */}

    </div>
  );
}
