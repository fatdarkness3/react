



export default function Selector(props) {
       

    return(
        <>  
            <h1>{props.check}</h1>
            <select value={props.check} onChange={(e) => {
                const val = e.target.value
                props.setCheck(val)

            }}>
                <option value="All">All</option>
                <option value="todo">to do</option>
                <option value="done">done</option>
                
            </select>
        </>
    )
}