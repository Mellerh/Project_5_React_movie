import React from 'react';
import '../helpers/NotFound.css'

function NotFound() {
    return(
        <div style={{height: '60vh'}}>
            <h3 style={{marginBottom: '2rem'}}>Not found @-@</h3>
            <div data-js="astro" className="astronaut" style={{left: 'calc(50% - 125px)'}}>
                <div className="head"></div>
                <div className="arm arm-left"></div>
                <div className="arm arm-right"></div>
                <div className="body">
                <div className="panel"></div>
                </div>
                <div className="leg leg-left"></div>
                <div className="leg leg-right"></div>
                <div className="schoolbag"></div>
            </div>
        </div>
    )
}

export default NotFound;