
import NewTask from './Taskitem'


export default function taskListBox({taskList,SetTaskList, realtaskList}){

return(<>
        <section id='taskeview'>
        <div id="task-list-box">



                       
                                {

                                 taskList.map((task)=>{
                                         return <NewTask 
                                      
                                         key={task.id} 
                                         task={task}
                                          id={task.id} 
                                          tasklist={realtaskList}
                                          setTasklist={SetTaskList}/>
                     
                                 })
                                }       


        </div>
        </section>

</>)

}