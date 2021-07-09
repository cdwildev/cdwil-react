import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BubbleUI = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  color: #005695;
  background: transparent;
  border: 1px solid white;
  margin: 12px;
  animation: float 3s linear infinite;
  transition: 0.5s ease;
  padding: 25px;
  cursor: pointer;
  
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
`;



const GridUI = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-columns: auto;
`;

export const Bubble = ({
  allPostsData,
  showPost,
  setShowPost,
  data,
  title,
  setShowRelated,
  showRelated,
  skillList,
  setSkillList,
  setSkillCategories,
  skillCategories,
  category, softSkillList, hardSkillList, softwareList, setSoftSkillList, setSoftwareList, setHardSkillList
  
}) => {
  const [addSkill, setAddSkill] = useState(false);
  const [bgColor, setBgColor] = useState("transparent")
  const [textColor, setTextColor] = useState("white")

  const handleSkillClick = (e) => {
    setShowRelated(!showRelated);

 let item = allPostsData.filter(obj => {return obj.title === e.target.innerHTML})[0]

    if (!addSkill) {
      setAddSkill(true);
      setSkillList([...skillList, e.target.innerHTML]);


 
      if (item.category[0] == 'software'){
        setSoftwareList([...softwareList, item.title])
      } else if (item.category[0] == 'soft-skill'){
        setSoftSkillList([...softSkillList, item.title])
      } else if (item.category[0] == 'hard-skill'){
        setHardSkillList([...hardSkillList, item.title])
      }

      
      
  
     
    
    } else if (skillList.includes(data)) {
      setAddSkill(false);
      setSkillList(skillList.filter((skill) => skill !== e.target.innerHTML));

      if (item.category[0] == 'software'){
        setSoftwareList(softwareList.filter((skill) => skill !== item.title))
      } else if (item.category[0] == 'soft-skill'){
        setSoftSkillList(softSkillList.filter((skill) => skill !== item.title))
      } else if (item.category[0] == 'hard-skill'){
        setHardSkillList(hardSkillList.filter((skill) => skill !== item.title))
      }
      
     

      
    }


 
     
  };


  useEffect(() => {
    if(skillList.includes(data)){
      setAddSkill(true);
      setBgColor('white')
      setTextColor("#005695")

    } else {
      setAddSkill(false);
      setBgColor('transparent')
      setTextColor("white")
      
    }
  },[skillList])



  return (
    <BubbleUI
      style={{
        background: bgColor,
        color: textColor
      }}
      onClick={handleSkillClick}
    >
    {data}
    </BubbleUI>
  );
};

export default Bubble;
