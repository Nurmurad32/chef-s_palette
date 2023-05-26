import React from 'react';

const Recipe = ({ recip }) => {



    const { name, ingredients, cooking_method, rating, recipe_image } = recip;
    console.log(ingredients[0])

    return (
        <div className="col">
            <div className="card">
                <img src={recipe_image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='d-flex'>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{rating}</p>
                    </div>
                    <div>
                        <p className="card-text">Ingredients:</p>
                        <ul>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p>Cooking Methods:</p>
                        <p style={{whiteSpace: 'pre-line'}}>{cooking_method}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Recipe;