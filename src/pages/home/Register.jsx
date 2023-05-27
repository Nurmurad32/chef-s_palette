import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

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
                console.log(createdUser)

                event.target.reset();
                setSuccess('Accounted Created successfully');
                updateUser(name, photo)
            })
            .catch(error => {
                console.log(error)
                setErrors(error.message);
            })
    }
    return (
        <div className='w-25 mx-auto'>
            <h2>Register Page</h2>
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

                <button type="submit" className="btn btn-primary">Register</button>
                <p className="text-secondary">
                    Already have an Account?<Link to="/login">Login</Link>
                </p>

            </form>
        </div>
    );
};

export default Register;