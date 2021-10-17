import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Point } from './Point'
import { ChevronUp, ChevronDown, X, ArrowDown , ArrowUp, Download} from 'react-feather';

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
 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  flex-direction: column;
  color: white;
  left: 15vw;

 
  
`;

const TextUI = styled.div`
margin: 20px 0;
font-weight: 900;

width: 200px;
height: 25px;
text-align:center;
display: flex;
justify-content: center;
align-items: center;
transition: 0.5s ease;
`;

const PointContainerUI = styled.div`
  width: 25px;
  height: 25px;
  display: flex;

  justify-content: center;
  position: absolute;
  border-radius: 100%;
  left: -2.5vw;
  border-radius: 10%;

`;

const PointUI = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  position: absolute;
  border-radius: 100%;

  border-radius: 10%;
  transform: rotate(45deg)
`;

const ScrollMessageUI = styled.div`



color: white;
display: flex;
align-items: center;
justify-content: space-between;
width: 225px;
animation: up 2s ease infinite;
position: absolute;

transition: 0.5s ease;
top: 250px;
left: -2.5vw;




`

const LineUI = styled.div`
position: absolute;
border-left: 1px solid ;
height: 200px;
transition: 1s ease;


`

export const SkillCompass = ({ handleInnerClick, handleMiddleClick, bachelor, setBachelor, major, setMajor, skill, setSkill, skillList }) => {

const [allSelected, setAllSelected] = useState(false);
const [bachelorSelected, setBachelorSelected] = useState(false);
const [majorSelected, setMajorSelected] = useState(false);
const [hoverOuter, setHoverOuter] = useState(false);
const [hoverMiddle, setHoverMiddle] = useState(false);
const [hoverInner, setHoverInner] = useState(false);

useEffect(() => {
bachelor.length > 0 ? setBachelorSelected(true) : setBachelorSelected(false)
}, [bachelor])

useEffect(() => {
  major.length > 0 ? setMajorSelected(true) : setMajorSelected(false)
  }, [major])

useEffect(() => {
  skill.length > 0 ? setAllSelected(true) : setAllSelected(false)
  }, [skill])
  
  return (
    <ContainerUI>
      <OuterRingUI style={{transform: bachelor === 'fine-arts' ? "rotate(120deg)" : bachelor === 'media-arts' ? "rotate(-120deg)" : "rotate(0deg)", opacity:  bachelorSelected && !allSelected ? '50%' : bachelorSelected && allSelected ? '100%' :  '100%'}}>
        <Point id="design" ring="outer" type={bachelor} hover={hoverOuter} setHover={setHoverOuter} setType={setBachelor} transform={"rotate(0deg) translateY(-15vw)"} rotateTag={bachelor === 'fine-arts' ? 'rotate(-120deg)' : bachelor === 'media-arts' ? 'rotate(120deg)' :'rotate(0deg)'}/>
        <Point id="media-arts" ring="outer" type={bachelor} hover={hoverOuter} setHover={setHoverOuter} setType={setBachelor} transform={"rotate(120deg) translateY(-15vw)"} rotateTag={bachelor === 'fine-arts' ? 'rotate(120deg)' : bachelor === 'media-arts' ? 'rotate(0deg)' :'rotate(-120deg)'}/>
        <Point id="fine-arts" ring="outer" type={bachelor} hover={hoverOuter} setHover={setHoverOuter} setType={setBachelor} transform={"rotate(-120deg) translateY(-15vw)"} rotateTag={bachelor === 'fine-arts' ? 'rotate(0deg)' : bachelor === 'media-arts' ? 'rotate(-120deg)' :'rotate(120deg)'}/>
     </OuterRingUI>
      <MiddleRingUI style={{display: bachelor === 'design' ? 'flex' : 'none', transform: major === 'communication-design' ? "rotate(120deg)" : major === 'industrial-design' ? "rotate(-120deg)" : "rotate(0deg)", opacity:  majorSelected && !allSelected ? '50%' : majorSelected && allSelected ? '100%' :  '100%'}}>
        
        <Point id="interaction-design" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(0deg) translateY(-12.5vw)"} rotateTag={major === 'interaction-design' ? 'rotate(0deg)' : major === 'industrial-design' ? 'rotate(120deg)' : major === 'communication-design' ? 'rotate(-120deg)' : 'rotate(0deg)'}/>
        <Point id="industrial-design" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(120deg) translateY(-12.5vw)"} rotateTag={major === 'interaction-design' ? 'rotate(-120deg)' : major === 'industrial-design' ? 'rotate(0deg)' : major === 'communication-design' ? 'rotate(120deg)' : 'rotate(-120deg)'}/>
        <Point id="communication-design" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(-120deg) translateY(-12.5vw)"} rotateTag={major === 'interaction-design' ? 'rotate(120deg)' : major === 'industrial-design' ? 'rotate(-120deg)' : major === 'communication-design' ? 'rotate(0deg)' : 'rotate(120deg)'}/>
      </MiddleRingUI>
      <MiddleRingUI style={{opacity:  majorSelected && !allSelected ? '50%' : majorSelected && allSelected ? '100%' :  '100%', display: bachelor === 'media-arts' ? 'flex' : 'none', transform: major === '2d-animation' ? "rotate(-90deg)" : major === '3d-animation' ? "rotate(-180deg)" : major === 'film-and-screen-art' ? "rotate(-270deg)" : major === 'film-and-screen-art' ? 'rotate(120deg)' :  "rotate(0deg)"}}>

        <Point id="fmsa" ring="middle" type={major} hover={hoverMiddle} setHover={setHoverMiddle} setType={setMajor} transform={"rotate(0deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(0deg)' : major === '2d-animation' ? 'rotate(90deg)' : major === '3d-animation' ? 'rotate(180deg)' : major === 'film-and-screen-art' ? 'rotate(-90deg)' :  'rotate(0deg)'}/>
        <Point id="2d-animation" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(90deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(-90deg)' : major === '2d-animation' ? 'rotate(0deg)' : major === '3d-animation' ? 'rotate(90deg)' : major === 'film-and-screen-art' ? 'rotate(180deg)' :  'rotate(-90deg)'}/>
        <Point id="3d-animation" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(180deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(180deg)' : major === '2d-animation' ? 'rotate(-90deg)' : major === '3d-animation' ? 'rotate(0deg)' : major === 'film-and-screen-art' ? 'rotate(90deg)' :  'rotate(180deg)'}/>
        <Point id="film-and-screen-art" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(270deg) translateY(-12.5vw)"} rotateTag={major === 'fmsa' ? 'rotate(90deg)' : major === '2d-animation' ? 'rotate(180deg)' : major === '3d-animation' ? 'rotate(-90deg)' : major === 'film-and-screen-art' ? 'rotate(0deg)' : 'rotate(-270deg)'}/>
      </MiddleRingUI>
      <MiddleRingUI style={{opacity:  majorSelected && !allSelected ? '50%' : majorSelected && allSelected ? '100%' :  '100%', display: bachelor === 'fine-arts' ? 'flex' : 'none', transform: major === 'illustration' ? "rotate(-90deg)" : major === 'visual-arts' ? "rotate(-180deg)" : major === 'crcp' ? "rotate(-270deg)" : "rotate(0deg)"}}>
        
        <Point id="photography" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(0deg) translateY(-12.5vw)"} rotateTag={major === 'photography' ? 'rotate(0deg)' : major === 'illustration' ? 'rotate(90deg)' : major === 'visual-arts' ? 'rotate(180deg)' : major === 'crcp' ? 'rotate(-90deg)' : 'rotate(0deg)'}/>
        <Point id="illustration" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(90deg) translateY(-12.5vw)"} rotateTag={major === 'photography' ? 'rotate(-90deg)' : major === 'illustration' ? 'rotate(0deg)' : major === 'visual-arts' ? 'rotate(90deg)' : major === 'crcp' ? 'rotate(180deg)' : 'rotate(-90deg)'}/>
        <Point id="visual-arts" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(180deg) translateY(-12.5vw)"} rotateTag={major === 'photography' ? 'rotate(180deg)' : major === 'illustration' ? 'rotate(-90deg)' : major === 'visual-arts' ? 'rotate(0deg)' : major === 'crcp' ? 'rotate(90deg)' : 'rotate(180deg)'}/>
        <Point id="crcp" ring="middle" hover={hoverMiddle} setHover={setHoverMiddle} type={major} setType={setMajor} transform={"rotate(270deg) translateY(-12.5vw)"} rotateTag={major === 'photography' ? 'rotate(90deg)' : major === 'illustration' ? 'rotate(180deg)' : major === 'visual-arts' ? 'rotate(-90deg)' : major === 'crcp' ? 'rotate(0deg)' : 'rotate(90deg)'}/>
      </MiddleRingUI>
      <InnerRingUI style={{opacity:  majorSelected && !allSelected ? '100%' : majorSelected && allSelected ? '100%' :  '100%', display: majorSelected ? 'flex' : 'none', transform: skill === 'hard-skill' ? "rotate(-120deg)" : skill === 'software' ? "rotate(120deg)" : "rotate(0deg)"}}>
        <Point id="soft-skill" ring="inner" hover={hoverInner} setHover={setHoverInner} type={skill} setType={setSkill} transform={"rotate(0deg) translateY(-10vw)"} rotateTag={skill === 'soft-skill' ? 'rotate(0deg)' : skill === 'software' ? 'rotate(-120deg)' : skill === 'hard-skill' ? 'rotate(120deg)' : 'rotate(0deg)'}/>
        <Point id="hard-skill" ring="inner" hover={hoverInner} setHover={setHoverInner} type={skill} setType={setSkill} transform={"rotate(120deg) translateY(-10vw)"} rotateTag={skill === 'soft-skill' ? 'rotate(-120deg)' : skill === 'software' ? 'rotate(120deg)' : skill === 'hard-skill' ? 'rotate(0deg)' : 'rotate(-120deg)'}/>
        <Point id="software" ring="inner" hover={hoverInner} setHover={setHoverInner} type={skill} setType={setSkill} transform={"rotate(-120deg) translateY(-10vw)"} rotateTag={skill === 'soft-skill' ? 'rotate(120deg)' : skill === 'software' ? 'rotate(0deg)' : skill === 'hard-skill' ? 'rotate(-120deg)' : 'rotate(120deg)'}/>
      </InnerRingUI>

      <TextContainerUI bachelor={bachelor}>
      
          <TextUI> <PointContainerUI> <PointUI style={{background: bachelor.length > 0 ? 'white' : 'transparent'}}> </PointUI><LineUI style={{height: skill.length > 0 ? '150px' : '0px' }}></LineUI></PointContainerUI> {bachelor.length > 0 ? bachelor.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : <div>{"1. Select Your "}<span style={{color: '#00B188'}}>Degree</span></div>}</TextUI>
          <TextUI style={{opacity: bachelor.length > 0 ? '100%' : '0' }}> <PointContainerUI><PointUI style={{background: major.length > 0 ? 'white' : 'transparent'}}/> </PointContainerUI>{major == 'film-and-screen-art' ? 'Film + Screen Art' : major == 'fmsa' ? 'New Media + Sound Art' : major == 'crcp' ? 'Critical + Cultural Practise' : major == '2d-animation' ? '2D Animation' : major == '3d-animation' ? '3D Animation' : major.length > 0 ? major.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : <div>{"2. Select Your "}<span style={{color: '#EDE04A'}}>Major</span></div>}</TextUI>
          <TextUI style={{opacity: major.length > 0 ? '100%' : '0' }}> <PointContainerUI> <PointUI style={{background: skill.length > 0 ? 'white' : 'transparent'}}/> </PointContainerUI> {skill == 'hard-skill' ? 'Studio Skills' : skill == 'soft-skill' ? 'Soft Skills' : skill.length > 0 ? skill.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase()) : <div>{"3. Select a "}<span style={{color: '#E01583'}}>Skillset</span></div>}</TextUI>
          <ScrollMessageUI style={{opacity: skill.length > 0 ? '100%' : '0' }}>  <ArrowDown/> Scroll down to see skills </ScrollMessageUI> 
          
      </TextContainerUI>
    </ContainerUI>
  );
};


export default SkillCompass