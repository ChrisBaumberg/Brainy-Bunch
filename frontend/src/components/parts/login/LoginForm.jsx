import { Link } from "react-router-dom";
import { Fragment, useCallback, useState } from "react"


export default function LoginForm(){
  
    
    return(
        <Fragment>

        <label/>Username: 
        <input type="text" placeholder="username"/>
        <label/>Passwort: 
        <input type="password" />
        <input type="button" value="Einloggen" style={{
            width: "90px"
        }}/>
        <label style={{fontSize:"12px"}}>Noch keinen Account? 
        <Link to = "/register">
            Registriere dich hier
        </Link>
        </label>
  
        
       

        </Fragment>
    )
}