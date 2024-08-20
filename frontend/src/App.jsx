import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";

//MUI imports
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//REACT imports

import { WelcomePage } from "./components/Main/WelcomePage";
import { ErrorPage } from "./components/Main/ErrorPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {Login} from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Fragment } from "react";
import { ThemeProvider } from "@mui/material";
import customTheme from "./components/customStyles/customTheme"
import {Home} from "./components/pages/Home";
import  CreateCard from "../src/components/modals/CreateCard"
import OffercardDetails from "./components/modals/OffercardDetails";
import { Offercard } from "./components/Offercard";

function App() {
     const setHeadline = "Brainy Bunch"
  return (
   <Fragment>
    <ThemeProvider theme={customTheme}>
      <img src="./public/assets/logo.png" alt="" className="logoBrand"/>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={
          <Login/>}/>
          <Route path="/feeds" element={<Home/>}/>
          <Route path="/" element={<WelcomePage/>}/>
        <Route path = "/:path" element={<ErrorPage/>}/>
       
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </Fragment>
   
  );
}
export default App;
