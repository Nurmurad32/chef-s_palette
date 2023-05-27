import React from 'react';
import Testimonial from './Testimonial';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import { MdOutlineFastfood } from "react-icons/md";

const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs)
    return (
        <div>
            {/* =================================================================
                                       banner section 
            =================================================================*/}
            <section className='banner-section'>
                <div className='banner-container d-flex flex-column align-items-center text-white m-auto '>
                    <h4>Welcome to Chef's Palette</h4>
                    <h1>Amazing & Delicious Food</h1>
                    <p className='w-50 text-center'>Food Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam obcaecati inventore cum. Laudantium delectus necessitatibus fugiat pariatur nemo minima?</p>
                    <button type="button" className="btn btn-outline-warning">More Info </button>
                </div>

            </section>
            {/* =================================================================
                                       Home Second Section 
            =================================================================*/}
            <section className='home-second-section container'>
                <div className='row home-second-container'>
                    <div className='col-md-4 d-flex justify-content-center'>
                        <img className='' style={{height:'500px', width:'auto'}} src="http://kodeforest.net/wp-demo/foodcourt/wp-content/uploads/2016/06/we-are.png" alt="" />
                    </div>
                    <div className='col-md-8 home-second-text'>
                        <h3>Who <b>We Are ?</b></h3>
                        <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>

                    </div>
                </div>
            </section>
            {/* =================================================================
                                       Chef Section 
            =================================================================*/}
            <section className='container mt-5 mb-5'>
                <h2 className='text-center'>Meet Our Expert Chefs</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        chefs.map(chef => <Chef
                            key={chef.id}
                            chef={chef}
                        ></Chef>)
                    }
                </div>


            </section>

            {/* =================================================================
                                       Testimonial Section 
            =================================================================*/}
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;