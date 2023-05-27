import React, { useState } from 'react';
import { GrFavorite } from "react-icons/gr";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recip }) => {
    const notify = () => toast("Added to your favourite list!");

    const [toasts , setToasts ] = useState(true)
    
    const handelToast = (t) =>{
        setToasts(t)
        console.log(toasts)
        notify();
    }


    const { name, ingredients, cooking_method, rating, recipe_image } = recip;

    return (
        <div className="col">
            <div className="card">
            <ToastContainer />
                <img src={recipe_image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className='d-flex'>
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{rating}</p>
                        <button onClick={()=>handelToast(!toasts)} disabled={!toasts}><GrFavorite ></GrFavorite></button>
                        
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