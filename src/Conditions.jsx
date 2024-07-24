import React from 'react'
import Humidity from './assets/water.png'
import WindSpeed from './assets/wind.png'

const Conditions = ({clouds,temp,city,country,latitude,longitude,humidity,windSpeed}) => {


  return (
<>       
        <img src={clouds} alt="Cloudy" className='cloudy' />
        <div className="location">
            <h3 className='temp'>{temp}°C</h3>
            <h4>{city}</h4>
            <h3 className='country'>{country}</h3>
        </div>
        <div className="latlog">
            <div className="lat">
                <p>latitude</p>
                <span>{latitude}</span>
            </div>
            <div className="log">
                <p>longitude</p>
                <span>{longitude}</span>
            </div>
        </div>
        <div className="condition">
            <div className="humidity">
                <img  src={Humidity} alt="" />
                <span>{humidity}%</span>
                <p>Humidity</p>
            </div>
            <div className="wind">
                <img  src={WindSpeed} alt="" />
                <span>{windSpeed}</span>
                <p>Wind Speed</p>
            </div>
        </div>
    </>
  )
}

export default Conditions