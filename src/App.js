import React, { Component } from 'react';
import NavBar from './navbar/navbar';
import BodySection from './body-section/body-section';
import About from './about/about';

import style from './style.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
