import React, { useState } from 'react';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';

export default function Header({setfetchedWeatherData}) {
    const [input, setInput] = useState('')
    const getInput = () => input

    const headerStyle = {
        margin: 'auto',
        padding: 0,
        paddingTop: '10px'
    }    

    const Title = styled.h2`
        margin: auto;
        text-align: center;
        padding: 0.15rem;
    `

    const SearchContainer = styled.div`
        border: 0.5px solid lightgray;
        /* height: 15vh; */
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
        const api_key = '77854068949f3f3b8a9c6bcd807b0a70'
        const url_base = 'https://api.openweathermap.org/data/2.5/'

        // Example: http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=77854068949f3f3b8a9c6bcd807b0a70
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
                <SearchButton onClick={() => weatherFetch(getInput())}>
                    <SearchIcon />
                </SearchButton>
            </SearchContainer>
            <Title>?</Title>
        </div>
    )
}
