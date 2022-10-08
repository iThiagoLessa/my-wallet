import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@fontsource/roboto';
import { ThemeProvider as MaterialUiThemeProvider } from "@material-ui/core/styles";
import storeMUI from './components/store/MaterialUi/styles';
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <MaterialUiThemeProvider theme={storeMUI}>
        <App />
      </MaterialUiThemeProvider>
    </ThemeProvider>
  </React.StrictMode>
)
