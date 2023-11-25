import { useLottie } from "lottie-react";
import nFoundAni from "../../assets/animation/notFoundAnimation.json";
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    const options = {
        animationData: nFoundAni,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
            <p className='anima'>
                {View}
            </p>
            <button className='brand-btn'><Link to="/" className='text-decoration-none text-white'>Go to Home</Link></button>
        </div>
    );
};

export default NotFound;