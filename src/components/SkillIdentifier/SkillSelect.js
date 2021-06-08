import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Point } from './Point'

const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  font-size: 14px;
  color: white;


`;

const SelectionContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;



`

const SelectionUI = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  border: 1px solid white;
  width: 50vw;
  align-items: center;
  justify-content: center;
  height: 25px;
  cursor: pointer;

`

export const SkillSelect = ({ handleInnerClick, handleMiddleClick, bachelor, setBachelor, major, setMajor, skill, setSkill, skillList }) => {
  
  return (
    <ContainerUI>
      <div>Bachelor</div> 
      <SelectionContainerUI>
        <SelectionUI onClick={() => setBachelor('design')} id="design" style={{background: bachelor == 'design' ? 'white' : 'transparent', color : bachelor == 'design' ? '#005695' : 'white' }}>Design</SelectionUI>
        <SelectionUI onClick={() => setBachelor('media-arts')} id="media-arts" style={{background: bachelor == 'media-arts' ? 'white' : 'transparent', color : bachelor == 'media-arts' ? '#005695' : 'white' }}>Media Arts</SelectionUI>
        <SelectionUI onClick={() => setBachelor('fine-arts')} id="fine-arts" style={{background: bachelor == 'fine-arts' ? 'white' : 'transparent', color : bachelor == 'fine-arts' ? '#005695' : 'white' }}>Fine Arts</SelectionUI>
     </SelectionContainerUI>

    <div style={{display: bachelor ? 'flex' : 'none' }}>Major</div> 
      <SelectionContainerUI style={{display: bachelor == 'design' ? 'flex' : 'none' }} >
        
        <SelectionUI id="interaction-design" onClick={() => setMajor('interaction-design')} style={{background: major == 'interaction-design' ? 'white' : 'transparent', color : major == 'interaction-design' ? '#005695' : 'white' }}>Interaction Design</SelectionUI>
        <SelectionUI id="industrial-design" onClick={() => setMajor('industrial-design')} style={{background: major == 'industrial-design' ? 'white' : 'transparent', color : major == 'industrial-design' ? '#005695' : 'white' }}>Industrial Design</SelectionUI>
        <SelectionUI id="communication-design" onClick={() => setMajor('communication-design')} style={{background: major == 'communication-design' ? 'white' : 'transparent', color : major == 'communication-design' ? '#005695' : 'white' }}>Communication Design</SelectionUI>
      </SelectionContainerUI>
      <SelectionContainerUI style={{display: bachelor == 'media-arts' ? 'flex' : 'none' }}>

        <SelectionUI id="fmsa" onClick={() => setMajor('fmsa')} style={{background: major == 'fmsa' ? 'white' : 'transparent', color : major == 'fmsa' ? '#005695' : 'white' }}>FMSA</SelectionUI>
        <SelectionUI id="2d-animation" onClick={() => setMajor('2d-animation')} style={{background: major == '2d-animation' ? 'white' : 'transparent', color : major == '2d-animation' ? '#005695' : 'white' }}>2D Animation</SelectionUI>
        <SelectionUI id="3d-animation" onClick={() => setMajor('3d-animation')} style={{background: major == '3d-animation' ? 'white' : 'transparent', color : major == '3d-animation' ? '#005695' : 'white' }}>3D Animation</SelectionUI>
        <SelectionUI id="film-and-screen-art" onClick={() => setMajor('film-and-screen-art')} style={{background: major == 'film-and-screen-art' ? 'white' : 'transparent', color : major == 'film-and-screen-art' ? '#005695' : 'white' }}>Film and Screen Art</SelectionUI>
      </SelectionContainerUI>

      <SelectionContainerUI style={{display: bachelor == 'fine-arts' ? 'flex' : 'none' }}>
        
        <SelectionUI id="photogrpahy" onClick={() => setMajor('photogrpahy')} style={{background: major == 'photogrpahy' ? 'white' : 'transparent', color : major == 'photogrpahy' ? '#005695' : 'white' }}>Photogrpahy</SelectionUI>
        <SelectionUI id="illustration" onClick={() => setMajor('illustration')} style={{background: major == 'illustration' ? 'white' : 'transparent', color : major == 'illustration' ? '#005695' : 'white' }}>Illustration</SelectionUI>
        <SelectionUI id="visual-arts" onClick={() => setMajor('visual-arts')} style={{background: major == 'visual-arts' ? 'white' : 'transparent', color : major == 'visual-arts' ? '#005695' : 'white' }}>Visual Arts</SelectionUI>
        <SelectionUI id="crcp" onClick={() => setMajor('crcp')} style={{background: major == 'crcp' ? 'white' : 'transparent', color : major == 'crcp' ? '#005695' : 'white' }}>CRCP</SelectionUI>
      </SelectionContainerUI>

      <div style={{display: major ? 'flex' : 'none' }}>Skill</div> 
      <SelectionContainerUI style={{display: major ? 'flex' : 'none' }}>
        
        <SelectionUI id="soft-skill" onClick={() => setSkill('soft-skill')} style={{background: skill == 'soft-skill' ? 'white' : 'transparent', color : skill == 'soft-skill' ? '#005695' : 'white' }}>Soft Skill</SelectionUI>
        <SelectionUI id="hard-skill" onClick={() => setSkill('hard-skill')} style={{background: skill == 'hard-skill' ? 'white' : 'transparent', color : skill == 'hard-skill' ? '#005695' : 'white' }}>Hard Skill</SelectionUI>
        <SelectionUI id="software" onClick={() => setSkill('software')} style={{background: skill == 'software' ? 'white' : 'transparent', color : skill == 'software' ? '#005695' : 'white' }}>Software</SelectionUI>
      </SelectionContainerUI>

    </ContainerUI>
  );
};


export default SkillSelect