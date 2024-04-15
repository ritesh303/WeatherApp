import './App.css'
import Current_weather from './component/current_weather/Current_weather'
import Search from './component/search/Search'
import {weather_API_url,weather_API_key} from '../src/component/search/api'
import { useState } from 'react'
import ForecaseWeather from './component/forecast_weather/ForecaseWeather'

function App() {

  const [currentweather,setCurrentweather]=useState(null)
  const [forecast,setForecast]=useState(null)

  const handleonsearchchange=(searchdata)=>{
    const [lat,lon]=searchdata.value.split(" ")
    const currentWeatherFetch=fetch(`${weather_API_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_API_key}&units=metric`)

    const forecastWeatherFetch=fetch(`${weather_API_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_API_key}&units=metric`)

    Promise.all([currentWeatherFetch,forecastWeatherFetch])
    .then(async(response)=>{
      const weatherResponse=await response[0].json();
      const forecastResponse=await response[1].json();
      setCurrentweather({city:searchdata.label, ...weatherResponse})
      setForecast({ city:searchdata.label, ...forecastResponse})
    })
    .catch((err)=>console.log(err))
  }
  console.log("currentweather----",currentweather)
  console.log("forecast----",forecast)
  return (
    <>
      <div className='container'>
        <Search onSearchChange={handleonsearchchange}/>
        {currentweather && <Current_weather data={currentweather}/>}
        {forecast && <ForecaseWeather newData={forecast}/>}
      </div>
    </>
  )
}

export default App
