import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/header/header.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
