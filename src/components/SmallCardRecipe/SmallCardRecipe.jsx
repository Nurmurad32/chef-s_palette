import { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";
import { Rating } from '@smastrom/react-rating'
import "./SmallCardRecipe.css";

import '@smastrom/react-rating/style.css'
import RecipeModal from '../RecipeModal/RecipeModal';
import useDataLoad from '../../hooks/useDataLoad';
import { AuthContext } from '../../providers/AuthProviders';
import LoadingPage from '../LoadingPage/LoadingPage';

const SmallCardRecipe = ({ recipe}) => {
    const { chef_id, description, name, rating, recipe_image, recipe_category } = recipe;

    const {loading} = useContext(AuthContext);

    const [modalShow, setModalShow] = useState(false);

    const [chefName, setChefName] = useState("")
    const [categoryName, setCategoryName] = useState("")

    const chefs = useDataLoad("chefs");
    const categories = useDataLoad("categories");

    useEffect(() => {
        const cName = chefs?.find(chef => chef.id == chef_id)
        setChefName(cName?.name || "Not Found")

        const catName = categories?.find(cat => cat.id == recipe_category)
        setCategoryName(catName?.cat || "Not Found")
        // console.log(cName.name)
    }, [chefs, categories])


    if(loading){
        return <LoadingPage />
    }

    return (
        <Card>
            <Card.Img variant="top" src={recipe_image} style={{ height: "175px" }} />
            <Card.Body style={{ minHeight: "160px" }}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>{description?.slice(0, 90)}...</small>
                </Card.Text>
            </Card.Body>
            <Card.Footer className=' bg-white'>
                <p className=' d-flex justify-content-start'><Rating value={rating} readOnly /><div><small>{rating}</small></div></p>
                <p className='mb-0 d-flex justify-content-end recipeDetails' onClick={() => setModalShow(true)}><small className="text-muted recipeDetails">View details Recipe <FaArrowRightLong /></small></p>
            </Card.Footer>
            <RecipeModal
                recipe={recipe}
                show={modalShow}
                chefName={chefName}
                categoryName={categoryName}
                loading={loading}
                onHide={() => setModalShow(false)}
            />
        </Card>
    );
};

export default SmallCardRecipe;