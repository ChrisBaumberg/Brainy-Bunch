import { Link } from "react-router-dom";
import { Fragment, useState} from "react"

export default function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.post("<http://localhost:5000>", {username, password});
            console.log(response.data.token);
        }
        catch(error){
            console.error(error);
        }
    };
    return(
        <Fragment>
            <div style={{
                color: "#F2E0C9"
            }}>
                <form onSubmit={handleSubmit}>
                <label/>Username: <br />
                <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label/>Password: <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> <br />
                <input type="submit" value="Login" style={{
            width: "90px"
        }}/> <br />
        </form>
                <label style={{fontSize:"12px"}}>No account yet?
                    <Link to = "/register">
                        Registrier here
                    </Link>
                {/* Link to Register-Page */}
                </label>
            </div>
        </Fragment>
    )
}