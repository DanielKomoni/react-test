import React from "react";
import {useState} from "react";

const AddTask=({onAdd})=>{
    const [text, setText]=useState("")
    const [reminder, setReminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert("Pleace add text")
            return
        }

        onAdd({text, reminder})

        setText("")
        setReminder(false)
    }
    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
             <label>Task</label>
             <input type="text" placeholder="add Task" value={text}
             onChange={(e)=>setText(e.target.value)}/>
            </div>
            
            <div className="form-control form-control-check">
             <label>Set Reminder</label>
             <input type="checkbox" checked={reminder} value={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" className="btn btn-block" value="Save Task"/>
        </form>
    )
}

export default AddTask