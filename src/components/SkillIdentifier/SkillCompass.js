import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Point } from './Point'

const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }

`;

const OuterRingUI = styled.div`
  width: 30vw;
  height: 30vw;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  align-items: center;
  transition: 1s ease;
  z-index:100;
`;

const MiddleRingUI = styled.div`
  position: absolute;
  width: 25vw;
  height: 25vw;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  border-radius: 100%;
  align-items: center;
  transition: 1s ease;
  z-index:200;
`;

const InnerRingUI = styled.div`
  width: 20vw;
  height: 20vw;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  align-items: center;
  transition: 1s ease;
  z-index:300;
`;

const TagUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
left: 25px;
bottom: 25px;
opacity: 0%;
  
`;

const TextContainerUI = styled.div`
  width: 20vw;
  height: 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
 color: white;
  
`;

const TextUI = styled.div`
margin: 20px 0;
  
`;

const PointUI = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  
`;

export const SkillCompass = ({ handleInnerClick, handleMiddleClick, bachelor, setBachelor, major, setMajor, skill, setSkill, skillList }) => {


const [majorSelected, setMajorSelected] = useState(false);
const [hoverOuter, setHoverOuter] = useState(false);
const [hoverMiddle, setHoverMiddle] = useState(false);
const [hoverInner, setHoverInner] = useState(false);

useEffect(() => {
major.length > 0 ? setMajorSelected(true) : setMajorSelected(false)
}, [major])
  
  return (
    <ContainerUI>
      <OuterRingUI style={{transform: bachelor === 'fine-arts' ? "rotate(120deg)" : bachelor === 'media-arts' ? "rotate(-120deg)" : "rotate(0deg)"}}>
        <Point id="design" ring="outer" type={bachelor} hover={hoverOuter} setHover={setHoverOuter} setType={setBachelor} transform={"rotate(0deg) translateY(-15vw)"} rotateTag={bachelor === 'fine-arts' ? 'rotate(-120deg)' : bachelor === 'media-arts' ? 'rotate(120deg)' :'rotate(0deg)'}/>
        <Point id="media-arts" ring="outer" type={bachelor} hover={hoverOuter} setHover={setHoverOuter} setType={setBachelor} transform={"rotate(120deg) translateY(-15vw)"} rotateTag={bachelor === 'fine-arts' ? 'rotate(120deg)' : bachelor === 'media-arts' ? 'rotate(0deg)' :'rotate(-120deg)'}/>
        <Point id="fine-arts" ring="outer" type={bachelor} hover={hoverOuter} setHover={setHoverOuter} setType={setBachelor} transform={"rotate(-120deg) translateY(-15vw)"} rotateTag={bachelor === 'fine-arts' ? 'rotate(0deg)' : bachelor === 'media-arts' ? 'rotate(-120deg)' :'rotate(120deg)'}/>
     </OuterRingUI>
      <MiddleRingUI style={{display: bachelor === 'design' ? 'flex' : 'none', transform: major === 'communication-design' ? "rotate(120deg)" : major === 'industrial-design' ? "rotate(-120deg)" : "rotate(0deg)"}}>
        
        <Point id="interaction-design" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(0deg) translateY(-12.5vw)"} rotateTag={major === 'interaction-design' ? 'rotate(0deg)' : major === 'industrial-design' ? 'rotate(120deg)' : major === 'communication-design' ? 'rotate(-120deg)' : 'rotate(0deg)'}/>
        <Point id="industrial-design" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(120deg) translateY(-12.5vw)"} rotateTag={major === 'interaction-design' ? 'rotate(-120deg)' : major === 'industrial-design' ? 'rotate(0deg)' : major === 'communication-design' ? 'rotate(120deg)' : 'rotate(-120deg)'}/>
        <Point id="communication-design" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(-120deg) translateY(-12.5vw)"} rotateTag={major === 'interaction-design' ? 'rotate(120deg)' : major === 'industrial-design' ? 'rotate(-120deg)' : major === 'communication-design' ? 'rotate(0deg)' : 'rotate(120deg)'}/>
      </MiddleRingUI>
      <MiddleRingUI style={{display: bachelor === 'media-arts' ? 'flex' : 'none', transform: major === '2d-animation' ? "rotate(-90deg)" : major === '3d-animation' ? "rotate(-180deg)" : major === 'film-and-screen-art' ? "rotate(-270deg)" : major === 'film-and-screen-art' ? 'rotate(120deg)' :  "rotate(0deg)"}}>

        <Point id="fmsa" ring="middle" type={major} hover={hoverMiddle} setHover={setHoverMiddle} setType={setMajor} transform={"rotate(0deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(0deg)' : major === '2d-animation' ? 'rotate(90deg)' : major === '3d-animation' ? 'rotate(180deg)' : major === 'film-and-screen-art' ? 'rotate(-90deg)' :  'rotate(0deg)'}/>
        <Point id="2d-animation" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(90deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(-90deg)' : major === '2d-animation' ? 'rotate(0deg)' : major === '3d-animation' ? 'rotate(90deg)' : major === 'film-and-screen-art' ? 'rotate(180deg)' :  'rotate(-90deg)'}/>
        <Point id="3d-animation" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(180deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(180deg)' : major === '2d-animation' ? 'rotate(-90deg)' : major === '3d-animation' ? 'rotate(0deg)' : major === 'film-and-screen-art' ? 'rotate(90deg)' :  'rotate(180deg)'}/>
        <Point id="film-and-screen-art" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(270deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(90deg)' : major === '2d-animation' ? 'rotate(180deg)' : major === '3d-animation' ? 'rotate(-90deg)' : major === 'film-and-screen-art' ? 'rotate(0deg)' : 'rotate(-270deg)'}/>
      </MiddleRingUI>
      <MiddleRingUI style={{display: bachelor === 'fine-arts' ? 'flex' : 'none', transform: major === 'illustration' ? "rotate(-90deg)" : major === 'visual-arts' ? "rotate(-180deg)" : major === 'crcp' ? "rotate(-270deg)" : "rotate(0deg)"}}>
        
        <Point id="photogrpahy" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(0deg) translateY(-12.5vw)"} rotateTag={major === 'photogrpahy' ? 'rotate(0deg)' : major === 'illustration' ? 'rotate(90deg)' : major === 'visual-arts' ? 'rotate(180deg)' : major === 'crcp' ? 'rotate(-90deg)' : 'rotate(0deg)'}/>
        <Point id="illustration" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(90deg) translateY(-12.5vw)"} rotateTag={major === 'photogrpahy' ? 'rotate(-90deg)' : major === 'illustration' ? 'rotate(0deg)' : major === 'visual-arts' ? 'rotate(90deg)' : major === 'crcp' ? 'rotate(180deg)' : 'rotate(-90deg)'}/>
        <Point id="visual-arts" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(180deg) translateY(-12.5vw)"} rotateTag={major === 'photogrpahy' ? 'rotate(180deg)' : major === 'illustration' ? 'rotate(-90deg)' : major === 'visual-arts' ? 'rotate(0deg)' : major === 'crcp' ? 'rotate(90deg)' : 'rotate(180deg)'}/>
        <Point id="crcp" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(270deg) translateY(-12.5vw)"} rotateTag={major === 'photogrpahy' ? 'rotate(90deg)' : major === 'illustration' ? 'rotate(180deg)' : major === 'visual-arts' ? 'rotate(-90deg)' : major === 'crcp' ? 'rotate(0deg)' : 'rotate(90deg)'}/>
      </MiddleRingUI>
      <InnerRingUI style={{display: majorSelected ? 'flex' : 'none', transform: skill === 'hard-skill' ? "rotate(-120deg)" : skill === 'software' ? "rotate(120deg)" : "rotate(0deg)"}}>
        <Point id="soft-skill" ring="inner" hover={hoverInner} setHover={setHoverInner} type={skill} setType={setSkill} transform={"rotate(0deg) translateY(-10vw)"} rotateTag={skill === 'soft-skill' ? 'rotate(0deg)' : skill === 'software' ? 'rotate(-120deg)' : skill === 'hard-skill' ? 'rotate(120deg)' : 'rotate(0deg)'}/>
        <Point id="hard-skill" ring="inner" hover={hoverInner} setHover={setHoverInner} type={skill} setType={setSkill} transform={"rotate(120deg) translateY(-10vw)"} rotateTag={skill === 'soft-skill' ? 'rotate(-120deg)' : skill === 'software' ? 'rotate(120deg)' : skill === 'hard-skill' ? 'rotate(0deg)' : 'rotate(-120deg)'}/>
        <Point id="software" ring="inner" hover={hoverInner} setHover={setHoverInner} type={skill} setType={setSkill} transform={"rotate(-120deg) translateY(-10vw)"} rotateTag={skill === 'soft-skill' ? 'rotate(120deg)' : skill === 'software' ? 'rotate(0deg)' : skill === 'hard-skill' ? 'rotate(-120deg)' : 'rotate(120deg)'}/>
      </InnerRingUI>

      <TextContainerUI bachelor={bachelor}>
          <TextUI>{bachelor.length > 0 ? bachelor.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : 'Select Your Bachelor'}</TextUI>
          <TextUI style={{display: bachelor.length > 0 ? 'flex' : 'none' }}>{major.length > 0 ? major.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : 'Select your Major'}</TextUI>
          <TextUI style={{display: major.length > 0 ? 'flex' : 'none' }}>{skill.length > 0 ? skill.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : 'Select a Skill'}</TextUI>
      </TextContainerUI>
    </ContainerUI>
  );
};


export default SkillCompass