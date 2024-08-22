import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//custom components imports
import { theme } from "./components/theme/theme";

//MUI imports
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

//REACT imports
import { Fragment } from "react";

//Components
import { WelcomePage } from "./components/Main/WelcomePage";
import { ErrorPage } from "./components/Main/ErrorPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";



import customTheme from "./components/customStyles/customTheme";
import { Home } from "./pages/Home";
import CreateCard from "./components/modals/CreateCard";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
          <Route path="/feeds" element={<Home/>}/>
          <Route path="/" element={<WelcomePage/>}/>
        <Route path = "/:path" element={<ErrorPage/>}/>
       <Route path ="/addFeed" element ={<CreateCard/>}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
}
export default App;
