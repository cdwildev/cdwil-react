import { useEffect, useState, useRef } from "react";
import React from "react";
import styled from "styled-components";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  ReactPDF,
} from "@react-pdf/renderer";

import "./styles.css";

import Loader from "../../images/career-pathway-loader.svg";
import MobileSelectionTab from "./MobileSelectionTab";

import { ChevronUp, ChevronDown, X, ArrowDown, ArrowUp } from "react-feather";
import { FilterCircle } from "./FilterCircle";
import { FilterSquare } from "./FilterSquare";
import { FilterSemiCircle } from "./FilterSemiCircle";
import { Results } from "./Results";

const ContainerUI = styled.div`
  width: 100vw;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
 min-height: 100vh;
`;

const SelectionGridUI = styled.div`
  width: 90vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 50;

margin: 0 0 20vh 0;
  cursor: pointer;

`;

const SelectionUI = styled.div`


  font-family: Noto Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  background: #FFFFFF;
  border-radius: 10px;
  color: #000000;
  min-width: 100px;
  padding: 10px;
  margin: 10px;
`;

const TitleUI = styled.div`


  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;

  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  z-index: 1000;
  
`;


const InstructionUI = styled.div`
  width: 80%;
  font-size: 16px;
  font-weight: 800;
`;

const InstructionTopUI = styled.div`
  width: 60%;
  font-size: 16px;
  font-weight: 100;
  top: 5vw;
  margin: 48px;
  color: white;
  font-weight: 800;

`;


const industries = [
  { title: "Advertising + Marketing", value: "advertising" },
  { title: "Amusement + Recreation ", value: "amusement" },
  { title: "Animation + VFX", value: "animation" },
  { title: "Architecture", value: "architecture" },
  { title: "Arts + Culture", value: "arts" },
  { title: "Craft + Antiques", value: "craft" },
  { title: "Education + Research", value: "education" },
  { title: "Fashion + Textiles", value: "fashion" },
  { title: "Film / Photo / TV / Video / Radio", value: "film" },
  { title: "Food", value: "food" },
  { title: "Gaming + Interactive Media", value: "gaming" },
  { title: "Government + Civic + Social Services", value: "government" },
  { title: "Healthcare", value: "healthcare" },
  { title: "Manufacturing + Engineering", value: "manufacturing" },
  { title: "Museums + Galleries", value: "museums" },
  { title: "Performing Arts", value: "performing-arts" },
  { title: "Music", value: "music" },
  { title: "Publishing + Print", value: "publishing" },
  { title: "Technology", value: "technology" },
  /*   { title: 'All', value: 'all' }, */
];

export const MobileSelection = ({ selectedIndustries, setSelectedIndustries, selectedSkills, setSelectedSkills, selectedValues, setSelectedValues, screen , industries, skills, values}) => {

  const pool = useRef(null);

  return (
    <>
    { screen < 4 ? 
      (<ContainerUI>
          <TitleUI>{screen == 1 ? 'Select Industries' : screen == 2 ? 'Select Skills / Interests' : screen == 3 ? 'Select Workplace Values' : ''}</TitleUI>

          {screen == 1 ? (
                <>
                  <InstructionTopUI>
                    Which industries are you curious or passionate about? Where
                    can you see yourself working? <br></br>
                    <br></br> Select up to 3
                  </InstructionTopUI>
                </>
              ) : screen == 2 ? (
                <>
                  <InstructionTopUI>
                  What are you really good at or interested in getting better at? <br></br>
                    <br></br> Select up to 10
                  </InstructionTopUI>
                </>
              ) : screen == 3 ? (
                <>
                  <InstructionTopUI>
                  Values reflect who we are and indicate what is most important to us. <br></br>
                    <br></br> Select up to 5 values that resonate with you for the workplace.
                  </InstructionTopUI>
                </>
              ) : (
                ""
              )}


        <SelectionGridUI style={{display: screen == 1 ? 'flex' : 'none'}}>
            {industries.map(el => <MobileSelectionTab el={el} addTo={selectedIndustries} setAddTo={setSelectedIndustries}></MobileSelectionTab>)}
        </SelectionGridUI>
        <SelectionGridUI style={{display: screen == 2 ? 'flex' : 'none'}}>
            {skills.map(el => <MobileSelectionTab el={el} addTo={selectedSkills} setAddTo={setSelectedSkills}></MobileSelectionTab>)}
        </SelectionGridUI>
        <SelectionGridUI style={{display: screen == 3 ? 'flex' : 'none'}}>
            {values.map(el => <MobileSelectionTab el={el} addTo={selectedValues} setAddTo={setSelectedValues}></MobileSelectionTab>)}
        </SelectionGridUI>

      </ContainerUI>) : ''
}
    </>
  );
};

export default MobileSelection;
