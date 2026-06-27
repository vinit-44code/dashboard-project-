import './AddOverlayer.css'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react';

export default function OverlayerTaskForm({classtoggle,changeToggle,taskList,SetTaskList}){


 let [taskName,SetNewName] = useState("");
    let[dueDate,SetNewDate] = useState("");
    let [tags,SetTags] = useState("")
  
let   updateTasklist=()=>{

        
        SetTaskList([...taskList,{
                
                tasktitel : taskName,
                id : uuidv4(),
                dueDate  : dueDate,
                tag : tags,
                taskState : false ,
               
        }]);
         console.log(taskList) ;

}






return(

<>
<div id="overlayer" className={classtoggle}>

     <div id="popup">

        <h2>Create New Task</h2>

         <input type="text" id="task_name" placeholder="Enter task"
         onChange={(e) =>{

                    SetNewName(e.target.value);}}
         />

        <input type="date" id="due_date" placeholder="date"   onChange={(e) =>{

                    SetNewDate(e.target.value);}}/>

        <select id="category" title="tag"  onChange={(e) =>{

                    SetTags(e.target.value);}}>
            <option value="work">WORK</option>
            <option value="personal">PERSONAL</option>
            <option value="urgent">URGENT</option>
        </select>

        <div className="popup_buttons">
            <button id="add_task_btn" onClick={updateTasklist}>Add Task</button>
            <button id="close_popup" onClick={changeToggle}>Cancel</button>
        </div>

    </div>

         </div>


</>)


}



