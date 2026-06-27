import { useState ,useEffect} from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import HeaderBlock from './header'
import Maincontainer from './mainContainer'
import Hembar from './hambar'

function App() {
  

       const [active,setactive] = useState({

                task : false,
                notes : true,
                wheather : true,

     });



const [time, settime] = useState(

    new Date().toLocaleTimeString()
);

useEffect(()=>{
    const intervaild = setInterval(()=>{
        settime(new Date().toLocaleTimeString());
    
    },1000);
    return () => clearInterval(intervaild);


},[]);



  return (
    
    <>
    <HeaderBlock
    
    time={time}/>
      <Hembar 
      active = {active}
      setactive = {setactive}
      
      time ={time}
      setTime = {settime}
      
      />
    <Maincontainer 
    active = {active}
     setactive = {setactive}
    
    />
    
    </>
  )
}

export default App
PopStateEvent