export default function Headline({size, text}){
    return(
        <>
        <h1 style={{
            textAlign : "center",
            color: "text.secondary",
            fontFamily: "Arial",
            fontSize: size
        }}>
            {text ? text : "NewBond"}
        </h1>
        </>
    )
}