
import NewTask from './Taskitem'


export default function taskListBox({taskList,SetTaskList}){

return(<>
        <section id='taskeview'>
        <div id="task-list-box">



                       
                                {

                                 taskList.map((task)=>{
                                         return <NewTask 
                                         key={task.id} 
                                         task={task}
                                          id={task.id} 
                                          tasklist={taskList}
                                          setTasklist={SetTaskList}/>
                     
                                 })
                                }       


        </div>
        </section>

</>)

}