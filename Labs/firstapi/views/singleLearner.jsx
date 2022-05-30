import React from 'react'

const SingleLearner = ({ learners }) => (
    <div className="learners">
        <ul>
            {learners && learners.map((learner, i) => (
                <li key={i}>
                    <h2>Name: {learner.firstName} {learner.lastName}</h2>
                    <h3>Username: {learner.userName}</h3>
                    <h3>Location: {learner.location}</h3>
                    <h3>Email: {learner.email}</h3>
                    <h3>GPA: {learner.gpa}</h3>
                    <h3>Age: {learner.age}</h3>
                    <a href={`${process.env.LEARNER_API}`}>Back</a>
                </li>
            ))}
        </ul>
    </div>
)

export default SingleLearner