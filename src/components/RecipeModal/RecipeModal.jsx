import { Rating } from '@smastrom/react-rating';
import { useContext, useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap';
import '@smastrom/react-rating/style.css'
import toast from 'react-hot-toast';
import "./RecipeModal.css"
import LoadingPage from '../LoadingPage/LoadingPage';
import { MdBookmarkAdded } from "react-icons/md";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { AuthContext } from '../../providers/AuthProviders';

const RecipeModal = ({ recipe, chefName, loading, categoryName, ...props }) => {

    const { description, name, rating, recipe_image, ingredients, cooking_method } = recipe;

    const { bookmarkedList, setBookmarkedList } = useContext(AuthContext);
    const [bookmarked, setBookmarked] = useState(false);

    const handleBookmarked = (recipe) => {
        let newBookMarked = [...bookmarkedList, recipe]
        setBookmarkedList(newBookMarked)
        localStorage.setItem('recipes', JSON.stringify(newBookMarked));

        setBookmarked(!bookmarked)
        if (bookmarked) {
            toast.error(`You removed from bookmarked ${name}`)
        } else { toast.success(`You bookmarked ${name}`) }
    }



    console.log(bookmarkedList?.length, bookmarkedList);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='d-flex justify-content-center text-center' id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
                <Button className="card-text d-flex align-items-center mb-0 bg-white border-0" onClick={() => handleBookmarked(recipe)} disabled={bookmarked === true}>
                    {bookmarked
                        ? <MdBookmarkAdded style={{ color: "#e6151c", fontSize: "25px" }} />
                        : <MdOutlineBookmarkAdd style={{ color: "#e6151c", fontSize: "25px" }} />}
                </Button>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3 border-0">
                    {loading && <LoadingPage />}
                    <div className="row g-0">
                        <div className="col-12 col-md-5">
                            <div>
                                <Image src={recipe_image} className="img-fluid rounded-start" alt="..." rounded />
                            </div>
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 mt-3'><small>Chef :</small> {chefName}</p>
                            </div>
                            <div className='d-flex justify-content-start'>
                                <p className='mb-0 '><small>Category :</small> {categoryName}</p>
                            </div>
                            <div className='d-flex align-items-start mt-1'>
                                <p><small>Rating :</small></p><Rating value={rating} readOnly /><div><small>{rating} / 5</small></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="card-body">
                                <p className="card-text text-secondary" >
                                    <small>{description}</small>
                                </p>

                                <div>
                                    <p className="card-text mb-0 mt-3">Ingredients:</p>
                                    <ul>
                                        {ingredients?.map((ingredient, index) => (
                                            <li key={index} className='text-secondary'> <small >{ingredient}</small> </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className='mb-0'>Cooking Methods:</p>
                                    <p style={{ whiteSpace: 'pre-line' }} className='ps-3 text-secondary'> <small>{cooking_method}</small> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default RecipeModal;