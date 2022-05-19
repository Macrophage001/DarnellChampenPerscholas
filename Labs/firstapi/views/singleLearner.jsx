import React from 'react'

const SingleLearner = ({ learners }) => {
    return (
        <div className="learners">
            <ul>
                {learners && learners.map((learner, i) => (
                    <li key={i}>
                        <h2>Name: {learner.name}</h2>
                        <h3>Age: {learner.age}</h3>
                        <h3>Height: {learner.height}</h3>
                        <a href={`${process.env.LEARNER_API}/${learner.name}`}>Show More</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SingleLearner