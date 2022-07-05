import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import { tryCatch } from '../helper/util';

import Avatar from './avatar';
import SearchBar from './search/searchBar';
import SearchResults from './search/searchResults';
import NavBar from './navBar';

import '../styles/mainScreen.css';
import '../styles/searchResults.css';


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

    return (
        <div className='main-screen'>
            <div className="main-screen-header" />
            <div className="main-screen-body">
                <NavBar user={user} />
                <Avatar user={user} navLinks={navLinks} />
                <SearchBar className={searchBarCompleteClassName} searchQuery={searchQuery} setSearchQuery={setSearchQuery} submitQuery={submitQuery} />
                {searchResults && searchResults.length > 0 && <SearchResults searchResults={searchResults} />}
            </div>
        </div>
    )
}

export default MainScreen