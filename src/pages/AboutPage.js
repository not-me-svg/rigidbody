import React from 'react';
import styled from 'styled-components';
import { SectionTitleComponent } from '../components/SectionTitleComponent';
import { TextRotatorComponent } from '../components/TextRotatorComponent';

const Hero = styled('div')(() => ({
  position: "relative",
  minHeight: "100vh",
  paddingTop: "150px",
  paddingRight: "5%",
  paddingLeft: "5%",
  boxSizing: "border-box",
  fontFamily: "Inter, sans-serif",

  '& .about-intro': {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  '& .about-intro-text': {
    position: "relative",
    zIndex: "1",
    maxWidth: "1200px",
    flex: "1",
  },

  '& .about-intro-text p': {
    width: "340px",
    marginBottom: "0px",
    fontSize: "18px",
    lineHeight: "1.4",
    fontWeight: "400",
    textTransform: "uppercase"
  },

  '& .about-intro-avatar': {
    width: "200px",
    height: "200px",
    marginLeft: "auto",
    borderRadius: "100%",
    overflow: "hidden"
  },

  '& .about-intro-avatar img': {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
}));

const Container = styled('div')(() => ({
  position: "relative",
  zIndex: "1",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  flex: 1,
  padding: "100px 5%"
}));

const ServicesGrid = styled('div')(() => ({
  display: "grid",
  marginRight: "auto",
  marginLeft: "auto",
  gridAutoColumns: "1fr",
  gridColumnGap: "50px",
  gridRowGap: "30px",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",
  marginTop: "50px",

  '& .service': {
    display: "flex",
    justifyContent: "flex-start"
  },

  '& .service-icon': {
    marginRight: "30px"
  },

  '& .service-title': {
    marginTop: "0px",
    marginBottom: "20px",
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: "500",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },

  '& .service ol': {
    paddingLeft: "none",
    listStyle: "none"
  },

  '& .service ol li': {
    display: "flex",
    alignItems: "center"
  },

  '& .service ol li .line-list': {
    width: "30px",
    height: "1px",
    marginRight: "10px",
    backgroundColor: "hsla(0, 0%, 100%, 0.4)",
  },
}));

export const AboutPage = () => {
  return (
    <>
      <Hero>
        <div className="about-intro">
          <div className="about-intro-text">
            <p>
              My stage name is RigidBody but <br /> I´m not rigid at all.<br />I love flexibility and adaptation like I love sushi.<br />Before becoming an A/V artist I studied cinema and some years after, a master in linguistics. Then I became a programmer. 
            </p>
          </div>

          <div className="about-intro-avatar">
            <img src="./assets/img/rigid-body-avatar.jpeg" alt="rigid body avatar" />
          </div>
        </div>

        <TextRotatorComponent />
      </Hero>

      <Container>
        <SectionTitleComponent text="what i do" />

        <ServicesGrid>
          <div className="service">
            <div className="service-icon">
              <i class="fa-regular fa-circle-dot" style={{ fontSize: "40px" }}></i>
            </div>
            
            <div>
              <h3 className="service-title">A/V Artist</h3>

              <div>
                <ol role="list">
                  <li>
                    <div className="line-list"></div>
                    <div>Resolume Avenue</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>ArKaos</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>modul8</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>VDMX</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>Touchdesigner</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="service">
            <div className="service-icon">
            <i class="fa-regular fa-object-ungroup" style={{ fontSize: "40px" }}></i>
            </div>
            
            <div>
              <h3 className="service-title">3D creator</h3>

              <div>
                <ol role="list">
                  <li>
                    <div className="line-list"></div>
                    <div>Webflow</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>Figma</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>inVision</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <i class="fa-regular fa-object-ungroup" style={{ fontSize: "40px" }}></i>
            </div>
            
            <div>
              <h3 className="service-title">Prototyping</h3>

              <div>
                <ol role="list">
                  <li>
                    <div className="line-list"></div>
                    <div>Webflow</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>Figma</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>inVision</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </ServicesGrid>
      </Container>
    </>

  )
}
