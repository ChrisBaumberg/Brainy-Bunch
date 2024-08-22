import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#04BFBF"
        },
        background: {
            default: "#F2E0C9",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#A0A603",
            secondary: "#04ADBF"
        },
        success: {
            main: "#025959"
        }
    }
})

export default customTheme;