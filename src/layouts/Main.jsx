import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';

const Main = () => {
    const footerStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    }
    return (
        <div style={footerStyle}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;