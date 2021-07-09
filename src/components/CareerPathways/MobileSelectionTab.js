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
  margin: 48px ;
`;

export const MobileSelectionTab = ({ selectedIndustries, setSelectedIndustries, selectedSkills, setSelectedSkills, selectedValues, setSelectedValues, screen , industries, skills, values, el, addTo, setAddTo}) => {

    const [selected, setSelected] = useState(false)

    const handleClick = (x) => {
        setSelected(!selected)


  


        if(!selected){
        setAddTo([...addTo, x])
        } else{
            setAddTo(
                addTo.filter((industries) => industries !== x)
              );
        }

        
        console.log(addTo)
    }

  return (
    <>
<SelectionUI onClick={() => handleClick(el)} style={{background: selected ? '#1D4766' : 'white', color: selected ? 'white' : '#1D4766',}}>{el.title}</SelectionUI>

    </>
  );
};

export default MobileSelectionTab;
