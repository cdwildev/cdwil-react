import { useEffect, useState } from "react";

import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/resume-builder.svg";
import JotformEmbed from "react-jotform-embed";

import DropdownButton from "./components/DropdownButton";
import puzzleOne from "../src/images/resume-1.svg";
import puzzleTwo from "../src/images/resume-2.svg";
import puzzleThree from "../src/images/resume-3.svg";
import resumeInterview from "../src/images/resume-interview.svg";

import ReactPlayer from "react-player";

import actionWords from "./pdf/action-words.pdf";
import coverLetters from "./pdf/cover-letters.pdf";
import interviewBasics from "./pdf/interview-basics.pdf";
import resumes from "./pdf/resumes.pdf";
import resumes101 from "./pdf/resumes-101.pdf";
import Footer from "./components/Footer";
import Instruction from "./components/Instruction";

const ContainerUI = styled.div`
  width: 75vw;
  position: relative;
  display: flex;

  @media (max-width: 1400px) {
    width: 90vw;
  }
`;

const RowUI = styled.div`
  justify-content: space-between;
  flex-wrap: wrap;
  width: 75vw;

  display: flex;
  @media (max-width: 1400px) {
    width: 90vw;
  }

  @media (max-width: 1000px) {
    align-items: center;
    flex-direction: column;
  }
`;

const TitleUI = styled.div`
  font-family: "Noto Sans JP", sans-serif;
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
  color: white;
  width: 600px;

  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

const InfoUI = styled.div`
  width: 60%;

  justify-content: flex-start;
  color: white;
`;

const HeadingUI = styled.div`
  font-family: "Noto Sans JP", sans-serif;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;

  /* or 89% */
  margin: 50px 0;
  width: 100%;
  color: white;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }
`;

const ImageUI = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const ResumeTypeUI = styled.div`
  color: #252525;
  width: 100%;
  background: white;
  padding: 50px;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  font-size: 20px;
`;

const GridUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(2, auto);
  grid-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridTwoUI = styled.div`
  display: grid;

  text-align: left;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImageContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Noto Sans;
  font-style: italic;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  width: 300px;
  color: white;
  margin: 50px 0;
`;

const TileUI = styled.a`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  border: 4px solid white;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 0 50px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    background: white;
    color: #252525;
    border: 4px solid #252525;
  }

  @media (max-width: 1200px) {
    font-size: 22px;
    line-height: 20px;
    width: 100%;
  }
`;

const IframeSectionUI = styled.div`
  position: relative;
  height: 100vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  background: white;
  align-items: center;
  overflow-y: scroll;
  border-radius: 10px;
  margin: 0 0 100px 0;
