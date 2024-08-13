import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { Fragment } from "react";
import { Box } from "@mui/material";
import Headline from "../parts/header/Headline"

export function WelcomePage(){
    return(
        <Fragment>
        
            <div style={{
            backgroundColor: "#04ADBF", color: "#F2E0C9", alignItems:"center", justifyContent:"center"
        }}>
      {/*   Welcome Page/
            First Page */}
    <h1 style={{textAlign: "center"
    }}>Welcome at <Headline weight={"32px"} text="Brainy Bunch"/> </h1> <br />
    <Link to ="/login" style={{textDecoration: "none", display: "flex", justifyContent:"center"}}>
        <img src={logo} alt="" />
    </Link>
    {/*     Link to Login-Page */}
    </div>
    </Fragment>
    )
    
}
