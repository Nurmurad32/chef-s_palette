import BannerSwipper from './HomeComponent/BannerSwipper';
import ChefsSwiper from './HomeComponent/ChefsSwiper';
import HomeCategories from './HomeComponent/HomeCategories';
import WhoWeAre from './HomeComponent/WhoWeAre';
import HomeRecipes from './HomeComponent/HomeRecipes';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <LoadingPage />
    }


    return (
        <div>
            <Helmet>
                <title>Home || Chef's Palette</title>
            </Helmet>
            <section className='mb-5 mt-1'>
                <BannerSwipper></BannerSwipper>
            </section>

            {/* -------------------- Category Section ---------------------------*/}

            <section className='container my-5'>
                <h2 className='text-center mt-5 underlineHome'>Our Recipe Categories</h2>
                <HomeCategories></HomeCategories>
            </section>

            {/* -------------------- About Us Section-----------------------------*/}

            <section className='container my-5'>
                <h2 className='text-center underlineHome mb-5 mt-3' >Who <b>We Are ?</b></h2>
                <WhoWeAre></WhoWeAre>
            </section>

            {/* --------------------Chef Section-----------------------------*/}

            <section className='container my-5'>
                <h2 className='text-center underlineHome' >Meet Our Expert Chefs</h2>
                <ChefsSwiper></ChefsSwiper>
            </section>

            {/* --------------------Recipe Section-----------------------------*/}

            <section className='container my-5'>
                <HomeRecipes></HomeRecipes>
            </section>

        </div>
    );
};

export default Home;