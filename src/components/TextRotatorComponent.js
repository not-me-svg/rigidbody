import React from 'react'
import styled, { keyframes } from 'styled-components';

const displaceAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
`;

const TextRotator = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: 150px;
  display: flex;
  overflow: hidden;
  align-items: center;
  font-family: Clash Grotesk, sans-serif;

  & .text-rotator-content {
    display: flex;
    align-items: center;
    animation: ${ displaceAnimation } 16s linear infinite;
    transform-style: preserve-3d;
    will-change: transform;
  }
  
  & h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 10vw;
    line-height: 1.1;
    font-weight: 500;
    letter-spacing: 5px;
    text-transform: uppercase;
    white-space: nowrap;
  }
`;

const StartIcon = styled('div')(() => ({
  width: "60px",
  height: "2px",
  marginRight: "45px",
  marginLeft: "45px",
  flex: "0 0 auto",
  backgroundColor: "#c7c7c7",
  transform: "skew(0deg, -50deg)",

  '&._2': {
    width: "50px",
    marginRight: "0px",
    marginLeft: "0px",
  }
}))

export const TextRotatorComponent = () => {
  return (
    <TextRotator>
      <div className="text-rotator-content">
        <h3>Rigid&nbsp;Body</h3>
        <StartIcon />
        <h3>digital creator & A/V artist</h3>
        <StartIcon />
      </div>

      <div className="text-rotator-content">
        <h3>Rigid&nbsp;Body</h3>
        <StartIcon />
        <h3>digital creator & A/V artist</h3>
        <StartIcon />
      </div>
    </TextRotator>
  )
}
