import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus } from "react-feather";
import { DropdownButton } from './DropdownButton'

const ContainerUI = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  font-size: 30px;
  @media (max-width: 1000px) {
    width: 90vw;
    font-size: 16px;
  }
`;

const DropdownUI = styled.div`
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 25px;
  width: 100%;
  height: 120px;
  margin: 0 0 16px 0;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
 

  cursor: pointer;
  text-align: left;

  &:hover{
    background: #00B188;
    
  }

`;

export const Dropdown = ({}) => {

  const [active, setActive] = useState(false)

  return (
    <ContainerUI>
      <DropdownButton text = "Portfolio and Professional Practise"/>
      <DropdownButton text = "CVs/Resumes, Cover Letters and Artist Statements"/>
      <DropdownButton text = "Applications, Proposals and Grant Writing"/>
      <DropdownButton text = "Entrepreneurship, Small Businesses and Collectives"/>
    </ContainerUI>
  );
};

export default Dropdown;
