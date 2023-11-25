import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Col, Container, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegistration = (event) => {
        event.preventDefault();
        setSuccess('');
        setErrors('');
        const from = event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;

        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                updateUser(name, photo)
                    .then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        console.log(error);
                    });
                toast.success('Account Created Successfully');
                console.log(createdUser)

                event.target.reset();
                // setSuccess('Accounted Created successfully');

            })
            .catch(error => {
                console.log(error)
                setErrors(error.message);
            })
    }
    return (
        <>
            <Container>
                <Helmet>
                    <title>Chefs || Chef's Palette</title>
                </Helmet>
                <Row>
                    <Col xs={1} sm={2} md={4}> </Col>
                    <Col xs={10} sm={8} md={4}>
                        <div className='mx-auto'>
                            {errors &&
                                <p className='text-danger border border-danger p-2 text-center mt-3'>{errors}</p>
                            }
                            <h2 className='text-center mt-5 mb-5 underline'>Complete Your Registration here</h2>
                            <p className='text-success'>{success}</p>
                            <p className='text-danger'>{errors}</p>
                            <form onSubmit={handleRegistration}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Your Name</label>
                                    <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Photo URL</label>
                                    <input type="text" name='photo' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                                </div>

                                <div className='text-center mt-3 mb-5'>
                                    <button type="submit" className="brand-btn" style={{ width: "40%" }}>Register</button>
                                </div>
                                <p className='text-center'>or</p>
                                <p className="text-secondary text-center mb-5">
                                    Already have an Account?<Link to="/login" className='text-decoration-none'><span className='ms-2 brand-color'>Login</span></Link>
                                </p>

                            </form>
                        </div>
                    </Col>
                    <Col xs={1} sm={2} md={4}> </Col>
                </Row>
            </Container>
        </>
    );
};

export default Register;