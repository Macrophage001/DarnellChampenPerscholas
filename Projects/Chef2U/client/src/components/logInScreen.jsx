import React, { useState, useEffect } from 'react'
import axios from 'axios';

import '../styles/logInScreen.css';

import { tryCatch } from '../helper/util';

const LogInForm = (props) => (
    <form>
        <input type="text" name='email' placeholder='Email...' value={props.email} onChange={props.handleChange} />
        <input type="text" name='password' placeholder='Password...' value={props.password} onChange={props.handleChange} />
        <input type="submit" value="Submit" style={{ display: 'none' }} />
    </form>
)

const SignUpForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input type="text" name='name' placeholder='Name...' value={props.name} onChange={props.handleChange} />
        <input type="text" name='email' placeholder='Email...' value={props.email} onChange={props.handleChange} />
        <input type="text" name='password' placeholder='Password...' value={props.password} onChange={props.handleChange} />
        <input type="text" name='passwordConfirmation' placeholder='Confirm Password...' value={props.passwordConfirmation} onChange={props.handleChange} />
        <div className="form-customer-type">
            <img src="/images/chef.png" alt="chef_image" />
            <input type="radio" name='customerType' value="Chef" onChange={props.handleChange} />
            <img src="/images/eating-disorder.png" alt="customer_image" />
            <input type="radio" name='customerType' value="Customer" onChange={props.handleChange} />
        </div>
        <input type="submit" value="Submit" style={{ display: 'none' }} />
    </form>
)

const LogInScreen = () => {
    const [authType, setAuthType] = useState('log-in');
    const [authForm, setAuthForm] = useState(<></>);

    const authTypeMap = {
        'log-in': () => {
            tryCatch(async () => {
                const response = await axios.post('/api/auth/login', credentials);
                storeAuthToken(response);
            })();
        },
        'sign-up': () => {
            tryCatch(async () => {
                const response = await axios.post('/api/auth/signup', credentials);
                storeAuthToken(response);
            })();
        }
    }


    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        customerType: '',
    });

    const handleChange = (e) => {
        console.log("Credentials before Update: ", credentials);

        const newCredentials = credentials;
        newCredentials[e.target.name] = e.target.value;
        setCredentials(newCredentials);
    }

    const storeAuthToken = (response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(credentials);

        authTypeMap[authType]();
        // if (authType === 'log-in') {
        //     tryCatch(async () => {
        //         const response = await axios.post('/api/auth/login', credentials);
        //         storeAuthToken(response);
        //     })();
        // } else {
        //     tryCatch(async () => {
        //         const response = await axios.post('/api/auth/signup', credentials);
        //         storeAuthToken(response);
        //     })();
        // }
    }

    useEffect(() => {
        if (authType === 'log-in') {
            setAuthForm(<LogInForm handleChange={handleChange} handleSubmit={handleSubmit} />);
        } else {
            setAuthForm(<SignUpForm handleChange={handleChange} handleSubmit={handleSubmit} />);
        }
    }, [authType]);

    return (
        <div className="log-in-screen">
            <div className='log-in-screen-header' />
            <div className='log-in-screen-body'>
                <div className='log-in-screen-body-authentication'>
                    {authType === 'log-in' ? <h1>Log In</h1> : <h1>Sign Up</h1>}
                    {authForm}
                    <div className='authentication-buttons'>
                        <button onClick={() => setAuthType('sign-up')}>Sign Up</button>
                        <button onClick={() => setAuthType('log-in')}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogInScreen;
