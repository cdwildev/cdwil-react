import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OuterRingUI = styled.div`
  width: 40vw;
  height: 40vw;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  align-items: center;
  transition: 1s ease;
`;

const MiddleRingUI = styled.div`
  position: absolute;
  width: 35vw;
  height: 35vw;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  border-radius: 100%;
  align-items: center;
`;

const InnerRingUI = styled.div`
  width: 30vw;
  height: 30vw;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  align-items: center;
`;

const TagUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 150px;

  opacity: 100%;
  color: white;
  transition-delay: 0.5s;
  
`;

const TextUI = styled.div`
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const PointContainerUI = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  z-index: 1500;
`;

const PointUI = styled.div`
  width: 1.5vw;
  height: 1.5vw;
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  transform: rotate(45deg);
  background: white;
  cursor: pointer;
`;

const PointCircleUI = styled.div`
  width: 2.5vw;
  height: 2.5vw;
  display: flex;
  border: 1px solid white;
  justify-content: center;
  position: absolute;
  border-radius: 100%;
  transition: 0.5s ease;
`;

export const Point = ({
  handleInnerClick,
  handleMiddleClick,
  bachelor,
  ring,
  type,
  setType,
  setSkillType,
  hover,
  setHover,
  transform = "rotate(0deg) translateY(-20vw)",
  id,
  rotateTag,
}) => {
  const [pointHover, setPointHover] = useState(false);

  const handleMouseEnter = (e) => {
    setPointHover(true);
    setHover(true);
  };

  const handleMouseLeave = (e) => {
    setPointHover(false);
    setHover(false);
  };

  const handleClick = (e) => {
    setType(id);
  };

  return (
    <PointContainerUI
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transform: transform }}
    >
{/*       <div
        style={{
          transition: "0.5s ease-in",
          width: type == id ? "2.5vw" : "0vw",
          position: "absolute",
          transform: "rotate(90deg)",
          borderBottom: "1px solid white",
          top: "2.5vw",
          height: "0px",
        }}
      ></div> */}

      <PointUI
        style={{
          borderRadius: type == id ? "10%" : "100%",
          background:
            hover && ring == "outer" || type == id && ring == "outer" 
              ? "#00B188"
              : hover && ring == "middle" || type == id && ring == "middle" 
              ? "#EDE04A" 
              : hover && ring == "inner" || type == id && ring == "inner" 
              ? "#E01583"
              : "white",
        }}
      ></PointUI>
      {/* <PointCircleUI style={{opacity: pointHover ? '100%' : '0', }}></PointCircleUI> */}
      <TagUI
        style={{
          transform: rotateTag,
          display: hover ? "flex" : "none",
          top:
            ring == "outer" ? "-3.5vw" : ring == "middle" ? "-6.5vw" : "5vw",
        }}
      >
        {id == 'film-and-screen-art' ? 'Film + Screen Art' : id == 'fmsa' ? 'New Media + Sound Art' : id == 'crcp' ? 'Critical + Cultural Practise' : id.split('-').map(function capitalize(part) {
        return part.charAt(0).toUpperCase() + part.slice(1);
    }).join(' ')}
      </TagUI>
    </PointContainerUI>
    /*         <PointUI onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setBachelor('media-arts')} id="media-arts" style={{ transform: "rotate(120deg) translateY(-20vw)" }}>
        
        </PointUI>
        <PointUI onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setBachelor('fine-arts')} id="fine-arts" style={{ transform: "rotate(240deg) translateY(-20vw)" }}>
        <TagUI style={{transform: bachelor == 'fine-arts' ? "rotate(0deg)" : bachelor == 'media-arts' ? "rotate(-120deg)" : "rotate(120deg)"}}>Fine Arts</TagUI>
        </PointUI> */
  );
};

export default Point;
