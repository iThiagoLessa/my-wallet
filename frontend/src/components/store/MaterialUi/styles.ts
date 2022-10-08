import { createTheme } from "@material-ui/core/styles";
import styled from "styled-components";

const storeMUI = createTheme({
    overrides: {
        MuiSwitch: {
            switchBase: {
                color: '#ccc'
            },
            colorSecondary: {
                "&$checked": {
                    color: '#FFF'
                }
            },
            track: {
                backgroundColor: "#ccc",
                "$checked$checked + &": {
                    backgroundColor: "#E44C4E",
                    opacity: 1
                }
            }
        }
    }
});

export default  storeMUI;