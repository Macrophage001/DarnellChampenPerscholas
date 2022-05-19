import React from 'react'

const CreateLearner = () => {
    const headerStyle = {
        color: '#67b0ff',
        backgroundColor: '#21252b',
        padding: '2rem'
    }
    const formStyle = {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column'
    }
    const inputStyle = {
        padding: '0.25rem',
        margin: '0.125rem',
        borderRadius: '5px'
    }

    return (
        <div>
            <h1 style={headerStyle}>New Learner Page</h1>
            <form style={formStyle}  action="/api/v1/learner" method='POST'>
                <input style={inputStyle} type="text"   name="Name"   placeholder='Name' />
                <input style={inputStyle} type="number" name="Age"    placeholder='Age' />
                <input style={inputStyle} type="text"   name="Height" placeholder='Height' />
                <input style={inputStyle} type="submit" value="Create Learner" />
            </form>
        </div>
    )
}

module.exports = CreateLearner;