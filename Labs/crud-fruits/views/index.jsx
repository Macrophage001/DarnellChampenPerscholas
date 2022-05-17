import React from 'react'

const Index = ({ fruits }) => (
    <div>
        <h1>Fruits Index Page</h1>
        <nav> <a href="/fruits/new">Create a New Fruit</a> </nav>
        <ul>
            {fruits.map((fruit, i) => <li>The {' '} <a href={ `/fruits/${i}` }>{fruit.name}</a> {' '} is {fruit.color} and is { fruit.readyToEat ? 'ready to eat!' : 'not ready to eat!' }</li>)}
        </ul>
    </div>
)

module.exports = Index;