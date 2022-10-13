import React from 'react';
import logo from '../assets/logo.svg'

const HeroSection = () => {
    return (
        <section>
            <nav>
                <div><img src={logo} alt='logo' /></div>
                <button>Subscribe</button>
            </nav>
        </section>
    )
}

export default HeroSection;