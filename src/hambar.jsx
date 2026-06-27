import { useState } from 'react'
import './hambar.css' 


export default function Hembar({active,setactive }){




 let [toggle,settoggle] = useState("true") ;


 let changeState=()=>{

settoggle(
        ()=>{
    if(toggle===true){

            return false ;
        
         }else {
            return true ;
         }

        }
    
)

 }


        let changeChoiceNote = () =>{
              setactive({

                task : true,
                notes : false,
                wheather : true,

              })
        } 
        let changeChoiceTask = () =>{

              setactive({

                 task : false,
                notes : true,
                wheather : true,

              })

        }   
        let changeChoiceWheater = () =>{

              setactive({

                 task : true,
                notes : true,
                wheather : false,

              })

        }






return(<>

<div  id ="hem-bar">
    <div className="toggle-off" >



    <button id="hem-btu"  onClick={changeState}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg></button>

        </div>

        <div className={`toggle-on ${toggle?"hidden":""} `}>

         <span className="menu">MENU</span>

           <button className={`menuBtu ${active.notes?"":"active"}`}  onClick={changeChoiceNote}>NOTES📋</button>
          <button className={`menuBtu ${active.task?"":"active"}`}  onClick={changeChoiceTask}>TASKS✅</button>
          <button className={`menuBtu ${active.wheather?"":"active"}`}  onClick={changeChoiceWheater} id="weather">WEATHER🌤️</button>


            <span className="menu">TAGS🏷️</span>

           <button className="menuBtu">🟢 WORK</button>
       <button className="menuBtu">🟠 PERSONAL</button>
            <button className="menuBtu">🔴 URGENT❗</button>


        </div>


    </div>


</>)


}