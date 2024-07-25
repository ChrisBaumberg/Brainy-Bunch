import { Fragment } from "react";

function LoginInput(){
    return(
        <Fragment>
        
        <label>Name: </label> 
        <input type="text" placeholder="username" />
      
        <label> Passwort: </label>
        <input type="password" />
        <input type="button" value="Bestätigen" />
        
        </Fragment>
    )
}



export default LoginInput;