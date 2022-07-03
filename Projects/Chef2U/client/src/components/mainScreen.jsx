import React from 'react'

import '../styles/mainScreen.css';

import { Link, useLocation } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery, submitQuery }) => {
    return (
        <form onSubmit={submitQuery} className='search-bar'>
            <input type="text" name='search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder='What are you in the mood for...?' />
            <img className='search-icon' src="\images\search.png" alt='search_icon' />
            <input type="submit" value="Submit" style={{ display: 'none' }} />
        </form>
    )
}

const MainScreen = () => {
    const { user } = useLocation().state;

    return (
        <div className='main-screen'>
            <div className="main-screen-header" />
            <div className="main-screen-body">
                <div className="avatar">
                    <div className="avatar-preview-info">
                        <p>{user.userName}</p>
                    </div>
                    <img src={user.avatar ? `data:image/${user.avatar.contentType};base64,${user.avatar.data.toString('base64')}` : "\\images\\user.png"} alt="avatar" />
                </div>
            </div>
            <SearchBar />
        </div>
    )
}

export default MainScreen