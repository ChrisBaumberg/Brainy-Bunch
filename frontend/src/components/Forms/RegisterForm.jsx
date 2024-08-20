import { Checkbox } from "@mui/material";
import { useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

export default function RegisterForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post("<http:/localhost:5000>",{username, password});
            console.log(response.data)
        } catch(error){
            console.error(error);
        }
    }
    return(
        <>
        <div className="registerForm" style={{
            color: "#F2E0C9"
        }}>
            <form onSubmit={handleSubmit}>
            <label>Username: </label><br />
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/> <br />
           {/* <label>E-Mail-Adresse:</label> <br />
            <input type="e-mail" placeholder="name@email.com"/> <br />*/}
            <label>Password:</label> <br />
            <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />
           {/* <label>Passwort wiederholen:</label> <br />
            <input type="password" /> <br />        */}
            <input type="submit" value="Register" style={{width:"90px"}} className="buttonSubmitRegister"/> <br /> <br />{/*
             Rights-Links (AGB, Datenschutz) + Checkbox(en) alias "Ich akzeptiere"*/} 
          </form>
            <label style={{fontSize: "12px"}}>You've got an account?             
                <Link to="/login">
                    Login here
                </Link>
                {/* Link to Login-Page */}
            </label>
        </div>
        </>

    )
}

