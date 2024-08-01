
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

export function WelcomePage(){
    return(
        <>
      

    <h1 style={{textAlign: "center"
    }}>Willkommen bei Brainy Bunch</h1> <br />
    <Link to ="/login" style={{textDecoration: "none", display: "flex", justifyContent:"center"}}>
        <img src={logo} alt="" />
    </Link>
  

    </>
    )
    
}
