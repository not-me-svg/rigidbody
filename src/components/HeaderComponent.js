import React from 'react';
import styled, { keyframes } from 'styled-components';
import useViewport from '../hooks/useViewport';

// Animations
const glitch = keyframes`
  2%, 64% {
    transform: translate(0, 0) skew(0deg);
  }
  4%, 60% {
    transform: translate(0, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg); 
  }
`;

const glitchTop = keyframes`
  2%, 64% {
    transform: translate(2px, -2px);
  }
  4%, 60% {
    transform: translate(-2px, 2px);
  }
  62% {
    transform: translate(13px, -1px) skew(-13deg); 
  }
`;

const glitchBotom = keyframes`
  2%, 64% {
    transform: translate(-2px, 0);
  }
  4%, 60% {
    transform: translate(-2px, 0);
  }
  62% {
    transform: translate(-22px, 5px) skew(21deg); 
  }
`;

const StickyNav = styled('div')(() => ({
  position: "fixed",
  left: "0%",
  top: "0%",
  right: "0%",
  bottom: "auto",
  zIndex: "9999",
  padding: "3% 6%",
  fontFamily: "Inter, sans-serif",
}));

const NavGrid = styled('div')(() => ({
  display: "grid",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  alignItems: "start",
  gridAutoColumns: "1fr",
  gridColumnGap: "30px",
  gridRowGap: "30px",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "auto",
}));

const LogoLink = styled.a`
  color: #c7c7c7;
  font-size: 24px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: none;
  animation: ${ glitch } 1s linear infinite;

  &:before,
  &:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  &:before{
    animation: ${ glitchTop } 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  &:after{
    animation: ${ glitchBotom } 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;

const NavLeft = styled('div')(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start"
}));

const NavLink = styled('a')(() => ({
  position: "relative",
  zIndex: "2",
  display: "flex",
  marginLeft: "15px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  transition: "all 200ms ease",
  color: "#c7c7c7",
  fontWeight: "400",
  textDecoration: "none"
}));

export const HeaderComponent = () => {
  const { width } = useViewport();
  const breakpoint = 680;

  return (
    <StickyNav>
      <NavGrid>
        <LogoLink href="/" title="rigid.body">rigid.body</LogoLink>

        { 
          width > breakpoint &&
          <NavLeft>
            <NavLink href="about">About</NavLink>
            <NavLink href="work">Work</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLeft>
        }
        
      </NavGrid>
    </StickyNav>
  )
}
