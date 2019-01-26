import React, { Component } from 'react';

import './style/main.css';
import Header from './weather/Header';
import Footer from './weather/Footer';
import CityCondition from './weather/CityCondition';

class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
      <Header />
      
      <main>
      <CityCondition />
      </main>
      <Footer />
      </div>
    );
  }
}

export default App;
