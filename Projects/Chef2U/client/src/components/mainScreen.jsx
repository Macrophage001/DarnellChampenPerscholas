import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { tryCatch } from '../helper/util';

import axios from 'axios';

import Avatar from './avatar';

import '../styles/mainScreen.css';


const SearchBar = ({ searchQuery, setSearchQuery, submitQuery }) => (
    <form onSubmit={submitQuery} className='search-bar'>
        <input type="text" name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='What are you in the mood for...?' />
        <img className='search-icon' src="\images\search.png" alt='search_icon' />
        <input type="submit" value="Submit" style={{ display: 'none' }} />
    </form>
)

const MainScreen = ({ navLinks }) => {
    const [user, setUser] = useState({});

    const location = useLocation();

    useEffect(() => {
        tryCatch(async () => {
            if (location.state === null) {
                const response = await axios.get('/api/auth/login');
                if (response.data) {
                    setUser(response.data);
                }
            } else {
                setUser(location.state.user);
            }
        })();
    }, []);

    return (
        <div className='main-screen'>
            <div className="main-screen-header" />
            <div className="main-screen-body">
                <Avatar user={user} navLinks={navLinks} />
            </div>
            <SearchBar />
        </div>
    )
}

export default MainScreen