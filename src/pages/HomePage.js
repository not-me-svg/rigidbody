import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion, useScroll } from "framer-motion";
import { projects } from './../data';
import { TextRotatorComponent } from '../components/TextRotatorComponent';

// Animations
const scrollWheelAnimation = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: translate3d(0, 20px, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
`;

// Hero
const Hero = styled('div')(() => ({
  position: "relative",
  display: "flex",
  minHeight: "100vh",
  paddingTop: "150px",
  paddingRight: "5%",
  paddingLeft: "5%",
  justifyContent: "center",
  alignItems: "flex-start",
  boxSizing: "border-box",
  fontFamily: "Inter, sans-serif",

  '& .hero-intro-text': {
    position: "relative",
    zIndex: "1",
    maxWidth: "1200px",
    marginRight: "auto",
    marginLeft: "auto",
    flex: "1",
  },

  '& .hero-intro-text p': {
    width: "340px",
    marginBottom: "0px",
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: "400",
    textTransform: "uppercase"
  }
}));

const ScrollDownWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 25px;
  z-index: 10;
  display: flex;
  overflow: hidden;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & .mouse-scroll {
    position: relative;
    left: 0px;
    display: flex;
    width: 19px;
    height: 27px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: flex-start;
    border: 2px solid #c7c7c7;
    border-radius: 9px;
  }
  
  & .mouse-scroll-dot {
    width: 2px;
    height: 3px;
    margin-top: 5px;
    background-color: #c7c7c7;
    animation: ${ scrollWheelAnimation } 2s linear infinite;
    transform-style: preserve-3d;
    will-change: transform;
  }
`;

// Work
const Work = styled('div')(() => ({
  height: "400vh",
  fontFamily: "Clash Grotesk, sans-serif",
}));

const ProjectPreview = styled('div')(() => ({
  display: "flex",
  width: "60%",
  alignItems: "flex-end",
  flex: "0 0 auto",
}))

// Shared styles
const Container = styled('div')(() => ({
  position: "relative",
  zIndex: "1",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  flex: 1,
}));

const Sticky = styled('div')(() => ({
  position: "sticky",
  top: "0px",
  display: "flex",
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
  alignItems: "center",
  boxSizing: "border-box"
}));

const SectionTitle = styled('div')(() => ({
  opacity: 1,
  transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  transformStyle: "preserve-3d",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gridColumnGap: "25px",

  '& h3': {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "70px",
    lineHeight: 1,
    fontWeight: 500,
    textTransform: "uppercase",
    fontFamily: "Clash Grotesk, sans-serif",
  },
}))

export const HomePage = () => {
  const ageDifMs = Date.now() - new Date("1988-06-16");
  const ageDate = new Date(ageDifMs);
  const { scrollXProgress } = useScroll();

  return (
    <>
      <Hero>
        <div className="hero-intro-text">
          <p>
            I am a digital creator & A/V artist with background in linguistics and programming. currently based between Madrid & Stockholm, I have been existing for about { Math.abs(ageDate.getUTCFullYear() - 1970) } years.
          </p>
        </div>

        <TextRotatorComponent />

        <ScrollDownWrapper>
          <a href="#" className="mouse-scroll">
            <div className="mouse-scroll-dot"></div>
          </a>
        </ScrollDownWrapper>
      </Hero>

      {/* TO DO: FINISH THIS MODULE WITH FRAMER MOTION https://teo-template.webflow.io/about */}
      {/* <Work>
        <Sticky>
          <Container>
            <SectionTitle>
              <StartIcon className="_2"/>
              <h3>latest projects</h3>
            </SectionTitle>

            <div style={{ marginTop: 30, paddingLeft: "5%" }}>
              <div style={{ width: "100%" }}>
                <div style={{ display: "flex" }}>
                  {
                    projects.map(project => 
                      <ProjectPreview>
                        <a href="#" style={{ width: "100%" }}>
                          <img src={ project.images.featured.xl } loading="eager" alt="" sizes={ `(max-width: 479px) 90vw, (max-width: 991px) 45vw, 35vw` } srcset={ `${ project.images.featured.s } 500w, ${ project.images.featured.m } 800w, ${ project.images.featured.l } 1080w, ${ project.images.featured.xl } 1500w` } style={{ width: "100%", height: "100%", transform: "translate3d(-0.0024px, -0.0028px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} />
                        </a>
                      </ProjectPreview>
                    )
                  }
                </div>
              </div>
            </div>
          </Container>
        </Sticky>
        <motion.div style={{ scaleX: scrollXProgress }} />
      </Work> */}
    </>
  )
}
