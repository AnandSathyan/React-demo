import React from 'react';
import Campaign from './components/Campaign';
import Winners from './components/WinnerData';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css'
import PopularCampaign from './components/PopularCampaign';
const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <PopularCampaign/>
      <Campaign/>
      <Winners />
      <Footer />
    </div>
  );
};

export default App;
