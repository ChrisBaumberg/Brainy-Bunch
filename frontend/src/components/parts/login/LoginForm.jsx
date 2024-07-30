import { Link } from "@mui/material"
import { Fragment, useState } from "react"


export default function LoginForm(){
    const regButton = <input type="button" value="Registrieren" style={{
        width: "90px"
    }}/>;
        
    
    return(
        <Fragment>

        <label/>Username: 
        <input type="text" placeholder="username"/>
        <label/>Passwort: 
        <input type="password" />
        <input type="button" value="Bestätigen" style={{
            width: "90px"
        }}/>
        <Link to="/register">
        {regButton}
  
        
       
      </Link>
        </Fragment>
    )
}