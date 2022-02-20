import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

const DUMMYDATA = {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"13n"}],"base":"stations","main":{"temp":283.06,"feels_like":279.08,"temp_min":281.65,"temp_max":284.58,"pressure":1011,"humidity":58},"visibility":10000,"wind":{"speed":10.8,"deg":270,"gust":16.98},"clouds":{"all":7},"dt":1645094641,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1645081862,"sunset":1645118298},"timezone":0,"id":2643743,"name":"London","cod":200}

export default function Header({setfetchedWeatherData}) {
    const [input, setInput] = useState('')
    const getInput = () => input

    const headerStyle = {
        margin: 'auto',
        padding: 0,
        paddingTop: '10px',
        height: '17vh',
    }    

    const Title = styled.h2`
        margin: auto;
        text-align: center;
        padding: 0.15rem;
    `

    const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        height: 25px;
        width: 70vw;
        padding: 0.15rem;
        display: flex;
    `

    const Input = styled.input`
        width: inherit;
        border: none;
    `

    const SearchButton = styled.button`
        background-color: white; 
        font-size: 1.55rem; 
        border: none;
    `

    const weatherFetch = input => {
        const api_key = ''
        const url_base = 'https://api.openweathermap.org/data/2.5/'

        // Example: http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=
        fetch(`${url_base}weather?q=${input}&units=metric&APPID=${api_key}`)
        .then(res => res.json())
        .then(weatherdata => setfetchedWeatherData(weatherdata))
        // .then(data => console.log(data))
        .catch(err => console.error(err))
    }

    return (
        <div style={headerStyle}>
            <Title>What's the weather like in</Title>
            <SearchContainer>
                <Input value={input} onInput={e => setInput(e.target.value)}/>
                {/* <Input onInput={e => setter(e.target.value)}/> */}
                {/* <SearchButton onClick={() => weatherFetch(getInput())}> */}
                <SearchButton onClick={() => setfetchedWeatherData(DUMMYDATA)}>
                    <SearchIcon />
                </SearchButton>
            </SearchContainer>
            <Title>?</Title>
        </div>
    )
}
