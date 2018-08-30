import React, {Component} from 'react' 
import './postcard.css'
import axios from 'axios'
import { version } from 'punycode';

class postcard extends Component {
	constructor (props) {
		super (props)

		this.state = {
			pokeURL: '',
			newDate: ''
		}
		this.handleWaterClick = this.handleWaterClick.bind(this)
		this.newDate = this.newDate.bind(this)
		
	}

	componentDidMount() {
			console.log('has FIREEDifgoygfu')
		axios.get(`http://pokeapi.co/api/v2/pokemon/${this.props.pokeImg}`)
		.then((res) => {
			this.setState({pokeURL: res.data.sprites.front_default})
		})
	}

	componentDidUpdate(prevprops) {
		if (prevprops.pokeImg !== this.props.pokeImg) {
		axios.get(`http://pokeapi.co/api/v2/pokemon/${this.props.pokeImg}`)
		.then((res) => {
			this.setState({pokeURL: res.data.sprites.front_default})
		})}
	}

	handleWaterClick () {
		axios.put('/api/pokeplantlist', {newWateredDate: this.props.date})
		.then()
	}


	newDate (val) {
		this.setState({
			newDate: val.target.value
		})
	}

	
	render () {
		let {newDateWatered} = this.state
		return (
			<div className = 'pokePostcard'>
				<section id = 'top_section'>
					<div id = 'poke_img'>
						<img src={this.state.pokeURL} alt="Pokémon"/>
					</div>
					<div id = 'info_box'>
						<div id =  'name'>
							<p>{this.props.name}</p>
						</div>
						<div id = 'date'>
							<p>last waterd</p>
							<p>{this.props.date}</p>
						</div>
					</div>
				</section>
				<section id = 'bottom section'>
					<button
					onClick = {() => {
						console.log('something')
						console.log(this.state)
						let {newDate} = this.state
						this.props.waterPokePlant(newDate, this.props.id)
					}}
					>watered on</button>
					<input 
					placeholder = 'Enter new date'
					onChange = {this.newDate}
					/>
					<button
					onClick = {() => {
						this.props.deathProtocol(this.props.id)
					}}
					>R.I.P</button>
				</section>
			</div>
		)
	}
}	

export default postcard