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
  min-width: 150px;
  min-height: 150px;
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
  cursor: pointer;
  position: relative;
  padding: 10px;
  word-break: break-word; 
  


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

const LineUI = styled.div`

@media (max-width: 500px) {
  display: none;
  
}
`;

export const BubbleRelated = ({
  showPost,
  setShowPost,
  data,
  title,
  setShowRelated,
  showRelated,
  skillList, 
  setSkillList,
  lineRotate = 'rotate(0deg)',

  lineHeight ='150px',
  linePosition = '50%',
  lineTop='-150px'
  , softSkillList, hardSkillList, softwareList, setSoftSkillList, setSoftwareList, setHardSkillList, allPostsData

}) => {
  const [addSkill, setAddSkill] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleSkillClick = (e) => {


    let item = allPostsData.filter(obj => {return obj.title == title})



    
    if (!addSkill){
    setAddSkill(!addSkill);
    setSkillList([...skillList, title])


    if(item.length > 0){
    if (item[0].category[0] == 'software'){
      setSoftwareList([...softwareList, item[0].title])
    } else if (item[0].category[0] == 'soft-skill'){
      setSoftSkillList([...softSkillList, item[0].title])
    } else if (item[0].category[0] == 'hard-skill'){
      setHardSkillList([...hardSkillList, item[0].title])
    }
  }


    

    } else{
      setAddSkill(!addSkill);
    setSkillList(skillList.filter(skill => skill !== title))

    
    if(item.length > 0){
      if (item[0].category[0] == 'software'){
        setSoftwareList(softwareList.filter((skill) => skill !== item[0].title))
      } else if (item[0].category[0] == 'soft-skill'){
        setSoftSkillList(softSkillList.filter((skill) => skill !== item[0].title))
      } else if (item[0].category[0] == 'hard-skill'){
        setHardSkillList(hardSkillList.filter((skill) => skill !== item[0].title))
      }
    }
    }



 
    
  };


  
  useEffect(() => {
    if(skillList.includes(title)){
      setAddSkill(true);
      setBgColor('white')
      setTextColor('#005695')
    } else {
      setAddSkill(false);
      setBgColor('transparent')
      setTextColor('white')
    }
  },[skillList])


  return (
    <>
    <BubbleUI
    
      style={{ background: bgColor, color: textColor }}
      onClick={handleSkillClick}
    >
    {title}
    <LineUI style={{ transition: '0.9s ease-in' , width: '1px', height: lineHeight, position: 'absolute', transform: lineRotate, borderRight: '1px solid white', top: lineTop, left:linePosition}}></LineUI>

    </BubbleUI>
    
    </>
  );
};


export default BubbleRelated