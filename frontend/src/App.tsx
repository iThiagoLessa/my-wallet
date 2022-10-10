import Aside from "./components/Aside";
import Content from "./components/Content";
import MainHeader from "./components/MainHeader";
import Routes from "./routes";
import { StGrid } from "./styles";
import Entries from "./views/Entries";

const App = () => {
  return (
    <StGrid>
      <MainHeader />
      <Aside />
      <Routes />
    </StGrid>
  )
}

export default App
