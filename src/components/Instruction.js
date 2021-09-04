import { useEffect, useState } from "react";


import styled from "styled-components";




import resume101 from "../videos/resumes-101.mp4";
import ReactPlayer from "react-player";

import { X } from "react-feather";


const ButtonUI = styled.div`
  width: 75%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
    margin: 75px 0 0 0;
  cursor: pointer;
  color: white;

  &:hover {
    background: white;
    color: #252525;
    border: 4px solid #252525;
  }


  @media (max-width: 1400px){
      width: 90%
  }
`;

const PlayerUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
position: fixed;
top: 0;
left: 0;
z-index: 10000;
background: rgba(0, 0, 0, 1);
`;

export default function Instruction() {
  const [active, setActive] = useState(false);


  return (

    <>


    <ButtonUI onClick={() => setActive(true)}>

Watch Video Instruction
    </ButtonUI>


    <PlayerUI
      className="container"
      style={{
        overflow: "hidden",
        display: active ? 'flex' : 'none',

      }}
    >

<X style={{color: 'white', position: "absolute", top: '5%', right: '2.5%', zIndex: 10000, cursor: 'pointer'}} onClick={() => setActive(false)}/>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{
            borderRadius: "10px",
            boxSizing: "border-box",
            position: "relative",
          }}
          light={false}
          controls={true}
          url={resume101}
          playing={!active ? false : true  }
        />

       
    </PlayerUI>

    </>
  );
}
