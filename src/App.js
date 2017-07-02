import React, { Component } from 'react';
import NavBar from './navbar/navbar';
import BodySection from './body-section/body-section';
import style from './style.css';

import './App.css';

class App extends Component {
  render() {
    //noinspection Eslint
    return (
      <div className="App">
        <NavBar />
        <BodySection />
      </div>
    );
  }
}

export default App;
