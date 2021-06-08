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
  width: 150px;
  height: 150px;
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
  grid-template-columns: suto;
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
  lineRotate = 'rotate(45deg)',
  lineWidth = '150px',
  linePosition = '0px'

}) => {
  const [addSkill, setAddSkill] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleSkillClick = (e) => {
    console.log(e.target);
 
    setAddSkill(!addSkill);
    if (!addSkill){
    setSkillList([...skillList, title])
    } else{
    setSkillList(skillList.filter(skill => skill !== title))
    }
    console.log(skillList);

  };

  const handleRelatedClick = (e) => {
    console.log(e.target);
  };
  
  useEffect(() => {
    if(skillList.includes(title)){
      setBgColor('white')
      setTextColor('#005695')
    } else {
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
    <div style={{ transition: '0.2s ease-in' , width: lineWidth, position: 'absolute', transform: lineRotate, borderBottom: '1px solid white', top: '-55px', left:linePosition, height: '0px'}}></div>

    </BubbleUI>
    
    </>
  );
};


export default BubbleRelated