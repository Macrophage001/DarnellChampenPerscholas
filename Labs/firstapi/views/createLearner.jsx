import React from 'react'

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
const linkStyle = {
    listStyle: 'none'
}

const CreateLearner = ({ learners }) => (
    <div>
        <h1 style={headerStyle}>Learners Page</h1>
        <div className="learners">
            <ul>
                {learners && learners.map((learner, i) => (
                    <li key={i}>
                        <h2>Name: {learner.firstName} {learner.lastName}</h2>
                        <h3>Email: {learner.email}</h3>
                        <h3>Age: {learner.age}</h3>

                        <nav>
                            <ul>
                                <li style={linkStyle}><a href={`${process.env.LEARNER_API}/${learner.firstName}`}>Show More</a></li>
                                <li style={linkStyle}><a href={`${process.env.LEARNER_API}/update/${learner.firstName}`}>Edit</a></li>
                                <li style={linkStyle}><a href={`${process.env.LEARNER_API}/delete/${learner.firstName}`}>Remove</a></li>
                            </ul>
                        </nav>
                    </li>
                ))}
            </ul>
        </div>
        <form style={formStyle} action={process.env.LEARNER_API} method='POST'>
            <input style={inputStyle} type="text" name="firstName" placeholder='First Name' />
            <input style={inputStyle} type="text" name="lastName" placeholder='Last Name' />
            <input style={inputStyle} type="text" name="userName" placeholder='User Name' />
            <input style={inputStyle} type="text" name="email" placeholder='email@domain.com' />
            <input style={inputStyle} type="text" name="location" placeholder='123 Main St.' />
            <input style={inputStyle} type="number" name="gpa" placeholder='1.0' />
            <input style={inputStyle} type="number" name="age" placeholder='Age' />
            <input style={inputStyle} type="submit" value="Create Learner" />
        </form>
    </div>
)

module.exports = CreateLearner;