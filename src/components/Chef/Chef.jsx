import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Chef = ({ chef }) => {

    const { id, image, name, experience, recipes, likes } = chef;
    return (<>
        <Card className='w-100'>
            <Card.Img variant="top" src={image} style={{ height: "225px", width: "auto" }} loading='lazy'/>
            <Card.Body>
                <Card.Title className='text-center'>{name}</Card.Title>
                <Card.Text >
                    {/* <p className='text-secondary'>{bio?.slice(0,80)}...</p> */}
                    <div className='d-flex justify-content-between align-items-baseline'>
                        <p className="card-text d-flex align-items-center">Experience: {experience}</p>
                        <p className="card-text d-flex align-items-center"><FaHeart style={{ color: "#e6151c" }} />: {likes}</p>
                    </div>
                    <p className="card-text d-flex align-items-center mb-0">Total Recipes: {recipes}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
                <Link style={{ color: "black", textDecoration: 'none' }} to={`/chefs/${id}`}>View All Recipes <FaArrowRightLong /></Link>
            </Card.Footer>
        </Card>
    </>
    );
};

export default Chef;