`;

export default function SkillIdentifierTool() {
  const [allPostsData, setAllPosts] = useState([]);

  const [resumeTypes, setResumeTypes] = useState("");

  const [resourceData, setResourceData] = useState([]);

  useEffect(() => {
    const resources = JSON.parse(sessionStorage.getItem("resources"));

    if (resources) {
      setResourceData(resources);
    } else {
      sanityClient
        .fetch(
          `*[_type == "resources"]{
          title,
          description,
          category,
          pdf,
          "pdfURL": pdf.asset->url,
          
          link,
      }`
        )
        .then((data) => {
          setResourceData(data);
          sessionStorage.setItem("resources", JSON.stringify(data));
        })
        .catch(console.error);
    }
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
      <ContainerUI
        style={{
          margin: "200px 0 0 0",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <InfoUI>
          <TitleUI>Resume Builder</TitleUI>

          <BodyTextUI style={{ margin: "50px 0 0 0" }}>
            Learn about resume basics as you build a master resume documenting
            your creative background, skills, and artistic achievements. This
            resume will be much more detailed and way longer than your typical
            resume. Use this tool to build a resume you will use as a reference
            when you later create tailored resumes for specific job
            applications.
          </BodyTextUI>

        
        </InfoUI>
        

        <ImageUI>
          <img
            alt="Black, white and grey illustration of a student in a black shirt holding a magnifying glass while looking at a long unfolding list. A paper airplane flies off the top righthand corner. A few sheets of paper and a crumpled paper ball is in the bottom lefthand corner."
            src={skillIdentifierImage}
          />
        </ImageUI>
      </ContainerUI>

      

      <RowUI
        style={{
          margin: "100px 0 0 0",
        }}
      >
        <ImageContainerUI>
          <img
            src={puzzleOne}
            alt="Illustration in black of a long unfolding resume next to an illustration of stars, ribbons and a certificate."
          />
          A master resume is a document that lists all of your work experience,
          training and achievements.
        </ImageContainerUI>

        <ImageContainerUI>
          <img
            src={puzzleTwo}
            alt="Illustration in black of a long unfolding resume next to a much shorter one page resume."
          />
          The resume you submit to employers should only be 1 to 2 pages, but
          your master resume can be much longer.
        </ImageContainerUI>

        <ImageContainerUI>
          <img
            src={puzzleThree}
            alt="Illustration in black of an opened closet or wardrobe containing clothes on hangers and folded on shelves. A pair of pants and a black t-shirt is floating in the top right hand corner slightly above the closet/wardrobe with tiny stars and dots all around."
          />
          Think of your master resume as a closet and the resumes you send out
          to employers as the outfits created from your closet.
        </ImageContainerUI>
      </RowUI>

      <ContainerUI
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "100px 0 100px 0",
        }}
      >
        <BodyTextUI
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "0 0 25px 0",
          }}
        >
          Resources
        </BodyTextUI>

        <GridUI style={{ margin: "0px 0 10px 0" }}>
          <TileUI target="_blank" href={actionWords + "?dl="}>
            Action Words
          </TileUI>

          <TileUI target="_blank" href={interviewBasics + "?dl="}>
            Interview Basics
          </TileUI>

          <TileUI target="_blank" href={coverLetters + "?dl="}>
            How to Write a Cover Letter
          </TileUI>

          <TileUI target="_blank" href={resumes + "?dl="}>
            How to Write a Resume/CV
          </TileUI>
        </GridUI>

        <DropdownButton
          color="white"
          colorActive="#252525"
          border="4px solid white"
          borderActive="4px solid #252525"
          background="white"
          data={resourceData.filter((resource) =>
            resource.category.includes("resume-builder")
          )}
          text="Helpful Links"
        />
      </ContainerUI>

      <ContainerUI
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "100px 0 100px 0",
        }}
      >
        <BodyTextUI
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "0 0 25px 0",
          }}
        >
          Resumes 101 | Video Presentation
        </BodyTextUI>

        <ReactPlayer
          width="100%"
          height="100%"
          style={{
            borderRadius: "10px",
            boxSizing: "border-box",
            position: "relative",
          }}
          light={false}
          controls={true}
          url="https://emilycarr.s3.us-east-2.amazonaws.com/resumes-101.mp4"
        />

        <TileUI
          style={{ width: "100%", margin: "10px 0 0 0" }}
          target="_blank"
          href={resumes101 + "?dl="}
        >
          Resumes 101 Presentation Slides
        </TileUI>
      </ContainerUI>

      <ContainerUI
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          margin: "100px 0 100px 0",
        }}
      >
        <BodyTextUI
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            margin: "0 0 25px 0",
          }}
        >
          Resume Types | Click to learn about each
        </BodyTextUI>

        <GridTwoUI
          style={{
            margin: "0px 0 10px 0",
          }}
        >
          <TileUI onClick={() => setResumeTypes("professional")}>
            PROFESSIONAL
          </TileUI>

          <TileUI onClick={() => setResumeTypes("artist-cv")}>ARTIST CV</TileUI>

          <TileUI onClick={() => setResumeTypes("artist-bio")}>
            ARTIST BIOGRAPHY
          </TileUI>

          <TileUI onClick={() => setResumeTypes("teaching-cv")}>
            TEACHING CV
          </TileUI>
        </GridTwoUI>

        <ResumeTypeUI
          style={{
            display: resumeTypes === "" ? "none" : "flex",
            margin: "0px 0 10px 0",
          }}
        >
          {resumeTypes === "professional" ? (
            <div>
              <span style={{ fontWeight: 900 }}>
                For: Employment and Internship search
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Length: </span>
              <span>1-2 pages, recommended 1 page if still in school</span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Format </span>
              <span>
                {" "}
                Start at the top with your name and contact information in a
                larger type face. Choose fonts and sizing wisely, as this will
                become your brand that carries from your resume to your cover
                letter and artist statement. Stick to fonts that are clean, and
                not distracting or hard to read.
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Includes: </span>
              <span>
                Name and Contact Information, Education, Professional Experience
                with job description and duties, Skills, Exhibitions (optional),
                Awards, Honors, etc. Each section below your name should be
                listed in reverse chronological order, with the most recent
                experience first. The professional resume is designed to
                highlight skills and work experience, so it is more descriptive
                than an artist resume for galleries.
              </span>{" "}
              <br />
              <br />
            </div>
          ) : resumeTypes === "artist-cv" ? (
            <div>
              <span style={{ fontWeight: 900 }}>
                For: Galleries and Competitions
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Length: </span>
              <span>
                1-2 pages, depending on stage of career and content.
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Format </span>
              <span>
                {" "}
                Follows the format of the Professional Resume, but not as
                descriptive.
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Includes: </span>
              <span>
                Name and Contact Information, Education, Exhibitions (Solo,
                Group), Performances, Bibliography (Articles or Reviews about
                you), Publications/Reviews by Artist, Collections, Awards,
                Commissions, Residencies, Fellowships, Grants, Competitions,
                Lectures, Exhibitions Curated, Affiliations, Memberships,
                Independent/Volunteer Activities, Experience (only art related
                with minimal descriptions). Similar to Teaching CV, but shorter.
              </span>{" "}
              <br />
              <br />
            </div>
          ) : resumeTypes === "artist-bio" ? (
            <div>
              <span style={{ fontWeight: 900 }}>Length: </span>
              <span>1-2 pages, recommended 1 page if still in school</span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Includes: </span>
              <span>
                Name and Contact Information, Education, Professional Experience
                with job description and duties, Skills, Exhibitions (optional),
                Awards, Honors, etc. Each section below your name should be
                listed in reverse chronological order, with the most recent
                experience first. The professional resume is designed to
                highlight skills and work experience, so it is more descriptive
                than an artist resume for galleries.
              </span>{" "}
              <br />
              <br />
            </div>
          ) : resumeTypes === "teaching-cv" ? (
            <div>
              <span style={{ fontWeight: 900 }}>
                The Latin name for resume, Curriculum Vitae.
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>
                For: used most often in academic contexts.
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Length: </span>
              <span>
                Usually longer than a resume, short versions 2-3 pages, long
                versions for advanced professionals may be 4 or more pages
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Format </span>
              <span>
                {" "}
                Follows the format of the Professional Resume, but not as
                descriptive.
              </span>{" "}
              <br />
              <br />
              <span style={{ fontWeight: 900 }}>Includes: </span>
              <span>
                Name and Contact Information, Education, Teaching Experience,
                Related Experience, Skills, Exhibitions (Solo, Group),
                Performances, Bibliography (Articles or Reviews about you),
                Publications/Reviews by Artist, Collections, Awards,
                Commissions, Residencies, Fellowships, Grants, Competitions,
                Lectures, Exhibitions Curated, Affiliations, Memberships,
                Independent/Volunteer Projects.
              </span>{" "}
              <br />
              <br />
            </div>
          ) : (
            ""
          )}
        </ResumeTypeUI>

        <DropdownButton
          color="white"
          colorActive="#252525"
          border="4px solid white"
          borderActive="4px solid #252525"
          background="white"
          data={resourceData.filter((resource) =>
            resource.category.includes("resume-examples")
          )}
          text="Resume Examples"
        />
      </ContainerUI>

      <ContainerUI
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "0 0 100px 0",
        }}
      >
        <HeadingUI>And Remember: A resume doesn't get you the job</HeadingUI>
        <img
          style={{ width: "50%" }}
          src={resumeInterview}
          alt="Black, white and grey illustration of two people. The person on the left is illustrated in white and is smiling while holding a resume out to the person on the right who is illustrated in grey with a black hair and a bun, while also smiling."
        />
        <HeadingUI>It gets you an interview!</HeadingUI>
      </ContainerUI>
      

      {/*       <button  data-popup-button="1" prefill-inherit data-paperform-id="resume-builder" /> */}
      <IframeSectionUI>
        <JotformEmbed src="https://form.jotform.com/211809145619054" />
      </IframeSectionUI>

      {/* <iframe frameborder="0" height="100%" width="100%" src="https://resume-builder.paperform.co/" ></iframe> */}

      {/* <div style={{width: '100vw', height: '1000px'}} data-paperform-id="resume-builder"></div> */}
      <Footer />
    </div>
  );
}
