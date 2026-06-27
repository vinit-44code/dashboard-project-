
//import { useState } from 'react';

import Sidebar from "./sidebar/sidebar";
import MainDisplay from "./mainDisplay";

export default function Maincontainer({active,setactive}){


return(
<>

        <div className='mainContainer'>
                
            <Sidebar

            active = {active}
                setactive = {setactive}
            
            />
            <MainDisplay
            active = {active}
                setactive = {setactive}
            />

        </div>


</>

)

}