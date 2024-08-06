export default function Quote(){
    return(
        <>
        <div className="quotes" style={{
            color: "#F2E0C9"
        }}>
            {/* Größe von Textarea sollte dynamisch sein
            - size of textarea to be dynamic */}
            <textarea readonly="True" style={{
                width: "500px",
                height: "500px"
            }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat possimus eius velit nobis cupiditate quod nulla maxime totam sapiente recusandae, quaerat ut dolor numquam tenetur quisquam delectus deserunt facere optio consequatur. Sit quam obcaecati qui alias iste quisquam a expedita labore voluptatum voluptate praesentium, aperiam quia quos et, dignissimos aliquid. Asperiores, nihil? Illum iure ipsum aut, ad quasi unde corrupti, laborum dolore incidunt quidem exercitationem maxime? Quasi, officia. Obcaecati doloremque suscipit necessitatibus dolorem nobis alias nemo maxime fuga voluptas quisquam consectetur in earum quia facilis ipsum iure deleniti accusamus animi voluptatem unde, tempore doloribus, modi distinctio dolore. Possimus, quasi quod.
            </textarea>
            {/* Placeholder-Text für Zitate */}
        </div>
        </>
    )
}