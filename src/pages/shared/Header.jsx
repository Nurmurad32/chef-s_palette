import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    // console.log(user.photoURL)
    // console.log(user.displayName)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav-container" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="/"><img height='70' src={logo} alt="" /></Link>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            {
                                user &&
                                <FaRegUserCircle style={{ fontSize: '2rem' }} ></FaRegUserCircle>

                            }
                        </li>

                        <li>{
                            user
                                ? <button className='brand-btn' onClick={handleLogout}>Logout</button>
                                : <Link to="/login"><button className='brand-btn' >Login</button></Link>
                        }</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;