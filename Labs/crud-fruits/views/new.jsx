import React from 'react'

const New = () => (
    <div>
        <h1>New Fruit Page</h1>
        <form action="/fruits" method='POST'>
            Name: <input type="text" name="name" /> <br />
            Color: <input type="text" name="color" /> <br />
            Ready to Eat?: <input type="checkbox" name="readyToEat" /> <br />
            <input type="submit" value="Create Fruit" />
        </form>
    </div>
)

module.exports = New;