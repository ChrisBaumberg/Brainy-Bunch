

import { Link } from "react-router-dom";

export default function RegisterForm(){

    return(
        <>
        
        <div className="registerForm" style={{
            color: "#F2E0C9"
        }}>
            <label>Name: </label><br />
            <input type="text" /> <br />
            <label>E-Mail-Adresse:</label> <br />
            <input type="e-mail" placeholder="name@email.com"/> <br />
            <label>Passwort:</label> <br />
            <input type="password" /> <br />
            <label>Passwort wiederholen:</label> <br />
            <input type="password" /> <br />
        
            <input type="button" value="Registrieren" style={{width:"90px"}} className="buttonSubmitRegister"/> <br /> <br />
        
            <label style={{fontSize: "12px"}}>Du hast bereits einen Account? 
            
                <Link to="/login">
                    Melde dich hier an.
                </Link>
                
            </label>
        </div>
        </>

    )
}

