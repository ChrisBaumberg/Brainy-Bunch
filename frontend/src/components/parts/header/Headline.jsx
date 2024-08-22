import { Fragment } from "react";
import { Link} from "react-router-dom";
import { Box, Grid } from "@mui/material";



{/* Headline */}
export default function Headline({size, text}){
    return(
       
        <Box style={{
            color: "text.primary",
            backgroundColor: "background.default"
        }}>
      
        <h1 style={{
            textAlign : "center",
           
            fontFamily: "Georgia",
            fontSize: size
        }}>
            {/*{text ? text : "NewBond"}*/}
            <img src="../../../../assets/BB_logo_gross.png" style={{
                maxWidth: "50%",
                height: "auto",
                borderRadius: "8px",
                margin: "5px" 
            }} />
        </h1>
      
        </Box>
  
    )
}