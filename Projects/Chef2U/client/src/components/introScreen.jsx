import React from 'react'

import { Link } from 'react-router-dom'

import '../styles/introScreen.css';

const IntroScreen = () => {
    return (
        <div className='intro-screen'>
            <h1>Chef2U</h1>
            <h2>Bringing <span>restaurant quality</span> food to <span>you</span>.</h2>
            <Link to="/log-in-screen">
                <img src="\images\down-arrow.png" alt="down_arrow" />
            </Link>
        </div>
    )
}

export default IntroScreen