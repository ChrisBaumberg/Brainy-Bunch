import { Link } from "react-router-dom";
import { Fragment} from "react"

export default function LoginForm(){
    return(
        <Fragment>
            <div style={{
                color: "#F2E0C9"
            }}>
                <label/>Username: <br />
                <input type="text" placeholder="username"/><br />
                <label/>Passwort: <br />
                <input type="password" /><br />
                <input type="button" value="Einloggen" style={{
            width: "90px"
        }}/> <br />
                <label style={{fontSize:"12px"}}>Noch keinen Account? 
                    <Link to = "/register">
                        Registriere dich hier
                    </Link>
                {/* Link to Register-Page */}
                </label>
            </div>
        </Fragment>
    )
}