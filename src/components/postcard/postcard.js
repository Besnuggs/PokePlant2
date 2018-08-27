import React, {Component} from 'react' 
import './postcard.css'
import axios from 'axios'

class postcard extends Component {
	constructor (props) {
		super (props)

		this.state = {
			pokeURL: ''
		}
		this.handleWaterClick = this.handleWaterClick.bind(this)
		
	}

	componentDidMount() {
		axios.get(`http://pokeapi.co/api/v2/pokemon/${this.props.pokeImg}`)
		.then((res) => {
			this.setState({pokeURL: res.data.sprites.front_default})
		})
	}

	handleWaterClick () {
		axios.put('/api/pokeplantlist', {newWateredDate: this.props.date})
		.then()
	}

	render () {
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
					onClick = {this.handleWaterClick}
					>water</button>
					<button>R.I.P</button>
				</section>
			</div>
		)
	}
}	

export default postcard