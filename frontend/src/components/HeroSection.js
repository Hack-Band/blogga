import React from 'react';
import logo from '../assets/logo.svg';
import wave from '../assets/wave.png';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <nav className='flex'>
                <div><img src={logo} alt='logo' /></div>
                <button className='sub-btn'>Subscribe</button>
            </nav>

            <div className='hero-content content-margin'>
                <div className='welcome flex'>
                    <div><img src={wave} alt='wave'/></div>
                    <span>HELLO</span>
                </div>

                <p>Insights about my personal and work life, and the in-betweens</p>
            </div>
        </section>
    )
}

export default HeroSection;