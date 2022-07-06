import React, { useState, useEffect, createContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import { tryCatch } from '../helper/util';

import Avatar from './avatar';
import SearchBar from './search/searchBar';
import SearchResults from './search/searchResults';
import NavBar from './navBar';

import '../styles/mainScreen.css';
import '../styles/searchResults.css';

import { searchResultsOnClickContext } from '../context/searchResultContext';

const MainScreen = ({ navLinks }) => {
    const [user, setUser] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchBarCompleteClassName, setSearchBarCompleteClassName] = useState('');

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

    const submitQuery = (e) => {
        e.preventDefault();
        tryCatch(async () => {
            const response = await axios.get(`/api/search?query=${searchQuery}`);
            if (response.data) {
                setSearchResults(response.data);
            } else {
                setSearchResults([]);
            }

            setSearchBarCompleteClassName('on-search-complete');
        })();
    }

    const handleClickOnCard = (chef) => {
        console.log('clicked', chef.userName);
    }

    return (
        <div className='main-screen'>
            <div className="main-screen-header" />
            <div className="main-screen-body">
                <NavBar user={user} />
                <Avatar user={user} navLinks={navLinks} />
                <SearchBar className={searchBarCompleteClassName} searchQuery={searchQuery} setSearchQuery={setSearchQuery} submitQuery={submitQuery} />
                <searchResultsOnClickContext.Provider value={{ handleClickOnCard }}>
                    {searchResults && searchResults.length > 0 && <SearchResults user={user} searchResults={searchResults} />}
                </searchResultsOnClickContext.Provider>
            </div>
        </div>
    )
}

export default MainScreen