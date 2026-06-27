
import { useState } from "react";
import OverLayerNotesView from "./overLayerNotes"  ;

export default function NoteItem({note,updateTitel,updateContent,noteList, setNoteList}){



                 
let [ClasstoggleView,SetClasstoggleView] = useState("hidden") ;

let changeClassView = () =>{

    if(ClasstoggleView === "hidden"){
        SetClasstoggleView("");
    }else{
        SetClasstoggleView("hidden")
    }
    
        console.log("toggled")

}



        let deleteNotes = (id)=>{
 
        console.log("task deleted") ;
        let copyNotes = noteList.filter((item)=>item.id !== id)

           setNoteList([...copyNotes]);
           console.log(copyNotes)

         
    };

return(<>


<div id="notes" onDoubleClick={changeClassView}>

<OverLayerNotesView
noteList={note}
noteInput={note.title}
content={note.content}
updateTitel={updateTitel}
updateContent ={updateContent}
changeClass={changeClassView}
Classtoggle={ClasstoggleView}

/>

<div id="delete"><button onClick={()=>{deleteNotes(note.id)}}>X</button></div>

<p>titel : {note.title}</p>

<p className="note-preview">{note.content}</p>

</div>


</>)



}