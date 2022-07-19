import React from 'react'
import NavBar from './navBar';

const tryCatch = (callback, onError = (err) => console.error(err)) => {
    const fn = (...args) => {
        try {
            return callback(...args);
        } catch (e) {
            return onError(e)
        }
    }
    return fn;
}

const LogIn = () => {
    const result = tryCatch((x, y) => {
        return x + y;
    }, err => console.error(err))(1, 2);

    const printOutXYZ = tryCatch((x, y, z) => {
        console.log(x, y, z);
    });

    return (
        <div>
            <h1>Log In</h1>
            <NavBar />
        </div>
    )
}

export default LogIn