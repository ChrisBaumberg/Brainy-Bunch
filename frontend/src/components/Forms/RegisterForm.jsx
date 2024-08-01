
import { Link } from "react-router-dom";

export default function RegisterForm(){
   
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
        
            <label style={{fontSize: "12px"}}>Du hast bereits einen Account? 
            
                <Link to="/login">
                    Melde dich hier an.
                </Link>
                
            </label>
        </div>

    )
}

