



export default function RenderItem(prompt) {
    // const [a , setA] = useState(false)
    // const className = a === true ? "selected" : ""
    return (
        <div>
            <input /*className={className}*/  type="checkbox" checked= {prompt.status} onClick={() => {
                
                   prompt.state(prompt.title)
                
                
            }}/>
            {/* <button onClick={() => {
                setA(true)
            }}>click</button> */}
            <h2 style={{display:"inline-block",}}>{prompt.title}</h2>
        </div>
    )
}