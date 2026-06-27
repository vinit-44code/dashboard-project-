
import { useState,useEffect } from 'react'
import './taskBlock.css'
import TaskHeader from "./taskHeader"
import TaskListBox from "./taskListBox"

export default function TaskBlock({active}){


   let [tasklist,SetTaskList] = useState(()=>{

    let saveTasks = localStorage.getItem("tasks");
          if(saveTasks){
            return JSON.parse(saveTasks) ;
          }else{
            return [];
          }
}
)

    useEffect(()=>{

      localStorage.setItem("tasks",JSON.stringify(tasklist)) ;

    },[tasklist])
    












let [filter,setfilter] = useState("All");




let filterList = () => {

    if(filter === "pending"){
        return tasklist.filter(
            (todo) => todo.taskState === false
        );
    }

    if(filter === "complete"){
        return tasklist.filter(
            (todo) => todo.taskState === true
        );
    }

    return tasklist;
}

                                        






            return(

                <>
                <section id="taskBlock " className = {`${active.task?"hidden":""}`}>
                

                   <TaskHeader
                   tasklist={tasklist}
            SetTaskList = {SetTaskList}
            filter={filter}
            setfilter = {setfilter}
                   />

                 <TaskListBox 
                 taskList={filterList()}
            SetTaskList = {SetTaskList} 
       
            />



                </section>
                
                
                </>

            )






}