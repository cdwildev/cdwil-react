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
background: #FFFFFF;
border: 5px solid #252525;
box-sizing: border-box;
border-radius: 25px;
width: 1300px;
height: 248px;
display: flex;
justify-content: flex-start;
padding: 0 0 0 111px;
align-items: center;
background: linear-gradient(92.92deg, #5E366E 23.05%, #FE2B9E 70.77%),
linear-gradient(0deg, #252525, #252525);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-overflow: ellipsis;
white-space: nowrap;
cursor: pointer;
text-align: left;
font-family: Noto Sans;
font-style: normal;
font-weight: 800;
font-size: 55px;
line-height: 48px;

  &:hover{
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    
    color: white;
  }


`;

const FormUI = styled.div`
background: #FFFFFF;
border: 5px solid #252525;
box-sizing: border-box;
border-radius: 25px;
width: 1300px;
height: 832px;
display: flex;
justify-content: flex-start;
padding: 75px 0 0 111px;
align-items: flex-start;
background: linear-gradient(92.92deg, #5E366E 23.05%, #FE2B9E 70.77%),
linear-gradient(0deg, #252525, #252525);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-overflow: ellipsis;
white-space: nowrap;
text-align: left;
font-family: Noto Sans;
font-style: normal;
font-weight: 800;
font-size: 55px;
line-height: 48px;
`;



export const ContactForm = ({}) => {

  const [active, setActive] = useState(false)

  return (
    <ContainerUI>
        {!active ? <DropdownUI onClick={() => {setActive(true)}}>
            Book an Appointment
        </DropdownUI> : (
        <FormUI onClick={() => {setActive(false)}}>
            Book an Appointment
        </FormUI>
        )}
    </ContainerUI>
  );
};

export default ContactForm;
