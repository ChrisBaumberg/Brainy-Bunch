import { createTheme } from "@mui/material";

const customTheme = createTheme({
    palette: {
        primary: {
            main: "#04ADBF"
        },
        background: {
            default: "#A0A603",
            paper: "#FFFFFF"
        },
        text: {
            primary: "#04BFBF",
            secondary: "#025959"
        },
        success: {
            main: "#F2E0C9"
        }
    }
})

export default customTheme;