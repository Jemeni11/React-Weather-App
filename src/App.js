import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent/MainContent';

function App() {
  const [fetchedWeatherData, setfetchedWeatherData] = useState(null)

  const appStyle = {
    display: "flex",
    flexFlow: "column",
  }

  return (
    <div style={appStyle}>
      <Header setfetchedWeatherData={setfetchedWeatherData}/>
      <MainContent fetchedWeatherData={fetchedWeatherData}/>
      <Footer/>
    </div>
  );
}

export default App;
