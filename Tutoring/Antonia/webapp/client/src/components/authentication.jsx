import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import LogIn from './logIn'
import SignUp from './signUp'

const AuthenticationState = {
    Login: 0,
    SignUp: 1,
}

const Authentication = () => {
    axios.defaults.withCredentials = true;
    const [authenticationState, setAuthenticationState] = useState(AuthenticationState.Login);
    const [credentials, setCredentials] = useState({
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const storeAuth = (artist) => {
        sessionStorage.setItem('artist', JSON.stringify(artist));
    }

    const handleSubmit = async () => {
        if (authenticationState === AuthenticationState.Login) {
            const response = await axios.post('project/login', credentials);
            const { artist } = response.data;
            storeAuth(artist);
            navigate('/', { state: { artist } });
        } else {
            const response = await axios.post('project/signup', credentials);
            const { artist } = response.data;
            storeAuth(artist);
            navigate('/', { state: { artist } });
        }
    }

    const handleChange = (e) => {
        const newCredentials = { ...credentials };
        const { name, value } = e.target;
        newCredentials[name] = value;
        setCredentials(newCredentials);
    }

    return (
        <div>
            {
                authenticationState === AuthenticationState.Login ?
                    <div>
                        <h1>Log In</h1>
                        <LogIn credentials={credentials} handleOnSubmit={handleSubmit} handleOnChange={handleChange} />
                    </div>
                    :
                    <div>
                        <h1>Sign Up</h1>
                        <SignUp credentials={credentials} handleOnSubmit={handleSubmit} handleOnChange={handleChange} />
                    </div>
            }
            <div>
                <button onClick={
                    () => {
                        setAuthenticationState(AuthenticationState.SignUp)
                    }}>
                    <p>Sign Up</p>
                </button>
                <button onClick={
                    () => {
                        setAuthenticationState(AuthenticationState.Login)
                    }}>
                    <p>Log In</p>
                </button>
            </div>
        </div>
    )
}

export default Authentication