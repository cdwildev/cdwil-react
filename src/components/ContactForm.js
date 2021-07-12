import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus } from "react-feather";
import { DropdownButton } from "./DropdownButton";
import JotformEmbed from "react-jotform-embed";

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
  background: #ffffff;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 50px 0;

  display: flex;
  justify-content: center;
  text-align: left;
  font-weight: 900;
  font-size: 48px;

  background: linear-gradient(113.03deg, #e01583 31.82%, #1c878c 71.61%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: center;
  width: 100%;

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
  position: relative;
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
  height: 50vh;

  display: flex;
  justify-content: center;
  background: white;
  align-items: center;
  overflow-y: scroll;
  border-radius: 10px;
  margin: 100px 0 100px 0;
  border: 4px solid #252525;
  box-sizing: border-box;
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

export const ContactForm = ({
  gradient = "linear-gradient(0deg, #252525, #252525);",
}) => {
  const [active, setActive] = useState(false);

  return (
    <ContainerUI style={{ display: "flex", flexDirection: "column" }}>
      <ButtonUI onClick={() => setActive(!active)}>
        Book an Appointment
      </ButtonUI>

      <IframeSectionUI
        style={{
          opacity: active ? "100%" : "0%",
          height: active ? "100vh" : "0px",
        }}
      >
        <JotformEmbed src="https://form.jotform.com/211880701828255" />
      </IframeSectionUI>
    </ContainerUI>
  );
};

export default ContactForm;
