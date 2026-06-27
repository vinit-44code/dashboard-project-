

import './menuBtu.css'


export default function menuButtons({active,setactive}){


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



                return(
                    <>

                    <div className='btuContainer'>

                      
          <button className={`menuBtu ${active.notes?"":"active"}`}  onClick={changeChoiceNote}>NOTES📋</button>
          <button className={`menuBtu ${active.task?"":"active"}`}  onClick={changeChoiceTask}>TASKS✅</button>
          <button className={`menuBtu ${active.wheather?"":"active"}`}  onClick={changeChoiceWheater} id="weather">WEATHER🌤️</button>

                      
                    </div>


                    </>
                )



}