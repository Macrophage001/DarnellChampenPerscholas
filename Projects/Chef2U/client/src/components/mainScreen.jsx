import React, { useState, useEffect, createContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { tryCatch } from '../helper/util';

import Avatar from './avatar';
import SearchBar from './search/searchBar';
import SearchResults from './search/searchResults';
import NavBar from './navBar';
import Specialties from './search/specialties';
import Button from './button';

import '../styles/mainScreen.css';
import '../styles/searchResults.css';

import { searchResultsOnClickContext } from '../context/searchResultContext';
import Card from './card';


const ChefRecipes = (props) => {
    return (
        <div className="full-chef-preview-card-recipes">
            {props.recipes.map((recipe, index) => {
                return <Card key={index}>
                    <div className="full-chef-preview-card-recipe">
                        <img className="full-chef-preview-card-recipe-image" src="\images\preview_food.jpg" alt="food_preview_image" />
                        <div className='full-chef-preview-card-recipe-info'>
                            <div className="full-chef-preview-card-recipe-content-left">
                                <div className="full-chef-preview-card-recipe-content-info">
                                    <h2>{recipe.name}</h2>
                                </div>
                                <div className="full-chef-preview-card-recipe-content-cta">
                                    <p>Price: {recipe.price}</p>
                                    <Button label="Order" />
                                </div>
                            </div>
                            <div className="full-chef-preview-card-recipe-content-right">
                                <h2>Ingredients</h2>
                                <div>
                                    <ul>
                                        {recipe.ingredients.map((ingredient, index) => {
                                            return <li key={index}><p>{ingredient}</p></li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>;
            })}
        </div>
    );
}


const FullChefPreview = ({ chef, overallRating }) => {
    const calculateRating = (rating) => {
        let stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(<FontAwesomeIcon className='rating-star' key={i} icon={faStar} />);
        }
        if (rating % 1 !== 0) {
            stars.pop();
            stars.push(<FontAwesomeIcon className='rating-star' key={stars.length} icon={faStarHalf} />);
        }
        console.log(stars);
        return stars;
    }

    return (
        <div className="full-chef-preview">
            <Card className="full-chef-preview-card">
                <div className='full-chef-image'>
                    <img src={chef.avatar ? `data:image/${chef.avatar.contentType};base64,${chef.avatar.data.toString('base64')}` : "\\images\\chef.png"} alt="avatar" />
                </div>
                <div className="full-chef-preview-card-rating">
                    <div className="full-chef-preview-card-rating-stars">
                        {calculateRating(overallRating).map((star, index) => (star))}
                        {/* <FontAwesomeIcon className='rating-star' icon={faStarHalf} />
                        <FontAwesomeIcon className='rating-star' icon={faStar} />
                        <FontAwesomeIcon className='rating-star' icon={faStar} />
                        <FontAwesomeIcon className='rating-star' icon={faStar} />
                        <FontAwesomeIcon className='rating-star' icon={faStar} /> */}
                    </div>
                    <div className='full-chef-preview-card-rating-review'>
                        <button>Reviews</button>
                    </div>
                </div>
                <div className="full-chef-preview-card-info">
                    <h2>{chef.firstName} {chef.lastName}</h2>
                    <Specialties chef={chef} />
                    <h2>Years of Experience: {chef.yearsOfExperience} Year(s)</h2>
                </div>
                <ChefRecipes recipes={chef.recipes} />
            </Card>
        </div>
    )
}

const MainScreen = ({ navLinks }) => {
    const [user, setUser] = useState({});
    const [selectedChef, setSelectedChef] = useState({});
    const [overallRating, setOverallRating] = useState(0);

    const [toggleFullChefPreview, setToggleFullChefPreview] = useState(false);

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
        setSelectedChef(chef);
        setToggleFullChefPreview(!toggleFullChefPreview);
        console.log('clicked', chef.userName);
        console.log('reviews', chef.reviews);

        const overallRating = chef.reviews.reduce((acc, curr) => {
            return acc + curr.rating;
        }, 0) / chef.reviews.length;
        setOverallRating(overallRating);
    }

    return (
        <>
            {toggleFullChefPreview ? <FullChefPreview chef={selectedChef} overallRating={overallRating} /> : null}
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
        </>
    )
}

export default MainScreen