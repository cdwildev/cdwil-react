import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus } from "react-feather";
import { DropdownButton } from './DropdownButton'
import JotformEmbed from 'react-jotform-embed';




const ButtonUI = styled.button`
background: #FFFFFF;
border: 4px solid #252525;
box-sizing: border-box;
border-radius: 25px;
width: 75vw;
min-height: 248px;
display: flex;
justify-content: center;

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
flex-direction: column;

  &:hover{
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;
    
    color: white;
  }


  @media (max-width: 1400px) {
    width: 90vw;
    font-size: 30px;
    padding: 0;
    justify-content: center;
  }


`;

const PopupUI = styled.div`

position: fixed;
height: 100vh;
width:100vw;
top: 0;
display: flex;
justify-content: center;

align-items: center;
border-radius: 10px;
z-index: 100000;
`




const IframeSectionUI = styled.div`
margin: 50px;
position: fixed;
height: 80vh;
width:85vw;
top: 5vh;
display: flex;
justify-content: center;
background: white;
align-items: center;
overflow-y: scroll;
border-radius: 10px;
`
const BackgroundUI = styled.div`
width: 100vw;
height: 100vh;
background: black;
opacity: 50%;
`;

export const ContactForm = ({gradient='linear-gradient(0deg, #252525, #252525);'}) => {

  const [active, setActive] = useState(false)


  return (

<>
<ButtonUI onClick={() => setActive(!active)}>Book an Appointment



</ButtonUI>

<PopupUI style={{visibility: active ? 'visible' : 'hidden'}}>
  <BackgroundUI onClick={() => setActive(!active)}></BackgroundUI>
<IframeSectionUI >
<JotformEmbed src= "https://form.jotform.com/211880701828255"/>
</IframeSectionUI>
</PopupUI>
</>

  );
};

export default ContactForm;
