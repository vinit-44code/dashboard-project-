
import MenuButtons from "./menuButton"
import TagButtons from "./tagsButton"
import './sideBar.css'
export default function sidebar({active,setactive}){

    return(
<>

            <section id="side-bar">

                        <p>Menu</p>
                        <MenuButtons
                        
                        active = {active}
                setactive = {setactive}
                        
                        />
                    <hr/>
                        <p>TAGS</p>
                        <TagButtons/>


           </section>
</>

    )


}