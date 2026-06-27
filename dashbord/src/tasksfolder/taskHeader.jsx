

import { useState } from 'react'
import './taskheader.css'
import AddTaskOverlay from './AddTaskOverlay'

export default function TaskHeader({tasklist,SetTaskList, setfilter ,filter}){

 
let [Classtoggle,SetClasstoggle] = useState("hidden") ;

let changeClass = () =>{

    if(Classtoggle === "hidden"){
        SetClasstoggle("");
    }else{
        SetClasstoggle("hidden")
    }
    
        console.log("toggled")

}



return(<>


        <div id="task-titel-add">
            <span><h3>MY TASK</h3></span>
            <button id="Task-add" onClick={changeClass}>➕ ADD</button>
        </div>      

        <div id="filter" >

            <button id="All" className={`${filter == "All"?"active":""}`} onClick={()=>{setfilter("All")}}  >ALL</button>
            
            <button id="pending"  className={`${filter == "pending"?"active":""}`} onClick={()=>{setfilter("pending")}} >PANDING</button>
            
            <button id="Complete" className={`${filter == "complete"?"active":""}`} onClick={()=>{setfilter("complete")}} >COMPLETE</button>

        </div>

           <AddTaskOverlay classtoggle={Classtoggle}
           changeToggle={changeClass}
           taskList={tasklist}
           SetTaskList ={SetTaskList}
           />
</>)



}