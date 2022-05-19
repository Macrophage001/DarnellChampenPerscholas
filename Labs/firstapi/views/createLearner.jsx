import React from 'react'
const { headerStyle, formStyle, linkStyle, inputStyle } = require('../styles/createLearnerStyles');

const CreateLearner = ({ learners }) => (
    <div>
        <h1 style={headerStyle}>Learners Page</h1>
        <div className="learners">
            <ul>
                {learners && learners.map((learner, i) => (
                    <li key={i}>
                        <h2>Name: {learner.name}</h2>
                        <h3>Age: {learner.age}</h3>
                        <h3>Height: {learner.height}</h3>

                        <nav>
                            <ul>
                                <li style={linkStyle}><a href={`${process.env.LEARNER_API}/${learner.name}`}>Show More</a></li>
                                <li style={linkStyle}><a href={`${process.env.LEARNER_API}/update/${learner.name}`}>Edit</a></li>
                                <li style={linkStyle}><a href={`${process.env.LEARNER_API}/delete/${learner.name}`}>Remove</a></li>
                            </ul>
                        </nav>
                    </li>
                ))}
            </ul>
        </div>
        <form style={formStyle} action={process.env.LEARNER_API} method='POST'>
            <input style={inputStyle} type="text" name="name" placeholder='Name' />
            <input style={inputStyle} type="number" name="age" placeholder='Age' />
            <input style={inputStyle} type="text" name="height" placeholder='Height' />
            <input style={inputStyle} type="submit" value="Create Learner" />
        </form>
    </div>
)

module.exports = CreateLearner;