import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

import { FaRegThumbsUp } from 'react-icons/fa';

const SingleChef = () => {
    const SingleChef = useLoaderData();

    const { id, image, name, experience, recipes, likes, bio } = SingleChef;

    const [recipe, setRecipe] = useState();
    useEffect(() => {
        const getRecipes = async () => {
            const response = await fetch(
                'http://localhost:3000/recipes'
            );
            const data = await response.json();
            const recipes = data.filter(n => parseInt(n.chef_id) === id);
            setRecipe(recipes)
        };
        getRecipes();
    }, []);

    return (
        <div className='container'>
            <div className="card mb-3 mx-auto mt-5 mb-5 chef-card" style={{ minWidth: '540px', maxWidth: '800px' }}>
                <div className="row g-0">
                    <div className="col-md-4 chef-card-col-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <small className="card-text text-gray">"{bio}"</small>
                            <p className="card-text">Year of Experience: {experience}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className="card-text d-flex align-items-center">Total Recipes: {recipes}</p>
                            <p className="card-text d-flex align-items-center"><FaRegThumbsUp />: {likes}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto mb-5">
                {
                    recipe ? recipe.map(recip => <Recipe recip={recip}></Recipe>) : null}
            </div>

        </div>
    );
};

export default SingleChef;