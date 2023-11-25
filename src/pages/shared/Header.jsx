import { useContext, useEffect } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { FaRegUserCircle } from 'react-icons/fa';
import ActiveLink from '../../components/ActiveLink/ActiveLink'
import { Image, NavDropdown } from 'react-bootstrap';
import { FaBookmark } from "react-icons/fa";
import "./Header.css"
import { FaRegTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';

const Header = () => {
    const { user, logOut, bookmarkedList, setBookmarkedList } = useContext(AuthContext);

    useEffect(() => {
        // localStorage.setItem('recipes', JSON.stringify(bookmarkedList));
        const items = JSON.parse(localStorage.getItem('recipes'));
        if (items) {
            setBookmarkedList(items);
        }
    }, []);

    console.log(user)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const handleRemoveBookmarked = (book) => {
        // const items = JSON.parse(localStorage.getItem('recipes'));
        // if (items) {
        //     setItems(items);
        // }
        const removeMarked = bookmarkedList.filter(mark => parseInt(mark.id) !== parseInt(book.id))
        setBookmarkedList(removeMarked);
        localStorage.setItem('recipes', JSON.stringify(removeMarked));
        toast.error("Removed Successfully");
    }

    // const handleBookmarkLink = (b) =>{
    //     console.log(b.chef_id);
    //     <Navigate to={`/chefs/${b.chef_id}`} replace={true} />
    // }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container nav-section">

                <div className='d-flex'>
                    {
                        user &&
                        <button className="position-relative mx-2 border-0 bg-white dropdown-bookmarked user-small-device">
                            <FaBookmark style={{ color: "#e6151c", fontSize: "20px" }} />
                            <span className="position-absolute translate-middle roundedCircle brand-color bg-white" style={{ border: "2px solid #e6151c", height: "20px", width: "20px", borderRadius: "50%", left: "85%", top: "10%", fontSize: "11px", fontWeight: "700", padding: "1px" }} >
                                {bookmarkedList?.length}
                                {/* <span className="visually-hidden">Total Bookmarked</span> */}
                            </span>
                            <div className="dropdown-bookmarked-content">
                                {
                                    bookmarkedList.length > 0
                                        ? bookmarkedList.map(bookmark => <Link to={`/chefs/${bookmark.chef_id}`} key={bookmark.id}>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <div>
                                                    <Image src={bookmark.recipe_image} rounded height={50} width={50}></Image>
                                                </div>
                                                <div>
                                                    <small>{bookmark.name}</small>
                                                </div>
                                                <div>
                                                    <button className='bg-white border-0' onClick={() => handleRemoveBookmarked(bookmark)}><FaRegTrashAlt className='brand-color' /></button>
                                                </div>
                                            </div>
                                        </Link>)
                                        : <p className='mb-0 p-3'>No recipe added yet</p>
                                }

                            </div>
                        </button>
                    }
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                </div>
                <div style={{ width: "45%" }} className="collapse navbar-collapse nav-container nav-left mt-2" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <ActiveLink to="/">Home</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink to="/chefs">Chefs</ActiveLink>
                        </li>
                        <li className="nav-item">
                            <ActiveLink to="/recipes">Recipes</ActiveLink>
                        </li>
                        {/* <li className="nav-item">
                            <ActiveLink to="/blogs">Blogs</ActiveLink>
                        </li> */}
                        <li className="nav-item">
                            <ActiveLink to="/about">About Us</ActiveLink>
                        </li>
                        {/* Display In small Device */}
                        <div className="user-small-device">
                            {
                                user
                                    ? <>
                                        <li className="nav-item " onClick={handleLogout}>
                                            <span className='text-secondary'>Logout</span>
                                        </li>
                                    </>
                                    : <Link to="/login"><button className='brand-btn' >Login</button></Link>
                            }
                        </div>
                    </ul>
                </div>
                <div style={{ width: "55%" }} className='nav-container d-flex justify-content-between align-items-center nav-right'>
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img height={60} src={logo} alt="" />
                        </Link>
                    </div>
                    {/* Display In lg device */}
                    <div className='user-large-device'>
                        <ul className='navbar-nav mb-2 mb-lg-0'>

                            {
                                user
                                    ?
                                    <div className='d-flex align-items-center '>
                                        <div className='text-capitalize fw-semibold brand-color'>{user?.displayName}</div>
                                        <button className="position-relative mx-2 border-0 bg-white dropdown-bookmarked">
                                            <FaBookmark style={{ color: "#e6151c", fontSize: "20px" }} />
                                            <span className="position-absolute translate-middle roundedCircle brand-color bg-white" style={{ border: "2px solid #e6151c", height: "20px", width: "20px", borderRadius: "50%", left: "85%", top: "10%", fontSize: "11px", fontWeight: "700", padding: "1px" }} >
                                                {bookmarkedList?.length}
                                                {/* <span className="visually-hidden">Total Bookmarked</span> */}
                                            </span>
                                            <div className="dropdown-bookmarked-content">
                                                {
                                                    bookmarkedList.length > 0
                                                        ? bookmarkedList.map(bookmark => <Link to={`/chefs/${bookmark.chef_id}`} key={bookmark.id} >
                                                            <div className='d-flex align-items-center justify-content-between'>
                                                                <div>
                                                                    <Image src={bookmark.recipe_image} rounded height={50} width={50}></Image>
                                                                </div>
                                                                <div>
                                                                    <small>{bookmark.name}</small>
                                                                </div>
                                                                <div>
                                                                    <button className='bg-white border-0' onClick={() => handleRemoveBookmarked(bookmark)}><FaRegTrashAlt className='brand-color' /></button>
                                                                </div>
                                                            </div>
                                                        </Link>)
                                                        : <p className='mb-0 p-3'>No recipe added yet</p>
                                                }

                                            </div>
                                        </button>
                                        <NavDropdown title={<FaRegUserCircle className='user-section' style={{ color: "#e6151c" }} />} id="nav-dropdown">
                                            {/* <NavDropdown.Item eventKey="4.1">Bookmarked Recipe</NavDropdown.Item> */}
                                            <NavDropdown.Item eventKey="4.1" onClick={handleLogout}>Logout</NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                    : <Link to="/login"><button className='brand-btn' >Login</button></Link>
                            }

                            {/* <li>
                                {
                                    user
                                        ? <button className='brand-btn' onClick={handleLogout}>Logout</button>
                                        : <Link to="/login"><button className='brand-btn' >Login</button></Link>
                                }
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;