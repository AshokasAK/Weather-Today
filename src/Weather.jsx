import React, { useEffect, useState } from 'react'
import './Weather.css'
import Search  from './Search'
import Conditions from './Conditions'
import Cloudy from './assets/cloudy.png'
import Clouds from './assets/clouds.png'
import ScatteredClouds from './assets/scattered.png'
import Brokken from './assets/brokken.png'
import RainnShower from './assets/rainshower.png'
import Rain from './assets/rain.png'
import Thunder from './assets/thunder.png'
import Snow from './assets/snow.png'
import Mist from './assets/mist.png'


const Weather = () => {
    let apikey = "2980042e61c3612964589ea1c5e5896a";

    const [clouds,setClouds ]=useState('')
    
    const sky = {
        "01d":Cloudy,
        "01n":Cloudy,
        "02d":Clouds,
        "02n":Clouds,
        "03d":ScatteredClouds,
        "03n":ScatteredClouds,
        "04d":Brokken,
        "04n":Brokken,
        "09d":RainnShower,
        "09n":RainnShower,
        "10d":Rain,
        "10n":Rain,
        "11d":Thunder,
        "11n":Thunder,
        "13d":Snow, 
        "13n":Snow,
        "50d":Mist, 
        "50n":Mist
    }    
        
    const [cityName,setCityName] = useState('Tiruppur')
    const [temp,setTemp] = useState(0)
    const [city,setCity] = useState('Tiruppur')
    const [country,setCountry] = useState('')
    const [latitude,setlatitude] = useState(0)
    const [longitude,setlongitude] = useState(0)
    const [humidity,setHumidity] = useState(0)
    const [windSpeed,setWindSpeed] = useState(0)
    const [loading,setLoading] = useState(false)
    const [notACity,setNotACity] = useState(false)
    const [error,setError] = useState(null)


 const handleLocation = async()=>{
        setLoading(true)
    setNotACity(false)

   const url =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=Metric`)

   console.log(url.ok)
   const res =await url.json()
   if(res.cod ===200){
   try{
    console.log(res)

    setLoading(false)
    setTemp(Math.floor(res.main.temp))
    setCity(res.name)
    setCountry(res.sys.country)
    setlatitude(res.coord.lat)
    setlongitude(res.coord.lon)
    setHumidity(res.main.humidity)
    setWindSpeed(res.wind.speed)
    setClouds(sky[res.weather[0].icon
    ])
}
   catch(err){
        console.log(err.msg)
   }
//    finally{
//     // setNotACity(false)
//    }
 }else{
    setError(res.message.toUpperCase())
    setNotACity(true)
}
}

 useEffect(
    ()=>{
        handleLocation()
    },[]
 )

  return (
    <>
    <div className="container">

       <Search
        cityName = {cityName}
         setCityName = {setCityName}
         handleLocation = {handleLocation}
        />
        {!loading && !notACity && <Conditions
         clouds = {clouds}
         temp = {temp}
         city = {city}
         country = {country}
         latitude = {latitude}
         longitude = {longitude}
         humidity = {humidity}
        windSpeed = {windSpeed}
         />}
{loading && !notACity && <div className='loading'>Loading...</div>}

{notACity && <div className="notacity">You entered a wrong place,you might mispelled.Check your spelling  </div>}
{loading && notACity &&<div className="error">{error}</div>}

         </div>
    </>
  )
}

export default Weather