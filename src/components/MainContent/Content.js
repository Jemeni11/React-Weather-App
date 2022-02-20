import React from 'react';
import { MainDisplay, WeatherContainer, LeftStats, Weather, RightStats, StatItems,
StatTitle, StatUnits, MainTemperatureData, Temperature } from './styledComponent'
import { Tooltip } from '@mui/material';
import { WeatherImage } from './WeatherImage';

const epochTimeConverter = (utcSeconds) => new Date(utcSeconds * 1000)

export default function Content({fetchedWeatherData}) {



    return (
        <MainDisplay>
            {fetchedWeatherData && fetchedWeatherData.cod === 200 ? 
                <WeatherContainer>
                    <LeftStats>
                        <div className="wind">
                            <StatItems>
                                <StatTitle>Wind Speed</StatTitle>
                                {fetchedWeatherData.wind.speed} 
                                <StatUnits>metre/sec</StatUnits>
                            </StatItems>
                            <StatItems>
                                <StatTitle>Wind direction (degrees)</StatTitle>
                                {fetchedWeatherData.wind.deg} 
                                <StatUnits>°</StatUnits>
                            </StatItems>
                            <StatItems>
                                <StatTitle>Wind Gust</StatTitle>
                                {fetchedWeatherData.wind.gust}
                            </StatItems>
                        </div>
                        {/* {epochTimeConverter(fetchedWeatherData.sys.sunrise).toLocaleTimeString()} <br/>
                        
                        {epochTimeConverter(fetchedWeatherData.sys.sunset).toLocaleTimeString()} <br/>
                        
                        <div className="clouds">
                            {fetchedWeatherData.clouds.all} <br/>
                        </div> */}
                    </LeftStats>
                    <Weather>
                        <div className="weather">
                            <WeatherImage fetchedWeatherData={fetchedWeatherData}/>
                            {fetchedWeatherData.weather[0].id} <br/>
                            {fetchedWeatherData.weather[0].main} <br/>
                            {fetchedWeatherData.weather[0].description} <br/>
                            {fetchedWeatherData.base} <br/>
                        </div>
                        {epochTimeConverter(fetchedWeatherData.dt).toDateString()}
                        <MainTemperatureData>
                            
                            {/* <h2>{fetchedWeatherData.main.feels_like}</h2> */}
                            <Temperature>
                                <h2>{fetchedWeatherData.main.temp_min} °c</h2>
                                <h2>{Math.round(fetchedWeatherData.main.temp)} °c</h2>
                                <h2>{fetchedWeatherData.main.temp_max} °c</h2>
                                <StatUnits>Temperature Min.</StatUnits>
                                <StatUnits>Temperature</StatUnits>
                                <StatUnits>Temperature Max.</StatUnits>
                            </Temperature>
                        </MainTemperatureData>
                    </Weather>
                    <RightStats>
                        <StatItems>
                            <StatTitle>Visibility</StatTitle>
                            {fetchedWeatherData.visibility}
                        </StatItems>
                        <StatItems>
                            <Tooltip title="Atmospheric pressure on the sea level">
                                <StatTitle>Pressure</StatTitle>
                            </Tooltip> 
                            {fetchedWeatherData.main.pressure}
                            <StatUnits> hPa</StatUnits>
                        </StatItems>
                        <StatItems>
                            <Tooltip title="Humidity, %"><StatTitle>Humidity</StatTitle></Tooltip>
                            {fetchedWeatherData.main.humidity}
                            <StatUnits> %</StatUnits>
                        </StatItems>
                        {/* <div className="sys">
                            {fetchedWeatherData.sys.type} <br/>
                            {fetchedWeatherData.sys.id} <br/>
                        </div>             */}
                    </RightStats>

                    {/* 
                    <Country>
                        <CountryName>
                            <h2>{fetchedWeatherData.name}</h2>
                            <h3>{fetchedWeatherData.sys.country}</h3>
                        </CountryName>
                        <Coordinates>
                            <h3>{fetchedWeatherData.coord.lon}</h3>
                            <h3>{fetchedWeatherData.coord.lat}</h3>
                            <StatUnits>Longitude</StatUnits>
                            <StatUnits>Latitude</StatUnits>
                        </Coordinates> 
                        {fetchedWeatherData.timezone} 
                        {fetchedWeatherData.cod}
                        {fetchedWeatherData.id} 
                    </Country>
                    */}
                </WeatherContainer> : null
            }
        </MainDisplay>
    )
}
