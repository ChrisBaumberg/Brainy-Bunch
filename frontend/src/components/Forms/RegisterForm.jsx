
import { Link } from "react-router-dom";

export default function RegisterForm(){
    const loginTitle=" Melde "
    return(
    
        <div className="registerForm">
            <label>Name: </label><br />
            <input type="text" /> <br />
            <label>E-Mail-Adresse:</label> <br />
            <input type="e-mail" placeholder="name@email.com"/> <br />
            <label>Passwort:</label> <br />
            <input type="password" /> <br />
            <label>Passwort wiederholen:</label> <br />
            <input type="password" /> <br />
        
            <input type="button" value="Bestätigen" className="buttonSubmitRegister"/> <br /> <br />
        
            <label>Du hast bereits einen Account? 
                <Link to="/login">
                 {loginTitle}
                </Link>
                dich hier an.
            </label>
        </div>

    )
}

