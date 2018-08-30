import React from 'react'
import { prependOnceListener } from 'cluster';

function side_image (props) {
    return (
        <div>
            <img src={props.img1} alt=""/>
        </div>
    )
}

export default side_image