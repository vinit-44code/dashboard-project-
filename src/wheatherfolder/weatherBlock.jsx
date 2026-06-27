
import {  useState } from 'react'
import './wheatherblock.css'
import WheatherHeader from './wheatherHead'
import WheatherBox from './wheatherInput'

export default function WheatherBlock({active}){


    let [city,SetCity] = useState("");
   
let [wheather,SetWheather] = useState('');

let [callApi,setCallAPi] = useState({
    spiner: true ,
    result : true ,
    searchDisplay :false
});

    async function getwheatherData(){


        setCallAPi({

            spiner: false ,
    result : true ,
    searchDisplay :false

        });
	
	let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
         let urlweather =  ''

	try{
      let res = await fetch(url);
      
     let data = await res.json();
     

console.log(data);


            if(data.results){
                let lati = data.results[0].latitude ;
let lot = data.results[0].longitude;

			console.log(`${city} latitude = ${lati}`);
			
			console.log(`${city} lonitude = ${lot}`);

          urlweather = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${lot}&current_weather=true` ;
            }else{
                alert("city  not found")
            }
	
	}catch{
				console.log("not conneted ");
	}




    


try{

	let resWeather = await fetch(urlweather) ;
            

	let wheatherData =  await resWeather.json() ;
    
	let temprature = wheatherData.current_weather.temperature;
	let condition = wheatherData.current_weather.weathercode ;

    SetWheather( {
  
        temprature,
        condition

    });

      
	}catch{
		console.log("api is not found")	}

          setCallAPi({   
     spiner: true ,
    result : false ,
    searchDisplay :true
});

	
}




            return(

                <>
                <section id="wheaterBlock" className={`${active.wheather?"hidden":""}`}>

                    <WheatherHeader/>

                <WheatherBox
               
                SetCity ={SetCity}
                city = {city}
              getwheatherData = {getwheatherData}
              wheather={wheather}
              callApi ={callApi}
              setcallApi={setCallAPi}
                />
                
                </section>
                
                
                </>

            )






}