import { Link } from "react-router-dom";

import { Fragment } from "react";
import { Box } from "@mui/material";
import Headline from "../parts/header/Headline"

export function WelcomePage(){
    return(
        <Fragment>
        
            <div style={{
            backgroundColor: "#A0A603", color: "#04BFBF", alignItems:"center", justifyContent:"center"
        }}>
      {/*   Welcome Page/
            First Page */}
    <h1 style={{textAlign: "center"
    }}>Welcome at <Headline weight={"32px"} text="Brainy Bunch"/> </h1> <br />
    <Link to ="/feeds" style={{textDecoration: "none", display: "flex", justifyContent:"center"}}>
        <img src="../../../assets/BB_logo_gross.png" alt="" />
    </Link>
    {/*     Link to Login-Page */}
    </div>
    </Fragment>
    )
    
}
