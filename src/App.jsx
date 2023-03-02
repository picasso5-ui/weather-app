import React, { useState } from 'react';
import './App.css'


const api = {
  key:"d7574dbe8e6d37cbe0a38ab35cd54a0a",
  base:"https://api.openweathermap.org/data/2.5/"
}
  function App() {

    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState({});


    const search = (e)=>{
      if(e.key==="Enter"){
        
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
           .then(res=>res.json())
        .then(data=>{
          setWeather(data);
          setQuery('')
         
        })
     
      
      
      
      
          
       
         
      }

      
    }





        const dateBuilder = ()=>{
          
          let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const days = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

         
          

          let today= new Date()

          //Function To Convert Day Integer to String
          
         
          let day= days[today.getDay()];
          let month =months[today.getMonth()]
          let date =today.getDate();
          let year = today.getFullYear();
          
          
          return `${day} ${date} ${month} ${year}`
          
        }







          
        

  return (
    <div className="app">
      <main>
        <div className="search-box">
           <input 
              type="text" 
              placeholder='search'
              className='search-bar'
           onChange={e=>setQuery(e.target.value)}
           value={query}
           onKeyDown={search}
           />
        </div> 
        {(typeof weather.main != "undefined") ? (
          <div>
          
          <div className="location-box">
        <div className="location"> {weather.name} ,{weather.sys.country} </div>
        <div className="date">{dateBuilder()}</div>
        </div>

        <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}ºC</div>
        <div className='weather'>{weather.weather[0].main}</div>
        </div>
          </div>
          
          
        ):('')}
       
        
      </main>
        
    </div>
  )
}
export default App;
