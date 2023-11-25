import { useContext } from 'react';
import aboutImg from "../../assets/About Cheff.png"
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../../components/PageTitle/PageTitle';
import { AuthContext } from '../../providers/AuthProviders';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { Helmet } from 'react-helmet-async';

const About = () => {
    const {loading} = useContext(AuthContext);

    return (
        <Container className='mb-5'>
            <Helmet>
                <title>About || Chef's Palette</title>
            </Helmet>
            {loading && <LoadingPage />}
            <PageTitle title="A little About Us" />
            <Row>
                <Col xs={12} sm={12} md={5}>
                    <div className='aboutImg d-block'>
                        <img className='' src={aboutImg} alt="" />
                    </div>
                </Col>
                <Col xs={12} sm={12} md={7} className='d-flex'>
                    <div className='d-flex flex-column justify-content-center '>
                        <p>Welcome to <b>Chef's Palette</b> – your culinary haven! 🍽️✨</p>
                        <h4>Our Mission</h4>
                        <p className='ps-3'>
                            At Chef's Palette, we are passionate about bringing the finest culinary experiences to your fingertips. Our mission is to create a virtual haven for food enthusiasts, connecting them with talented chefs and a diverse array of mouthwatering recipes.
                        </p>
                        <div >
                            <h4 className='my-3'>Who We Are</h4>
                            <div className='ps-3'>
                                <h5>The Culinary Curators</h5>
                                <p>Meet our team of dedicated culinary curators, each with a profound love for the art of cooking. We scour the globe to discover exceptional chefs who bring creativity, innovation, and a dash of magic to the world of gastronomy.</p>

                                <h5>A Feast for Your Senses</h5>
                                <p>Chef's Palette is not just a collection of recipes; it's a celebration of flavors, textures, and the joy of cooking. Whether you're a seasoned home chef or a kitchen novice, we invite you to explore our platform and embark on a delicious journey.</p>
                            </div>
                        </div>


                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={5}>
                    <div className='mt-3'>
                        <h4>What Sets Us Apart</h4>
                        <ul>
                            <li>
                                <strong>Exquisite Recipes:</strong> Our chefs craft recipes that tantalize taste buds and ignite culinary inspiration.
                            </li>
                            <li>
                                <strong>Diverse Culinary Voices:</strong> From traditional cuisines to avant-garde creations, we embrace the rich tapestry of global flavors.
                            </li>
                            <li>
                                <strong>User Engagement: </strong> Join our community, save your favorite recipes, and share your culinary adventures with fellow food enthusiasts.
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={7}>
                    <div >
                        <h4>Connect with Us</h4>
                        <div className='ps-3'>
                            <p>
                                We love hearing from our community! Follow us on social media for the latest updates, behind-the-scenes glimpses, and interactive cooking challenges.
                            </p>
                            <ul>
                                <li>
                                    <strong>Facebook: </strong> Chef's Palette Facebook
                                </li>
                                <li>
                                    <strong>Instagram:</strong> Chef's Palette Instagram
                                </li>
                                <li>
                                    <strong>Twitter:</strong> Chef's Palette Twitter
                                </li>
                            </ul>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='d-flex flex-column align-items-center my-5'>
                        <p>
                            Thank you for being part of the Chef's Palette family. Let's savor the art of cooking together!
                        </p>
                        <p className='text-center'>
                            Happy Cooking, <br />
                            The Chef's Palette Team 🌟👩‍🍳👨‍🍳
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default About;