import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import toast from 'react-hot-toast';
import "./SingleChef.css"
import SmallCardRecipe from '../../components/SmallCardRecipe/SmallCardRecipe';
import useDataLoad from '../../hooks/useDataLoad';

const SingleChef = () => {
    const SingleChef = useLoaderData();

    const { id, image, name, experience, recipes, likes, bio } = SingleChef;

    const [filterRecipes, setFilterRecipes] = useState();
    const totalRecipes = useDataLoad("recipes")


    useEffect(() => {
        const chefRecipes = totalRecipes?.filter(n => parseInt(n.chef_id) === id);
        setFilterRecipes(chefRecipes)
    }, [totalRecipes]);

    const [like, setLike] = useState(false);
    const handleLiked = ({ name }) => {
        setLike(!like)
        if (like) {
            toast.error(`You removed Liked ${name}`)
        } else { toast.success(`You Liked ${name}`) }
    }


    return (
        <div>
            <Container>
                <Row className="my-5">
                    <Col sm={5}>
                        <div style={{ position: "sticky", top: "0" }}>
                            <div >
                                <Image src={image} className="img-fluid rounded-start" alt="..." rounded />
                            </div>
                            <div className='py-3'>
                                <h2 className="text-center" style={{ color: "#e6151c" }}>{name}</h2>
                                <p style={{ width: "90%", margin: "0 auto" }} className='my-3'>
                                    <small className="card-text text-secondary">{bio}</small>
                                </p>

                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5 className="card-text d-flex align-items-center">Year of Experience: {experience}</h5>
                                    <h5 className="card-text d-flex align-items-center like" onClick={() => handleLiked({ name })} >
                                        {like
                                            ? <FaHeart style={{ color: "#e6151c" }} />
                                            : <FaRegHeart style={{ color: "#e6151c" }} />} : {likes}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={7}>
                        <div className="card-body">
                            <h3 className="text-center mb-5" >Recipe Collection: {recipes}</h3>

                            <Row xs={1} sm={2} md={2} className="g-4">
                                {filterRecipes?.map((recipe, idx) => (
                                    <Col key={idx}>
                                        <SmallCardRecipe recipe={recipe}></SmallCardRecipe>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        // <div className='container'>
        //     <div className="card mb-3 mx-auto mt-5 mb-5 chef-card" style={{ minWidth: '540px', maxWidth: '800px' }}>
        //         <div className="row g-0">
        //             <div className="col-md-4 chef-card-col-4">
        //                 <img src={image} className="img-fluid rounded-start" alt="..." />
        //             </div>
        //             <div className="col-md-8">
        // <div className="card-body">
        //     <h5 className="card-title">{name}</h5>
        //     <small className="card-text text-gray">"{bio}"</small>
        //     <p className="card-text">Year of Experience: {experience}</p>
        // <div className='d-flex justify-content-between align-items-center'>
        //     <p className="card-text d-flex align-items-center">Total Recipes: {recipes}</p>
        //     <p className="card-text d-flex align-items-center"><FaRegThumbsUp />: {likes}</p>
        // </div>
        // </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto mb-5">
        //         {
        //             recipe ? recipe.map(recip => <Recipe key={recip.id} recip={recip}></Recipe>) : null}
        //     </div>

        // </div>
    );
};

export default SingleChef;