import React from 'react';
import styled from '@emotion/styled';

// const CountryContainer = styled.div`
//     display: grid; 
//     grid-template-columns: 1fr 1fr 1fr; 
//     grid-template-rows: 1.5fr 2fr; 
//     gap: 0px 0px; 
//     grid-template-areas: 
//         ". Weather ."
//         "Stats1 Country Stats2"; 
// `

const epochTimeConverter = (utcSeconds) => new Date(utcSeconds)

export default function MainContent({fetchedWeatherData}) {
    const mainStyle = {
        display: "flex",
        height: "78.5vh",
    }

    const dateBuilder = {
        d: new Date(),
        months: [
            "January", "February", "March", "April", 
            "May", "June", "July", "August", "September",
            "October", "November", "December"],
        days: [
            "Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"],
        day(){
            return this.days[this.d.getDay()]
        }, 
        date(){
            return this.d.getDate()
        },
        month(){
            return this.months[this.d.getMonth()]
        }, 
        year(){
            return this.d.getFullYear()
        },
    }

    const WeatherContainer = styled.div`
        display: grid; 
        grid-template-columns: 0.7fr 1fr 0.7fr; 
        grid-template-rows: 1.5fr 2fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "Weather1 Weather Weather2"
            "Stats1 Country Stats2";
        width: 100vw;
        text-align: center;
    `
    const Weather1 = styled.div`
        grid-area: Weather1;
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". ."
            ". ."; 
        place-items: center;
    `
    const Weather2 = styled.div`
        grid-area: Weather2;
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". ."
            ". ."; 
        place-items: center;
    `
    const LeftStats = styled.div`
        display: grid; 
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". ."
            ". ."; 
        grid-area: Stats1; 
        place-items: center;
    `
    const StatItems = styled.div`
        padding: 10px 0;
    ` 
    const StatUnits = styled.small`
        font-style: italic;
        padding-left: 3px;
    `
    const StatTitle = styled.h5`
        padding-bottom: 5px;
    `
    const RightStats = styled.div`
        grid-area: Stats2;
        grid-template-columns: 1fr; 
        grid-template-rows: 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            ". ."
            ". ."; 
        place-items: center;
    `
    const Weather = styled.div`
        grid-area: Weather;
        justify-content: center;
        display: flex;
        flex-direction: column;
    `
    const Country = styled.div`
        display: grid; 
        grid-template-columns: 1fr 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "Country-Name Country-Name Country-Name"
            "coord coord coord"
            ". . ."
            ". . ."
            ". . ."; 
        grid-area: Country;
    `
    const CountryName = styled.div`
        grid-area: Country-Name;
    `
    const Coordinates = styled.div`
        display: grid; 
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        place-items: center;
        grid-area: coord;
    `
    const MainTemperatureData = styled.div`
        
    `
    const Temperature = styled.div`
        display: grid;
        grid-template-rows: 0.75fr 0.75fr;
        grid-template-columns: 0.75fr 1fr 0.75fr;
        grid-template-areas:
            ". . ."
            ". . .";
        place-items: center;
    `

    return (
        <div style={mainStyle}>
            {fetchedWeatherData ? 
                <WeatherContainer>
                    <Weather1>
                        {epochTimeConverter(fetchedWeatherData.sys.sunrise).toUTCString()} <br/>
                        
                        {epochTimeConverter(fetchedWeatherData.sys.sunset).toISOString()} <br/>
                        
                        <div className="clouds">
                            {fetchedWeatherData.clouds.all} <br/>
                        </div>
                    </Weather1>
                    <Weather>
                        <div className="weather">
                            {fetchedWeatherData.weather[0].id} <br/>
                            {fetchedWeatherData.weather[0].main} <br/>
                            {fetchedWeatherData.weather[0].description} <br/>
                            {/* {fetchedWeatherData.weather[0].icon} <br/>
                            {fetchedWeatherData.base} <br/> */}
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
                            

                            <h2>{fetchedWeatherData.main.pressure} hPa</h2>
                            <h2>{fetchedWeatherData.main.humidity} %</h2>
                             {/* Atmospheric pressure on the sea level, hPa */}
                            
                        </MainTemperatureData>
                    </Weather>
                    <Weather2>
                    {fetchedWeatherData.visibility} <br/>
                    </Weather2>
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
                    </LeftStats>
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
                        {fetchedWeatherData.id} 
                        {/* {fetchedWeatherData.cod} */}
                        
                    </Country>
                    <RightStats>
                        <div className="sys">
                            {fetchedWeatherData.sys.type} <br/>
                            {fetchedWeatherData.sys.id} <br/>

                        </div>
                    </RightStats>
                </WeatherContainer> : null
            }
        </div>
    )
}
