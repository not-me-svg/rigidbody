import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled('div')(() => ({
  opacity: "1",
  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  transformStyle: "preserve-3d",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gridColumnGap: "25px",
  position: "relative",
  zIndex: "0",

  '& h3': {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "70px",
    lineHeight: "1",
    fontWeight: "500",
    textTransform: "uppercase",
    fontFamily: "Clash Grotesk, sans-serif",
  },
}))

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

export const SectionTitleComponent = ({ text }) => {
  return (
    <SectionTitle>
      <StartIcon className="_2"/>
      <h3>{ text }</h3>
    </SectionTitle>
  )
}
