import React, { Component } from 'react';
// import axios from 'axios'
import Header from './components/header/header.js'
import Input from './components/Input/input.js'
import Display from './components/display/display.js'
import Footer from './components/footer/footer.js'
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
    this.waterPokePlant = this.waterPokePlant.bind(this)
    this.deathProtocol = this.deathProtocol.bind(this)
  }

  addPoke(name, date, pokeImg) {
    axios.post('/api/pokeplants', {
      name: name,
      date: date,
      pokeImg: pokeImg
    
    })
      .then((res) => this.setState({ pokePlants: res.data }))
  }


waterPokePlant(newDate, id){
  axios.put('/api/pokeplants', {newDate, id})
  .then((res) => this.setState({pokePlants: res.data}))
}


deathProtocol (id) {
  axios.delete(`/api/pokeplants/${id}`)
  .then((res) => {
    this.setState({pokePlants: res.data})
  } )
}


render() {
  return (
    <div className="App">
      <Header />
      <Input
        handleClick={this.handleClick}
        addPoke={this.addPoke} />
      <Display
        pokePlants={this.state.pokePlants}
        waterPokePlant = {this.waterPokePlant}
        deathProtocol = {this.deathProtocol}
         />
         <Footer/>

    </div>
  );
}
}

export default App;
