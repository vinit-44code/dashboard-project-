
import { useEffect, useState } from 'react'
import './noteBlock.css'
import NoteHeader from "./noteHeader"
import OverLayerNotes from './overLayerNotes'
import NoteListBox from './noteListBox'




export default function NoteBlock({active}){


        let [note , Setnote] = useState(()=>{


                            let savedNotes = localStorage.getItem("notes");

                            if(savedNotes){
                                return JSON.parse(savedNotes) ;
                            }else{
                                return [];
                            }
        }) ;


            useEffect(()=>{
                    
      localStorage.setItem("notes",JSON.stringify(note)) ;

            },[note])




                 
let [Classtoggle,SetClasstoggle] = useState("hidden") ;

let changeClass = () =>{

    if(Classtoggle === "hidden"){
        SetClasstoggle("");
    }else{
        SetClasstoggle("hidden")
    }
    
        console.log("toggled")

}

let [noteInput,SetNoteInput] = useState("")
let [content,SetContent] = useState("")

let updateTitel = (event)=>{

    SetNoteInput(event.target.value);

}

let updateContent = (event)=>{

    SetContent(event.target.value);

}



let[searchNote,SetsearchNote] = useState("");


let filterNote = note.filter((notes)=>{

    return notes.title.toLowerCase().includes(searchNote.toLowerCase())


})




return(

                <>
                <section id="noteBlock" className={`${active.notes?"hidden":""}`}>

                            <NoteHeader/>

                            <NoteListBox 
                            noteList ={filterNote}
                            setNoteList = {Setnote}
                            changeClass = {changeClass}
                            Classtoggle={Classtoggle}
                             updateContent={updateContent}
                            updateTitel={updateTitel}
                            SetsearchNote={SetsearchNote}
                            searchNote={searchNote}
                            filterNote={filterNote}
                            
                            />

                            <OverLayerNotes noteList={note}
                            Setnotes={Setnote}
                            changeClass = {changeClass}
                            Classtoggle={Classtoggle}
                            noteInput={noteInput}
                            content={content}
                            SetContent ={SetContent}
                            SetNoteInput ={SetNoteInput}
                            updateTitel={updateTitel}
                            updateContent={updateContent}
                            />

                </section>
                
                
                </>

            )






}