import React from 'react'
import styled, { keyframes } from 'styled-components';

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
}));

const IntroText = styled('div')(() => ({
  position: "relative",
  zIndex: "1",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  flex: "1",

  '& p': {
    width: "340px",
    marginBottom: "0px",
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: "400",
    textTransform: "uppercase"
  }
}));

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

const ScrollDownWrapper = styled('div')(() => ({
  position: "absolute",
  left: "0px",
  right: "0px",
  bottom: "25px",
  zIndex: "10",
  display: "flex",
  overflow: "hidden",
  maxWidth: "80%",
  marginRight: "auto",
  marginLeft: "auto",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  '& .mouse-scroll': {
    position: "relative",
    left: "0px",
    display: "flex",
    width: "19px",
    height: "27px",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
    border: "2px solid #c7c7c7",
    borderRadius: "9px",
  }
}));

const Work = styled('div')(() => ({
  // height: "400vh",
  fontFamily: "Clash Grotesk, sans-serif",
}));

const Contact = styled('div')(() => ({
  paddingBottom: "30px",
  position: "relative",
  padding: "100px 5%",
  backgroundColor: "transparent",
  boxSizing: "border-box",

  '& .contact-featured-text': {
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gridColumnGap: "25px",
  },

  '& h3': {
    marginTop: "0px",
    marginBottom: "0px",
    fontSize: "70px",
    lineHeight: 1,
    fontWeight: 500,
    textTransform: "uppercase",
    fontFamily: "Clash Grotesk, sans-serif",
  },

  '& .contact-paragraph': {
    marginTop: "80px"
  },

  '& .contact-paragraph p': {
    opacity: 1,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    width: "270px",
    marginLeft: "auto",
    marginBottom: "0px",
    fontFamily: "Inter, sans-serif",
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: 400,
    textTransform: "uppercase"
  },

  '& .contact-links': {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
  },

  '& .contact-links-email': {
    position: "relative",
    zIndex: 2,
    display: "flex",
    marginLeft: "15px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    transition: "all 200ms ease",
    fontFamily: "Inter, sans-serif",
    color:"#c7c7c7",
    fontSize: "20px",
    fontWeight: 400,
    textDecoration: "none",
  },

  '& .contact-links-social-grid': {
    display: "grid",
    gridAutoColumns: "1fr",
    gridColumnGap: "30px",
    gridRowGap: "16px",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "auto",
  },

  '& .contact-links-social-grid a': {
    fontSize: "24px",
    marginRight: "auto",
    marginLeft: "auto",
    opacity: "0.7",
    color:"#c7c7c7",
  }
}));

const Container = styled('div')(() => ({
  position: "relative",
  zIndex: "1",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  flex: 1,
}));

export const HomePage = () => {
  const ageDifMs = Date.now() - new Date("1988-06-16");
  const ageDate = new Date(ageDifMs);

  return (
    <>
      <Hero>
        <IntroText>
          <p>
            I am a digital creator & A/V artist with background in linguistics and programming. currently based between Madrid & Stockholm, I have been existing for about { Math.abs(ageDate.getUTCFullYear() - 1970) } years.
          </p>
        </IntroText>

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

        <ScrollDownWrapper>
          <a href="#" className="mouse-scroll">.</a>
        </ScrollDownWrapper>
      </Hero>

      <Work></Work>

      <Contact>
        <Container>
          <div className="contact-featured-text">
            <StartIcon className="_2"/>
            <h3>work toghether?</h3>
          </div>

          <div className="contact-paragraph">
            <p>Feel free to reach me using which mode of communication works for you</p>
          </div>

          <div className="contact-links">
            <a  className="contact-links-email" href="mailto:hellofriend@rigidbody.xyz">Send me an email</a>

            <div className="contact-links-social-grid">
              <a href="https://www.instagram.com/rigidbody_/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </Container>
      </Contact>
    </>
  )
}
