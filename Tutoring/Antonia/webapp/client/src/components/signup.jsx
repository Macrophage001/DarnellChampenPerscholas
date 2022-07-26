import React from 'react'

const SignUp = ({ credentials, handleOnSubmit, handleOnChange }) => {
    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name='firstName' placeholder='First Name...' value={credentials.firstName} onChange={handleOnChange} />
            <input type="text" name='lastName' placeholder='Last Name...' value={credentials.lastName} onChange={handleOnChange} />
            <input type="text" name='userName' placeholder='User Name...' value={credentials.userName} onChange={handleOnChange} />
            <input type="text" name='email' placeholder='email...' value={credentials.email} onChange={handleOnChange} />
            <input type="password" name="password" placeholder='Password...' value={credentials.password} onChange={handleOnChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default SignUp