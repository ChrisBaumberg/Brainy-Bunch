import { Link } from "@mui/material"
import { Fragment } from "react"

export default function LoginForm(){
    return(
        <Fragment>

        <label/>Username: 
        <input type="text" placeholder="username"/>
        <label/>Passwort: 
        <input type="password" />
        <input type="button" value="Bestätigen" />

        </Fragment>
    )
}