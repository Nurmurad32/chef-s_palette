import React from 'react';

const Testimonial = () => {
    return (
        <section className=' text-center' style={{ backgroundColor: '#F2ECE0' , padding: '100px 0px' }}>
                <h2 className='pb-5'>
                    What Customers Are Saying
                    About Us
                </h2>
                <div className='container d-flex justify-content-center'>
                    <div className="card testimonial-card" style={{width: "18rem" , border: 'none'}}>
                        <img src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-3-150x150.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">“When we were in Portugal we were all blown away by your service and will be recommending you to our friends.”</p>
                                <h5 className="card-title">James B.</h5>
                            </div>
                    </div>
                    <div className="card testimonial-card" style={{width: "18rem", border: 'none'}}>
                        <img src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-1-150x150.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">“When we were in Portugal we were all blown away by your service and will be recommending you to our friends.”</p>
                                <h5 className="card-title">James B.</h5>
                            </div>
                    </div>
                    <div className="card testimonial-card" style={{width: "18rem", border: 'none'}}>
                        <img src="https://alanzo.ancorathemes.com/wp-content/uploads/2017/09/testi-3-150x150.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">“When we were in Portugal we were all blown away by your service and will be recommending you to our friends.”</p>
                                <h5 className="card-title">James B.</h5>
                            </div>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial;