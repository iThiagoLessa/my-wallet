import { ThemeProvider as MaterialUiThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import Aside from "./components/Aside";
import MainHeader from "./components/MainHeader";
import storeMUI from "./components/store/MaterialUi/styles";
import { IThemeSelected } from "./globalInterfaces";
import Routes from "./routes";
import { StGrid } from "./styles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

const App = () => {
  const { themeSelected } = useSelector((state: IThemeSelected) => state);
  
  return (
    <ThemeProvider theme={themeSelected.darkTheme ? dark : light}>
      <MaterialUiThemeProvider theme={storeMUI}>
        <StGrid>
          <MainHeader />
          <Aside />
          <Routes />
        </StGrid>
      </MaterialUiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
