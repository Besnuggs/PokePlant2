import React, { Component } from 'react';
// import axios from 'axios'
import Header from './components/header/header.js'
import Input from './components/Input/input.js'
import Display from './components/display/display.js'
import './reset.css'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokePlants: []
    }

    this.addPoke = this.addPoke.bind(this)
  }

  addPoke(name, date, pokeImg) {
    axios.post('/api/pokeplants', {
      name: name,
      date: date,
      pokeImg: pokeImg
    })
      .then((res) => this.setState({ pokePlants: res.data }))
  }







render() {
  console.log('CL from app.js:', this.state)
  return (
    <div className="App">
      <Header />
      <Input
        handleClick={this.handleClick}
        addPoke={this.addPoke} />
      <Display
        pokePlants={this.state.pokePlants} />
    </div>
  );
}
}

export default App;
