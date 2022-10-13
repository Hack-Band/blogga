import React from "react";
import './Subscribe.css'
import curve from '../assets/subtract.svg'

const Subscribe = () => {
    return (
        <section className="sub-form content-margin">
            <div className='curve'><img src={curve} alt='curve'/></div>
            <h4>Subscribe to my blog.</h4>
            <p>I post fresh content every week.</p>
            <div className="sub-form-input">
                <input type="email" placeholder="Email Address"/>
                <button>Subscribe</button>
            </div>
        </section>
    )
}

export default Subscribe;