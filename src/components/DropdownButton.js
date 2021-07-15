import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ChevronUp, ChevronDown, X, Plus, Minus } from "react-feather";

const DropdownUI = styled.div`
 
  box-sizing: border-box;
  border-radius: 25px;
  width: 100%;
  min-height: 120px;
  margin: 0 0 16px 0;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  flex-direction: column;
  font-size: 32px;
  @media (max-width: 1200px) {
    width: 90vw;
    font-size: 22px;
  }

  cursor: pointer;
  text-align: left;
`;

const ButtonUI = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-family: Noto Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

const LinkUI = styled.a`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-decoration: none;
  color: #252525;
  &:hover {
    color: #00b188;
  }
`;

const LinkContainerUI = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #252525;
  padding: 30px 0;
  flex-direction: column;
  text-decoration: none;
  color: #252525;
  &:hover {
    color: #00b188;
  }
`;

const DescriptionUI = styled.a`
  width: 100%;

  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  margin: 10px 0 0 0;
  color: #252525;
`;

const SpaceUI = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #252525;
  text-decoration: none;
  color: #252525;
  cursor: auto;
`;

export const DropdownButton = ({ text, data, background="#00B188" , backgroundActive="white" , border="4px solid #252525", borderActive="4px solid #252525", color="#252525", colorActive="#252525"  }) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setActive(!active);
    setHover(!hover);
  };

  const handleHover = () => {
    if (!active) {
      setHover(true);
    } else {
      setHover(false);
    }
  };

  const handleUnhover = () => {
    if (active) {
      setHover(false);
    } else {
      setHover(false);
    }
  };
  console.log(data);

  return (
    <>
      <DropdownUI
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        style={{ background: hover ? background : active ? backgroundActive : 'transparent', border: active || hover ? borderActive : border, color: active || hover ? colorActive : color }}
      >
        <ButtonUI onClick={handleClick}>
          <div style={{ width: "auto", position: "relative" }}>
            <div
              style={{
                display: active ? 'flex' : 'none',
                width: "100%",
                background: "red",
                height: "10px",
                background: "#C1D42F",
                opacity: "0.5",
                filter: "blur(5px)",
                position: "absolute",
                bottom: "0px",
                zIndex: "0",
              }}
            ></div>

            {text}
          </div>{" "}
          {active ? <Minus></Minus> : <Plus></Plus>}{" "}
        </ButtonUI>

        {active ? (
          <ContentUI>
            {data.map((resource) => (
              <LinkContainerUI>
                {resource.title && (
                  <LinkUI target="_blank" href={resource.link}>
                    {resource.title}
                  </LinkUI>
                )}

                {resource.description && (
                  <DescriptionUI>{resource.description}</DescriptionUI>
                )}
              </LinkContainerUI>
            ))}
            <SpaceUI style={{ borderBottom: "none" }}></SpaceUI>
          </ContentUI>
        ) : (
          ""
        )}
      </DropdownUI>
    </>
  );
};

export default DropdownButton;
