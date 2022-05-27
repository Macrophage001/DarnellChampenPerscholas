import React from 'react'

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

const UpdateLearner = ({ learner }) => {
    return (
        <div>
            <form style={formStyle} action={`${process.env.LEARNER_API}/update/${learner.firstName}`} method='POST'>
                <input style={inputStyle} type="text"   name="firstName"      placeholder='First Name' value={learner.firstName} />
                <input style={inputStyle} type="text"   name="lastName"       placeholder='Last Name' value={learner.lastName} />
                <input style={inputStyle} type="text"   name="userName"       placeholder='User Name' value={learner.userName} />
                <input style={inputStyle} type="text"   name="email"          placeholder='email@domain.com' value={learner.email} />
                <input style={inputStyle} type="text"   name="location"       placeholder='123 Main St.' value={learner.location} />
                <input style={inputStyle} type="number" step='0.1' name="gpa" placeholder='1.0' value={learner.gpa} />
                <input style={inputStyle} type="number" name="age"            placeholder='Age' value={learner.age} />
                <input style={inputStyle} type="submit" value="Update Learner" />
            </form>
        </div>
    )
}

export default UpdateLearner