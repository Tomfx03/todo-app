import { useState } from "react"
export function TodoInput(props) {
    const {handelAddTodo} = props
    const [inputVal,setInput] = useState("")
    return(
        <div className="input-container">
            <input value={inputVal} onChange={(e) =>
            setInput(e.target.value)} 
            placeholder="Add task"/>
            <button onClick={()=>{
                if (!inputVal) {return}
                handelAddTodo(inputVal)
                setInput("")
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}
