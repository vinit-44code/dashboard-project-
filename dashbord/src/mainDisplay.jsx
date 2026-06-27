


import TaskBlock from './tasksfolder/TaskBlock'
import NoteBlock from './notesfolder/NotesBlock'
import WheatherBlock from './wheatherfolder/weatherBlock'
//import { useState } from 'react'

export default function MainDisplay({active,setactive}){




       

return(

<>

        <section id='mainDisplay' >


                <TaskBlock 
                active = {active}
                setactive = {setactive}/>
                
                <NoteBlock
                
                active = {active}
                setactive = {setactive}
                />
                <WheatherBlock
                active = {active}
                setactive = {setactive}
                />

        </section>

</>)


}