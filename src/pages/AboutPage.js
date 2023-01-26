import React, { Suspense } from 'react';
import styled from 'styled-components';
import { SectionTitleComponent } from '../components/SectionTitleComponent';
import { TextRotatorComponent } from '../components/TextRotatorComponent';
import useViewport from '../hooks/useViewport';
import { Canvas } from '@react-three/fiber';
import { MeshTransmissionMaterial, OrbitControls, Torus, Environment } from "@react-three/drei";

const Hero = styled('div')(() => ({
  position: "relative",
  minHeight: "100vh",
  paddingTop: "150px",
  paddingRight: "40px",
  paddingLeft: "40px",
  boxSizing: "border-box",
  fontFamily: "Inter, sans-serif",

  '& .about-intro': {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  '& .about-intro-text': {
    position: "relative",
    zIndex: "1",
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

const Content = styled('div')(() => ({
  position: "relative",
  zIndex: "1",
  maxWidth: "1200px",
  marginRight: "auto",
  marginLeft: "auto",
  flex: 1,
  padding: "100px 5%"
}));

const ServicesGrid = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 50px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }

  & .service {
    display: flex;
    justify-content: flex-start;
  }

  & .service-icon {
    margin-right: 30px;
    width: 48px;
    height: 48px;
  }

  & .service-title {
    margin-top: 0px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  & .service ol {
    padding-left: none;
    list-style: none;
  }

  & .service ol li {
    display: flex;
    align-items: center;
  }

  & .service ol li .line-list {
    width: 30px;
    height: 1px;
    margin-right: 10px;
    background-color: hsla(0, 0%, 100%, 0.4);
  }
`;

// Reusable 3d settings
const Material = () => {
  return (
    <>
      <meshPhysicalMaterial 
        // toneMapped={false}
        // samples={1}
        // resolution={100}
        // transmission={0.95}
        // roughness={0.5}
        // clearcoat={0.1}
        // clearcoatRoughness={0.1}
        // thickness={200}
        // ior={1.5}
        // chromaticAberration={1}
        // anisotropy={1.7}
        // distortion={0}
        // distortionScale={0.2}
        // temporalDistortion={0}
        // attenuationDistance={0.5}
        // attenuationColor="#pink"
        // color="pink"
      />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
      </Suspense>
    </>
  )
}

export const AboutPage = () => {
  const { width } = useViewport();
  const breakpoint = 680;

  return (
    <>
      <Hero>
        <div className="about-intro">
          <div className="about-intro-text">
            <p>
              My stage name is RigidBody but <br /> I love flexibility and adaptation like I love sushi.<br />Before becoming an A/V artist I studied cinema and some years after, a master in linguistics. Then I became a programmer. 
            </p>
          </div>

          { 
            width > breakpoint &&
            <div className="about-intro-avatar">
              <img src="./assets/img/rigid-body-avatar.jpeg" alt="rigid body avatar" />
            </div>
          }
        </div>

        <TextRotatorComponent />
      </Hero>

      <Content>
        <SectionTitleComponent text="what i do" />

        <ServicesGrid>
          <div className="service">
            <div className="service-icon">
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.4] }} gl={{ alpha: true }}>
                <Torus>
                  <Material></Material>
                </Torus>
                <OrbitControls autoRotate="true" autoRotateSpeed="20" />
              </Canvas>
            </div>
            
            <div>
              <h3 className="service-title">A/V Artist</h3>

              <div>
                <ol>
                  <li>
                    <div className="line-list"></div>
                    <div>Resolume</div>
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
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.4] }} gl={{ alpha: true }}>
                <Torus>
                  <Material></Material>
                </Torus>
                <OrbitControls autoRotate="true" autoRotateSpeed="20" />
              </Canvas>
            </div>
            
            <div>
              <h3 className="service-title">3D creator</h3>

              <div>
                <ol>
                  <li>
                    <div className="line-list"></div>
                    <div>Belnder</div>
                  </li>
                  <li>
                    <div className="line-list"></div>
                    <div>C4D</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2.4] }} gl={{ alpha: true }}>
                <Torus>
                  <Material></Material>
                </Torus>
                <OrbitControls autoRotate="true" autoRotateSpeed="20" />
              </Canvas>
            </div>
            
            <div>
              <h3 className="service-title">XP designer</h3>

              <div>
                <ol>
                  <li>
                    <div className="line-list"></div>
                    <div>Unity</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </ServicesGrid>
      </Content>
    </>

  )
}
