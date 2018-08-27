import React, {Component} from 'react'
import './input.css'
import axios from 'axios'


class input extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      date: '',
      pokeImg: '',
    }

    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePokeImgSelection = this.handlePokeImgSelection.bind(this)
    

  }

  handleNameChange (val) {
    this.setState({
      name: val.target.value
    })
  }

  handleDateChange (val) {
    this.setState({
      date: val.target.value
    })
  }

handlePokeImgSelection (val) {
  this.setState({
    pokeImg: val.target.value
  })
}


  render () {
    return (
      <div>
				<div
        className='subHeadDispDiv'
        id='inputRow'
        // onChange = {this.handlePokeImgSelection}
        >
            <select
            id = 'dropDown'
            onChange = {this.handlePokeImgSelection} >
              <option value= ''></option>
              <option value="1">Bulbasaur</option>
              <option value="2">Ivysaur</option>
              <option value="3">Venusaur</option>
              <option value="43">Oddish</option>
              <option value="44">Gloom</option>
              <option value="45">Vileploom</option>
              <option value="46">Paras</option>
              <option value="47">Parascet</option>
              <option value="69">Bellsprout</option>
              <option value="70">Weepinbell</option>
              <option value="71">Victreebell</option>
              <option value="102">Exeggcute</option>
              <option value="103">Exeggutor</option>
              <option value="114">Tangela</option>
            </select>
            <input
              className='userInput'
              id='name'
              placeholder='Enter Name'
              onChange = {this.handleNameChange}
            />
            <input
              className='userInput'
              id='date'
              placeholder='MM-DD-YY'
              onChange = {this.handleDateChange}
            />
        </div>
				<div 
				className='subHeadDispDiv' 
				id='buttonRow'
        >
          <button 
          onClick = {()=>{
          const {name, date, pokeImg} = this.state
          this.props.addPoke(name, date, pokeImg)
          }
        }
          >Add new poké-plant</button>
        </div>
            </div>
        )
    }
}

export default input