import './noteList.css'

import NoteItem from "./noteItems"


export default function NoteListBox({noteList,changeClass, Classtoggle,updateTitel,updateContent,setNoteList,SetsearchNote,searchNote,realList}){



let searchInput =(event) =>{

SetsearchNote(event.target.value)

        
        
}




return(<>

                        <div>

                                                   <div id='searchBar'>
                <input type="text" placeholder="enter the task" id="searchInput" value={searchNote} onChange={searchInput}/>
                <button id="searchButton" onClick={()=>{}}>🔍</button>
            </div>


                        <div id="notes-list">

                            <button id="add-notes-btu" onClick={changeClass}> + Create Note</button>


        {
                                 noteList.map((notes)=>{
                                         return <NoteItem 
                                   
                                         key = {notes.id}
                                         note ={notes}
                                         updateTitel={updateTitel}
                                         updateContent ={updateContent}
                                         changeClass={changeClass}
                                         Classtoggle={Classtoggle}
                                         noteList = {realList}
                                         setNoteList = {setNoteList}
                                         
                                        />

                            
                                 })
                                }       


                         

                        </div>
                             
                                </div>

             

</>
)

}