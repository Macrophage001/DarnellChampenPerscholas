import React from 'react'

const LogIn = ({ credentials, handleOnSubmit, handleOnChange }) => {
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name='email' placeholder='Email...' value={credentials.email} onChange={handleOnChange} />
            <input type="password" name="password" placeholder='Password...' value={credentials.password} onChange={handleOnChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default LogIn