import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";
import { SkillCompass } from "./SkillCompass";
import { SkillBar } from "./SkillBar";
import { SkillSearch } from "./SkillSearchBar";
import { InfoCard } from './InfoCard'
import { SkillSelect } from './SkillSelect'
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './SkillPdf'

const ContainerUI = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`;

const GridUI = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-row: auto;
  width: 80vw;
  margin: 0 0 20vh 0;
  @media (max-width: 1500px) {
    grid-template-columns: 2fr 2fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 2fr;
  }
`;

const ScrollMessageUI = styled.div`
position: absolute;
top: 90vh;
right: 12.5vw;
color: white;
`

export const SkillIdentifier = ({ allPostsData }) => {
  const [showPost, setShowPost] = useState(false);
  const [showRelated, setShowRelated] = useState(false);

  const [bachelor, setBachelor] = useState("");
  const [major, setMajor] = useState("");
  const [skill, setSkill] = useState("");

  const [skillList, setSkillList] = useState([]);

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

/*   useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
 */
  const handleInnerClick = (e) => {
    setShowPost(true);
   /*  setFilterCategory(e.target.innerHTML); */
  };

  const handleMiddleClick = (e) => {
    setShowPost(true);
    setFilterProgram(e.target.innerHTML);
  };

  const [filterProgram, setFilterProgram] = useState("2d-animation");
  const [filterSkill, setFilterSkill] = useState("soft-skill");
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true);
  }, []);

  return (
    <>
      <ContainerUI>
        <SkillSearch
          allPostsData={allPostsData}
          skillList={skillList}
          setSkillList={setSkillList}
        />

       <InfoCard/>
        <SkillCompass
          major={major}
          setMajor={setMajor}
          bachelor={bachelor}
          setBachelor={setBachelor}
          skill={skill}
          setSkill={setSkill}
          handleInnerClick={handleInnerClick}
          handleMiddleClick={handleMiddleClick}
          skillList={skillList}
        />
                <SkillSelect
          major={major}
          setMajor={setMajor}
          bachelor={bachelor}
          setBachelor={setBachelor}
          skill={skill}
          setSkill={setSkill}
          handleInnerClick={handleInnerClick}
          handleMiddleClick={handleMiddleClick}
          skillList={skillList}
        />

        <GridUI skillList={skillList}>
          {!pageLoad
            ? ""
            : allPostsData
                .filter(function (allSkills) {
                  if (allSkills.program.includes("all")) {
                    return allSkills;
                  } else {
                    return allSkills.program.includes(major);
                  }
                })
                .filter(function (allSkills) {
                  if (allSkills.category.includes("all")) {
                    return allSkills;
                  } else {
                    return allSkills.category.includes(skill);
                  }
                })
                /*     .filter(function (allSkills) {
      for( var i = 0; i < major.length; i++){
      return allSkills.program == major[i];
      }
    })
    .filter(function (allSkills) {
      return allSkills.category == skill;
    }) */
                .map((data) => {
                  return (
                    <Skill
                      key={data.title}
                      setSkillList={setSkillList}
                      skillList={skillList}
                      data={data}
                      allPostsData={allPostsData}
                      setShowRelated={setShowRelated}
                      setShowPost={setShowPost}
                    ></Skill>
                  );
                })}
        </GridUI>
        <SkillBar
          skillList={skillList}
          setSkillList={setSkillList}
          scrollTop={scrollTop}
          skill={skill}
        />

        { skill.length > 0 ? <ScrollMessageUI>Scroll down to see skills</ScrollMessageUI> : ''}
      </ContainerUI>

{/*       <PDFDownloadLink style={{position: 'fixed', top: '10px'}} document={<MyDocument skillList={skillList} />} fileName="somename.pdf">export</PDFDownloadLink>
 */}    </>
  );
};

export default SkillIdentifier;
