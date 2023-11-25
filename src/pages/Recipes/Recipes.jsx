import { useContext } from 'react';
import useDataLoad from '../../hooks/useDataLoad';
import { Col, Row } from 'react-bootstrap';
import SmallCardRecipe from '../../components/SmallCardRecipe/SmallCardRecipe';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AuthContext } from '../../providers/AuthProviders';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { Helmet } from 'react-helmet-async';

const Recipes = () => {
    const {loading} = useContext(AuthContext);

    const recipes = useDataLoad("recipes")

    if(loading){
        return <LoadingPage />
    }

    return (
        <div className='container mb-5'>
            <Helmet>
                <title>Recipes || Chef's Palette</title>
            </Helmet>
            {loading && <LoadingPage />}
            <PageTitle title="Our Collected Recipes" />
            <Row xs={1} sm={2} md={4} className="g-4">
                {recipes?.map((recipe, idx) => (
                    <Col key={idx}>
                        {/* <SmallCardRecipe recipe={recipe} bookmarkedList={bookmarkedList} setBookmarkedList={setBookmarkedList}></SmallCardRecipe> */}
                        <SmallCardRecipe recipe={recipe} ></SmallCardRecipe>
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default Recipes;