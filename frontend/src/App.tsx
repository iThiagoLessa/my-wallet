import Aside from "./components/Aside";
import Content from "./components/Content";
import MainHeader from "./components/MainHeader";
import { StGrid } from "./styles";

const App = () => {
  return (
    <StGrid>
      <MainHeader />
      <Aside />
      <Content />
    </StGrid>
  )
}

export default App
