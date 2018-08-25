import React from 'react'
import './header.css'

function header (props) {
    return (
        <div id = 'header_body'>
            <div className = 'header_div' id = 'left_img_div'>
            <img src="https://vignette.wikia.nocookie.net/videogames-fanon/images/4/44/Bulbasaur_Vines.png/revision/latest?cb=20150622002329" alt="bulbasaur"/>
        </div>
        <div className = 'header_div' >
            <h1 id = 'header_text'>poke-plant</h1>
            
        </div>
        <div className = 'header_div' id = 'right_img_div'>
            <img id = 'header_img' src="https://pre00.deviantart.net/5bc1/th/pre/f/2016/178/c/1/043_oddish_by_tzblacktd-da7v8wj.png" alt="Oddish, and adorable Grass-type Pokemon"/>
            </div>
        </div>
    )
}

export default header