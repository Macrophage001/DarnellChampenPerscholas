import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { tryCatch } from '../helper/util';

import '../styles/introScreen.css';

const IntroScreen = () => {
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        tryCatch(async () => {
            const response = await axios.get('/api/auth/login');
            console.log("Found user in session: ", response.data);
            if (response.data) {
                console.log("Found session token: ", response.data.user);
                setUser(response.data);
            }
        })();
    }, []);

    return (
        <div className='intro-screen'>
            <h1>Chef2U</h1>
            <h2>Bringing <span>restaurant quality</span> food to <span>you</span>.</h2>
            <Link to={user ? '/home' : '/login'} state={{ user }}>
                <img src="\images\down-arrow.png" alt="down_arrow" />
            </Link>
        </div>
    )
}

export default IntroScreen