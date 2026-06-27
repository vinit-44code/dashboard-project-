

import './wheatherBOX.css'

export default function WheatherBox({city,SetCity,callApi ,getwheatherData,wheather,setcallApi}){



                 


                    
               
function getwheatherDes(code){
	
if(code === 0)return "clear sky 🌞 "
if(code <= 3)return "partly clody⛅"
if(code <= 48)return "fog🌫️"
if(code <= 67)return "Rain  ⛈️"

return "unknown";
}









return (<>

    <div id="wheatherBox" className={`${callApi.searchDisplay?"hidden":""}`}>
                <span><p>search your city</p></span>
            <input type="text" placeholder="enter the city" value={city} onChange={(e)=>{
                        SetCity(e.target.value);

            }}/>
                <button onClick={()=>{getwheatherData()}}>search city</button>
                

                <div id="overlayer-loader" className={`${callApi.spiner?"hidden":""}`}><span></span></div>


    </div>


<div id='result-block' className={`${callApi.result?"hidden":""}`}>

    <div id="top">
        <h1 id="city-name">{city} 🌍</h1>
        <p id="temperature">temerature - {wheather.temprature} °C</p>
     
        </div>


        <div id="bottom-info">
            <p id="conditions">{getwheatherDes(wheather.condition)}</p>

        </div>
                <button onClick={()=>{
                        setcallApi({

                            spiner: true ,
                            result : true ,
                             searchDisplay :false
                        })

                }}>♻️</button>

</div>




</>)




}





