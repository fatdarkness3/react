import { useState } from "react"




export default function ClicktoAdd(prompt) {

    const [render , setRender] = useState("")
    // const [up , setUp] = useState("")

    return(
        <>

        {/* <input onKeyDown={(e) => {
            let a = e.key
            setUp(up +a)
            console.log(up +a)
        }}/> */}
            <div >
                <h1>{render}</h1>
            <input id="input" value={render} onChange={(e) => {
                let a = e.target.value
                console.log(a)
                setRender(a)
                
                
            }} />
            <button onClick={() => {

                if(render == "" || render == (render.keyCode ==32)) {
                    alert("your input is empty")
                }else {
                prompt.handle(render)
                
                console.log(render)
                setRender("")
                }
                
                
            }} >click</button>
            
            </div>
        </>
    )
}