import React from 'react';
import { FaRegThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {

    const { id, image, name, experience, recipes, likes } = chef;
    return (
        <div className="col">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                    <p className="card-text">Year of Experience: {experience}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className="card-text d-flex align-items-center">Total Recipes: {recipes}</p>
                        <p className="card-text d-flex align-items-center"><FaRegThumbsUp />: {likes}</p>
                    </div>
                </div>
                <p className='card-footer mb-0 text-center'>
                    <a href={`/chefs/${id}`}>View Recipes</a>
                </p>
            </div>
        </div>
    );
};

export default Chef;