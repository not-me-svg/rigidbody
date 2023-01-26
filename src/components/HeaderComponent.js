import React from 'react';
import styled from 'styled-components';

const StickyNav = styled('div')(() => ({
  position: "fixed",
  left: "0",
  top: "24px",
  right: "0",
  bottom: "auto",
  zIndex: "9999",
  padding: "16px 24px",
  fontFamily: "Inter, sans-serif",
}));

const NavGrid = styled('div')(() => ({
  maxWidth: "1200px",
  margin: "0 auto"
}));

const NavLeft = styled('div')(() => ({
  display: "flex",
  justifyContent: "center",
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
  fontSize: "14px",
  textDecoration: "none",
  textTransform: "uppercase"
}));

export const HeaderComponent = () => {
  return (
    <StickyNav>
      <NavGrid>
        <NavLeft>
          <NavLink href="/">Home</NavLink>
          <NavLink href="about">About</NavLink>
          <NavLink href="work">Work</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLeft>
      </NavGrid>
    </StickyNav>
  )
}
