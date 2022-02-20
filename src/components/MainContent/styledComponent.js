import styled from '@emotion/styled';

export const MainDisplay = styled.div`
    display: flex;
    height: 78.5vh;
`
export const WeatherContainer = styled.div`
    display: grid; 
    grid-template-columns: 0.4fr 1fr 0.4fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "Stats1 Weather Stats2";
    width: 100vw;
    text-align: center;
`
export const LeftStats = styled.div`
    // display: grid; 
    // grid-template-columns: 1fr; 
    // grid-template-rows: 1fr; 
    // gap: 0px 0px; 
    grid-area: Stats1; 
    place-items: center;
`
export const Weather = styled.div`
    grid-area: Weather;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
export const RightStats = styled.div`
    grid-area: Stats2;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    place-items: center;
`
export const StatTitle = styled.h5`
    padding-bottom: 5px;
`
export const StatItems = styled.div`
    padding: 10px 0;
` 
export const StatUnits = styled.small`
    font-style: italic;
    padding-left: 3px;
`



export const Country = styled.div`
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
export const CountryName = styled.div`
    grid-area: Country-Name;
`
export const Coordinates = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    grid-area: coord;
`
export const MainTemperatureData = styled.div`

`
export const Temperature = styled.div`
    display: grid;
    grid-template-rows: 0.75fr 0.75fr;
    grid-template-columns: 0.75fr 1fr 0.75fr;
    grid-template-areas:
        ". . ."
        ". . .";
    place-items: center;
`
export const Weather1 = styled.div`
    grid-area: Weather1;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    ". ."
    ". ."; 
    place-items: center;
`
export const Weather2 = styled.div`
    grid-area: Weather2;
    grid-template-columns: 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
    ". ."
    ". ."; 
    place-items: center;
`

