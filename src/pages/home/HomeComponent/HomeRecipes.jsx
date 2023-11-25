import useDataLoad from '../../../hooks/useDataLoad';
import { Col, Container, Row } from 'react-bootstrap';
import { useLottie } from "lottie-react";
import foodAnime from '../../../assets/animation/food.json'
import SmallCardRecipe from '../../../components/SmallCardRecipe/SmallCardRecipe';
import { Link } from 'react-router-dom';

const HomeRecipes = () => {
    const options = {
        animationData: foodAnime,
        loop: true
    };
    const { View } = useLottie(options);


    const recipes = useDataLoad("recipes");

    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={4}>
                    <h2 style={{ fontSize: "60px" }} className='mb-2 underlineHome'>Some of Our Recipes</h2>
                    <p className='p-5'>{View}</p>
                </Col>
                <Col xs={12} sm={12} md={8}>
                    <Row xs={1} sm={2} md={3} className="g-4">
                        {recipes?.slice(0, 6).map((recipe, idx) => (
                            <Col key={idx}>
                                <SmallCardRecipe recipe={recipe}></SmallCardRecipe>
                            </Col>
                        ))}
                    </Row>
                    <div className='mt-5 d-flex justify-content-center'>
                        <button className='brand-btn'><Link to="/recipes" className='text-decoration-none text-white'>View More Recipe</Link></button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeRecipes;