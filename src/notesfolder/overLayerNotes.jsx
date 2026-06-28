
//import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'


export default function OverLayerNotes({noteList,Setnotes, changeClass,Classtoggle,noteInput,content,updateTitel,updateContent,SetNoteInput, SetContent}){



let updateNoteList = ()=>{


  let  newNote = {

        id : uuidv4(),
        title : noteInput,
        content : content,
        createdAt : new Date().toLocaleDateString(),
        upDateTime : new Date().toLocaleDateString()

}

Setnotes([...noteList,newNote]);

;

console.log(noteList)


SetContent("");
SetNoteInput("");
changeClass();

}







    return(<>

<div id="overlayer" className={Classtoggle}>

<div className="newNote">
    
    
    
<input type="text" id="titel" placeholder="titel" value={noteInput} onChange={updateTitel}/>
<textarea name="content" id="notecontent" placeholder="start writing" value={content} onChange={updateContent}></textarea>
<span id='controls'>
<button onClick={updateNoteList}>➕ADD</button>
<button id='close' onClick={changeClass}>X</button>
</span>



<span id='date-time'>   
<p>created on :{noteList.createdAt}</p>
<p> last update :{noteList.upDateTime}</p>
</span>

</div>


</div>




    </>)



}