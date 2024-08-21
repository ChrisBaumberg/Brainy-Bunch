import { Link } from "react-router-dom";
import React from "react";
import { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Headline from "../parts/header/Headline";
//import {useFeeds }from "../customHooks/useFeeds";


export function WelcomePage(){/*
    const {feeds} = useFeeds();
    const [title, setTitle] = useState("");
    function checkNumberFeeds(){
        setTitle(`There are ${feeds.length} open offers.`)
        console.log(feeds.length)
    }
    useEffect (()=>{
        checkNumberFeeds();
    },[feeds])*/
    const title = 'Test'
    return(
        <Fragment>
        <Box sx={{
            backgroundColor: "background.default"
        }}>
            <div style={{  alignItems:"center", justifyContent:"center", width: "100vw", height: "100vh"
        }}>
      {/*   Welcome Page/
            First Page */}
            <Link to ="/feeds" style={{textDecoration: "none", display: "flex", justifyContent:"center", height:"100%",width: "100%"}}>
    <h1 style={{textAlign: "center"
    }}>Welcome at <Headline weight={"32px"} text="Brainy Bunch"/> </h1> <br />

        {title}
    </Link>
 {/* Link to Feeds-Page */}
    </div>
    </Box>
    </Fragment>
    )
    
}
