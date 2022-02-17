import React from 'react';
import styled from '@emotion/styled';

export default function MainContent({fetchedWeatherData}) {
    const mainStyle = {
        display: "flex",
        height: "80vh",
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
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `

    return (
        <div style={mainStyle}>
            {fetchedWeatherData && 
                <WeatherContainer>
                    <div className="date">
                        {dateBuilder.day()} {dateBuilder.date()} {dateBuilder.month()} {dateBuilder.year()} <br/>
                    </div>
                    ---------------------------------
                    <div className='coord'>
                        <p>Longitude: {fetchedWeatherData.coord.lon}</p>
                        <p>Latitude: {fetchedWeatherData.coord.lat}</p>
                    </div>
                    ---------------------------------
                    <div className="weather">
                        {fetchedWeatherData.weather[0].id} <br/>
                        {fetchedWeatherData.weather[0].main} <br/>
                        {fetchedWeatherData.weather[0].description} <br/>
                        {fetchedWeatherData.weather[0].icon} <br/>
                        {fetchedWeatherData.base} <br/>
                    </div>
                    ---------------------------------
                    <div className="main">
                        {Math.round(fetchedWeatherData.main.temp)} °c <br/>
                        {fetchedWeatherData.main.feels_like} °c <br/>
                        {fetchedWeatherData.main.temp_min} °c <br/>
                        {fetchedWeatherData.main.temp_max} °c <br/>
                        {fetchedWeatherData.main.pressure} <br/>
                        {fetchedWeatherData.main.humidity} %<br/>
                    </div>
                    ---------------------------------
                    {fetchedWeatherData.visibility} <br/>
                    ---------------------------------
                    <div className="wind">
                        {fetchedWeatherData.wind.speed} <br/>
                        {fetchedWeatherData.wind.deg} <br/>
                        {fetchedWeatherData.wind.gust} <br/>
                    </div>
                    ---------------------------------
                    <div className="clouds">
                        {fetchedWeatherData.clouds.all} <br/>
                    </div>
                    ---------------------------------
                    {fetchedWeatherData.dt} <br/>
                    <div className="sys">
                        {fetchedWeatherData.sys.type} <br/>
                        {fetchedWeatherData.sys.id} <br/>
                        {fetchedWeatherData.sys.country} <br/>
                        {fetchedWeatherData.sys.sunrise} <br/>
                        {fetchedWeatherData.sys.sunset} <br/>
                    </div>
                    ---------------------------------
                    {fetchedWeatherData.timezone} <br/>
                    ---------------------------------
                    {fetchedWeatherData.id} <br/>
                    ---------------------------------
                    {fetchedWeatherData.name} <br/>
                    ---------------------------------
                    {fetchedWeatherData.cod} <br/>
                </WeatherContainer>
            }
        </div>
    )
}
