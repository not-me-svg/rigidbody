import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { HeaderComponent } from "./components/HeaderComponent";
import Balloon from './components/Balloon';
import { ScrollTopComponent } from "./components/ScrollTopComponent";
import { ContactComponent } from "./components/ContactComponent";

const Frame = styled('div')(() => ({
  border: "1px solid #c7c7c7",
  borderRadius: "4px",
  position: "fixed",
  top: "24px",
  right: "24px",
  bottom: "24px",
  left: "24px",
}));

const PageContent = styled('div')(() => ({
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#2b0297",
  color: "#c7c7c7"
}));

function App() {

  return (
    <PageContent className="App" id="top">

      <Frame />

      <Canvas
         dpr={[1, 2]} camera={{ position: [0, 0, 2.5] }} gl={{ alpha: true }}
         style={{
            backgroundColor: 'transparent',
            width: '100vw',
            height: '100vh',
            position: "fixed",
            zIndex: 1
         }}
      >
        <Suspense fallback={null}>
          <Balloon />
          <Environment background={false} files="environment.hdr" />
        </Suspense>
        <OrbitControls enableZoom={false} enableRotate={false}/>
      </Canvas>

      <HeaderComponent />

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>

      <ScrollTopComponent />

      <ContactComponent />
    </PageContent>
  );
}

export default App;
