import React from 'react'
import './header.css'
import SideImage from './side_image/side_image.js'

function header (props) {
    return (
        <div id = 'header_body'>
            <div>
                <SideImage/>
            </div>
            <div>
                <h1 id = 'headet_text'>POKE-PLANT</h1>
            </div>
            <div>
                <SideImage/>
            </div>
        </div>
    )
}

export default header