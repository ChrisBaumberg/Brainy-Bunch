//overall box for general layout rows: 15% 65% 20%

import { Box } from "@mui/material";
import Headline from "../parts/header/Headline";
import LoginForm from "../Forms/LoginForm";
import Quote from "../parts/Quote";


export default function Login(){
    return(
        //overall box for general layout rows 15, 65, 20
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: 'grid',
            margin: "0",
            gridTemplateRows: '15% 65% 20%',
            
            fontSize: "32px",
            backgroundColor: "background.default"
        }}>
            {/*Here is the Headline component*/}
            <Headline weight={"32px"} text="Brainy Bunch"/>
  
   
         
            {/*Here is the main content layout two columns */}
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "50% 50%",
                
            }}>
                    {/* Login fields */}
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                
                    
                    }}>
                        <LoginForm/>
                </Box>
                        {/* QuoteCard */}
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  
                    paddingRight: "20px",
                    paddingLeft: "20px"
                    }}>
                        <Quote />
				</Box>

                
            </Box>
            {/* Bottom Box  - to be used as footer? */}
            <Box sx={{
                width: "100%",
                height: "100%",
           
       
               
            }}>
            </Box>

        </Box>
    )
}