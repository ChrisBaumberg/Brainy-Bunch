
export default function Headline({size, text}){
    return(
        <>
        <h1 style={{
            textAlign : "center",
            color: "#F2E0C9",
            fontFamily: "Georgia",
            fontSize: size
        }}>
            {text ? text : "NewBond"}
        </h1>
        
        </>
    )
}