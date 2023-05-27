import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    const { signIn , signInWithGoogle , signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log('login page location', location)

    const form = location?.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess('');
        setErrors('');
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                event.target.reset();
                setSuccess('Accounted Created successfully');
                navigate(form, { replace: true });
            })
            .catch(error => {
                console.log(error)
                setErrors(error.message);
            })
    }

    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => { 
        signInWithGoogle(provider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Account login successfully');
            navigate(form, { replace: true });
        })
        .catch(error => {
            console.log(error)
            setErrors(error.message);
        })
    }
    const gitHubProvider = new GithubAuthProvider();
    const handleGitHubLogin = () => { 
        signInWithGithub(gitHubProvider)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess('Account login successfully');
            navigate(form, { replace: true });
        })
        .catch(error => {
            console.log(error)
            setErrors(error.message);
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
                <div>
                <button onClick={handleGoogleLogin}><FcGoogle></FcGoogle></button>
                <button onClick={handleGitHubLogin}><FaGithub></FaGithub></button>
                </div>
                
                <p className="text-secondary">
                    Don't have an Account?<Link to="/register">Sign Up</Link>
                </p>
                <p className='text-success'>{success}</p>
                <p className='text-danger'>{errors}</p>
            </form>
        </div>
    );
};

export default Login;