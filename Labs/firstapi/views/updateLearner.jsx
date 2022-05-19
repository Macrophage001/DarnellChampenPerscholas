import React from 'react'

const { formStyle, inputStyle } = require('../styles/createLearnerStyles');

const UpdateLearner = ({ learner }) => {
    return (
        <div>
            <form style={formStyle} action={`${process.env.LEARNER_API}/update/${learner.name}`} method='POST'>
                <input style={inputStyle} type="text" name="name" placeholder='Name' value={learner.name}/>
                <input style={inputStyle} type="number" name="age" placeholder='Age' value={learner.age}/>
                <input style={inputStyle} type="text" name="height" placeholder='Height' value={learner.height}/>
                <input style={inputStyle} type="submit" value="Update Learner" />
            </form>
        </div>
    )
}

export default UpdateLearner