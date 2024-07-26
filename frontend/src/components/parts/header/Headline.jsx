
export default function Headline({size, text}){
    return(
        <>
        <h1 style={{
            textAlign : "center",
            color: "text.primary",
            fontFamily: "Arial",
            fontSize: size
        }}>
            {text ? text : "NewBond"}
        </h1>
        
        </>
    )
}