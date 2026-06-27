

import './taskitem.css'


export default function NewTask({tasklist, id,task, setTasklist}){


        let deleteTask = (id)=>{
 
        console.log("task deleted") ;
        let copylist = tasklist.filter((todo)=>todo.id !== id)

           setTasklist([...copylist]);
           console.log(copylist)

         
    };

    let statecheck = (id) =>{

                let copylist = tasklist.map((todo)=>{

                    if(todo.id === id){

                        
                        
                        if(todo.taskState){
                            return {
                             ...todo,
                             taskState : !todo.taskState
                             
                            }
                        }else{
                            return{
                                ...todo,
                                taskState:!todo.taskState
                                
                            }
                        }

                    } else{
                            return{...todo}
                        }
                   



                })
                setTasklist(copylist)
                console.log(copylist);
                
                 
            
            }
   



return(<>


   <div className={`task ${task.taskState?"complete":""} `}>    
    
            <input type="checkbox"  checked ={task.taskState} onChange={()=>{
                statecheck(id) ;
            }}/>
                <div id='task-content'>
                <span className='task-name'>{task.tasktitel}</span>
                <div id='logs'>
                <span className='due-date'>due-date : {task.dueDate}</span>
                <span className='tags'>tags : {task.tag}</span>
                </div>
                 </div>

           <button className='delete_task' onClick={()=>{deleteTask(id)}}>🗑️</button>
            </div>
           


</>)

}

