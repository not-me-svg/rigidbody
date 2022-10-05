import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import styled from "styled-components";
import { HeaderComponent } from "./components/HeaderComponent";

const PageContent = styled('div')(() => ({
  marginRight: "auto",
  marginLeft: "auto",
  backgroundColor: "#0a0a0a",
  color: "#c7c7c7"
}));

function App() {
  return (
    <PageContent className="App" id="top">
      <HeaderComponent></HeaderComponent>

      <BrowserRouter>
        <AppRouter ></AppRouter>
      </BrowserRouter>
    </PageContent>
  );
}

export default App;
