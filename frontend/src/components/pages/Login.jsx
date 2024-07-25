//overall box for general layout rows: 15% 65% 20%

import { Box } from "@mui/material";
import Headline from "../parts/header/Headline";


export default function Login(){
    return(
        //overall box for general layout rows 15, 65, 20
        <Box sx={{
            width: "100vw",
            height: "100vh",
            display: 'grid',
            gridTemplateRows: '15% 65% 20%',
    
            fontSize: "32px",
            backgroundColor: "red"
        }}>
            {/*Here is the Headline component*/}
            <Headline weight={"32px"} text="Brainy Bunch"/>
  
   
         
            {/*Here is the main content layout two columns */}
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "50% 50%",
                backgroundColor: "blue"
            }}>
                    {/* Login fields */}
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "yellow"
                    }}>

                </Box>
                        {/* QuoteCard */}
                <Box sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "aqua"
                    }}>
				</Box>

                
            </Box>
            <Box sx={{
                width: "100%",
                height: "100%",
                display: "grid",
                backgroundColor: "green"
               
            }}>
            </Box>

        </Box>
    )
}