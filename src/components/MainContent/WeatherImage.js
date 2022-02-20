import React from 'react'

export const WeatherImage = ({fetchedWeatherData}) => {
            
    let imgsrc = fetchedWeatherData.weather[0].icon
    imgsrc = 'http://openweathermap.org/img/wn/' + imgsrc + '@4x.png'                  
    
    return (
        <img src={imgsrc} alt='Weather icon'/> 
    )
}

