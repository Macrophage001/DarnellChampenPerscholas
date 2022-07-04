import React from 'react'

const Recipe = (props) => {
    return (
        <div className="chef-recipe">
            <img src="/images/preview_food.jpg" alt="chef_image" />
            <div className="recipe-info">
                <h3>{props.recipe.name}</h3>
                <p>Price: {props.recipe.price}</p>
            </div>
        </div>
    );
}

export default Recipe