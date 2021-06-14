import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Bubble } from "./Bubble";
import { BubbleRelated } from './BubbleRelated'

const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RowUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  margin: 5vh 0;
`;


export const Skill = ({ showPost, setShowPost, data, setSkillList, skillList, setSkillCategories, skillCategories, allPostsData, softSkillList, hardSkillList, softwareList, setSoftSkillList, setSoftwareList, setHardSkillList}) => {
  const [showRelated, setShowRelated] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  const handleSkillClick = (e) => {
 
    setShowRelated(!showRelated);
    setAddSkill(!addSkill);
  };

  const handleRelatedClick = (e) => {
  
  };

  const [updateData, setUpdateData] = useState('')
  const [updateSkillList, setUpdateSkillList] = useState('')

  useEffect(() => {
    setUpdateData(data)
    setUpdateSkillList(skillList)

    


  })

  useEffect(() => {
    if(skillList.includes(updateData.title)){
      setShowRelated(true)
      setAddSkill(true)
    } else {
      setShowRelated(false)
      setAddSkill(false)
    }
  },[skillList])

  return (
    <>
      <SkillContainerUI >
        <RowUI>
          <Bubble
            skillList={updateSkillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            data={data.title}
            category={data.category[0]}
            setSkillCategories={setSkillCategories}
            skillCategories={skillCategories}
            allPostsData={allPostsData}
            softwareList={softwareList}
            softSkillList={softSkillList}
            hardSkillList={hardSkillList}
            setSoftSkillList={setSoftSkillList}
            setHardSkillList={setHardSkillList}
            setSoftwareList={setSoftwareList}
            
          />
          
        </RowUI>
        <RowUI style={{ opacity: showRelated ? "100%" : "0%" }}>
          <BubbleRelated
            skillList={skillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            title={ '' }
            lineRotate={'rotate(50deg)'}
            lineTop={'-155px'}
            lineHeight={'185px'}
           
            linePosition={'100%'}
            title={data.related === null ? 'one' : data.related.one}
            category={data.category}
            softwareList={softwareList}
            softSkillList={softSkillList}
            hardSkillList={hardSkillList}
            setSoftSkillList={setSoftSkillList}
            setHardSkillList={setHardSkillList}
            setSoftwareList={setSoftwareList}
            allPostsData={allPostsData}

          />
          <BubbleRelated
            skillList={skillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            title={ '' }
            lineRotate={'rotate(0deg)'}
         
            lineHeight={'120px'}
            lineTop={'-120px'}
            title={data.related === null ? 'two' : data.related.two}
            category={data.category}
            softwareList={softwareList}
            softSkillList={softSkillList}
            hardSkillList={hardSkillList}
            setSoftSkillList={setSoftSkillList}
            setHardSkillList={setHardSkillList}
            setSoftwareList={setSoftwareList}
            allPostsData={allPostsData}
          />
          <BubbleRelated
            skillList={skillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            title={ '' }

            lineRotate={'rotate(130deg)'}
            linePosition={'0%'}
            lineTop={'-155px'}
            lineHeight={'185px'}
            title={data.related === null ? 'three' : data.related.three}
            category={data.category}
            softwareList={softwareList}
            softSkillList={softSkillList}
            hardSkillList={hardSkillList}
            setSoftSkillList={setSoftSkillList}
            setHardSkillList={setHardSkillList}
            setSoftwareList={setSoftwareList}
            allPostsData={allPostsData}
          />
        </RowUI>
      </SkillContainerUI>
    </>
  );
};


export default Skill