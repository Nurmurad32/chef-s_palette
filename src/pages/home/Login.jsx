import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log('login page location', location)

    const form = location?.state?.from?.pathname || "/" ;

    const handleLogin = (event) =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(form , {replace:true} );
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='w-25 mx-auto'>
            <h2>Login Page</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" className="btn btn-primary">Log In</button>
                <p className="text-secondary">
                    Don't have an Account?<Link to="/register">Sign Up</Link>
                </p>
                <p className='text-success'></p>
                <p className='text-danger'></p>
            </form>
        </div>
    );
};

export default Login;