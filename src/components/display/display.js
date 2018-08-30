import React, {Component} from 'react' 
import './display.css'
import Postcard from 
'../postcard/postcard.js'
import Footer from '../footer/footer.js'

class display extends Component {
    constructor (props) {
        super(props)

        this.state = {
		
			pokeURL: ''
		}
		
	
	}



  render (props) {
		let {pokePlants} = this.props
		if (pokePlants.length > 0) {
			let pokeTemplate = pokePlants.map((pokePlant, index) => {
				let {name, date, pokeImg} = pokePlant
				return (
					<div>
						<Postcard
						key = {index}
						name = {name}
						date = {date}
						pokePic = {this.state.pokeURL}
						handleWaterClick = {this.handleWaterClick}
						pokeImg = {pokeImg}
						waterPokePlant = {this.props.waterPokePlant}
						id = {pokePlant.id}
						deathProtocol = {this.props.deathProtocol}
						/>
						<Footer/>
						</div>
				)
			})
			return pokeTemplate
		}
		else {
			return (<div>
				<Footer/>
			</div>)
		}

	}
}

export default display