import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus } from "react-feather";
import { DropdownButton } from "./DropdownButton";
import JotformEmbed from "react-jotform-embed";
import useWindowDimensions from "../helpers/Window";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 75vw;
  @media (max-width: 1400px) {
    width: 90vw;
    font-size: 5vw;
    justify-content: center;
  }
`;

const ButtonUI = styled.button`

  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 50px 0;

  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 48px;
  background: linear-gradient(261.02deg, #21B592 28.1%, #005695 91.98%), #FFFFFF;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: center;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  animation: gradient 5s ease infinite;
  z-index: 1000;

  animation: gradient 5s ease infinite;
  z-index: 1000;

  cursor: pointer;
  &:hover {
    -webkit-background-clip: unset;
    -webkit-text-fill-color: unset;

    color: white;
  }

  @media (max-width: 1000px) {
    font-size: 5vw;
  }
`;

const PopupUI = styled.div`
  position: fixed;
  height: 100vh;

  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  z-index: 100000;
  flex-direction: column;
  color: white;
`;

const IframeSectionUI = styled.div`
  position: relative;
  height: 70vh;

  display: flex;
  justify-content: center;
  background: white;
  align-items: center;
  overflow-y: scroll;
  border-radius: 10px;
  width: 75vw;
  @media (max-width: 1400px) {
    width: 90vw;
  }
`;
const BackgroundUI = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 50%;
  position: absolute;
  cursor: pointer;
`;

export const ContactFormTwo = ({
  gradient = "linear-gradient(0deg, #252525, #252525);",
}) => {

  const { height, width } = useWindowDimensions();
  const [active, setActive] = useState(false);

  return (
<>
      <ButtonUI onClick={() => setActive(!active)}>
        Book an Appointment
      </ButtonUI>
<PopupUI style={{
  visibility: active ? "visible" : "hidden",

}}>

  <BackgroundUI onClick={() => setActive(!active)}></BackgroundUI>
<IframeSectionUI

>
<JotformEmbed src="https://form.jotform.com/211880701828255" />
</IframeSectionUI>
<X onClick={() => setActive(!active)} style={{position:'absolute', right: '0', top: '5vw'}}></X>

</PopupUI>
</>

  );
};

export default ContactFormTwo;
