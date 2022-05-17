import React from 'react'

const Show = ({ fruit }) => (
    <div>
        <h1>Show Page</h1>
        { fruit && <p>The {fruit.name} is {fruit.color} and {fruit.readyToEat ? 'ready to eat!' : 'not ready to eat!'}</p> }
    </div>
)

module.exports = Show;