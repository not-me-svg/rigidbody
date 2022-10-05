import React from 'react'
import styled from 'styled-components';

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

const LogoLink = styled('a')(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  color: "#c7c7c7",
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: "400",
  textDecoration: "none",
}));

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
  return (
    <StickyNav>
      <NavGrid>
        <LogoLink href="">rigid.body</LogoLink>

        <NavLeft>
          <NavLink href="">About</NavLink>
          <NavLink href="">Work</NavLink>
          <NavLink href="">Contact</NavLink>
        </NavLeft>
      </NavGrid>
    </StickyNav>
  )
}
