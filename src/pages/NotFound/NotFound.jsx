import React from 'react';
import notFound from '../../assets/notFound.jpg'

const NotFound = () => {
    return (
        <div style={{backgroundColor: "#F9F9F9", margin:' 0 auto', textAlign: 'center', height:'500px'}}>
            <img src={notFound} alt="" />
            <p>The page you are trying to reach does not exist</p>
        </div>
    );
};

export default NotFound;