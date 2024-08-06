import { Box } from "@mui/material"
import Headline from "../parts/header/Headline"
import RegisterForm from "../Forms/RegisterForm"

export function Register(){
    return(
        <Box sx = {{
            width: "100vw",
            height: "100vh",
            display : "grid",
            gridTemplateRows: "15% 70% 15%",
            fontSize: "32px",
            backgroundColor: "#04ADBF"
        }}>
            {/*Here is the Headline component*/}
            <Headline weight={"32px"} text="Brainy Bunch"/>
        <Box sx= {{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "100%",
            backgroundColor: "#04BFBF"
        }}>
            {/*RegisterForm */}
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#025959",
                textAlign: "center"
            }}>
                <RegisterForm/>
            </Box>
          
        </Box>

        {/* Bottom Box  - to be used as footer? */}
        <Box sx={{
                width: "100%",
                height: "100%",
           
                backgroundColor: "#A0A603"
               
            }}>
            </Box>
        </Box>
    )

}

