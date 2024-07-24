import React from 'react'
import './Weather.css'
import SearchIcon from './assets/search.png'


const Search = ({cityName,setCityName,handleLocation}) => {
  return (
    <>
    <div className="search">
            <input
             type="text" 
             placeholder='Enter location'
             value={cityName}
             onChange={(e)=>setCityName(e.target.value)
             }
             />
             <img 
             src={SearchIcon} 
             alt="search" 
             onClick={handleLocation}
             />
        </div>
    </>
  )
}

export default Search