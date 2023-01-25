import { AppRouter } from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva'
import { HeaderComponent } from "./components/HeaderComponent";
import Balloon from './components/Balloon';
import { ScrollTopComponent } from "./components/ScrollTopComponent";
import { ContactComponent } from "./components/ContactComponent";

const PageContent = styled('div')(() => ({
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#2b0297",
  color: "#c7c7c7"
}));

function App() {
  const envProps = useControls({ background: false })

  return (
    <PageContent className="App" id="top">

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
         
         {/* <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} /> */}
         <Suspense fallback={null}>
          <Balloon />
          <Environment {...envProps} files="environment.hdr" />
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
