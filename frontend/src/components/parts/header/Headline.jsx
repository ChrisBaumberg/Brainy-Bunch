import { Link} from "react-router-dom";



{/* Headline */}
export default function Headline({size, text}){
    return(
        <>
        <Link to ="/" style={{
            textDecoration: "none"
        }}>
        <h1 style={{
            textAlign : "center",
            color: "#F2E0C9",
            fontFamily: "Georgia",
            fontSize: size
        }}>
            {/*{text ? text : "NewBond"}*/}
            <img src="../../../../assets/BB_logo_transparent_white_300x50.png" alt="" />
        </h1>
        </Link>
        </>
    )
}