import { Canvas } from '@react-three/fiber';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import styled from "styled-components";
import { HeaderComponent } from "./components/HeaderComponent";
import { ScrollTopComponent } from "./components/ScrollTopComponent";
import { ContactComponent } from "./components/ContactComponent";

const PageContent = styled('div')(() => ({
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#2b0297",
  color: "#c7c7c7"
}));

function App() {
  return (
    <PageContent className="App" id="top">

      <Canvas />

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
