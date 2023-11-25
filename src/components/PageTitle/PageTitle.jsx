import "./PageTitle.css"
import { useLottie } from "lottie-react";
import chefAni from "../../assets/animation/miniChef.json";

const PageTitle = ({ title }) => {
    const options = {
        animationData: chefAni,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div className='d-flex flex-column align-items-center title-section'>
            <div className='title-section-col'>
                <p className='anim mb-0'>
                    {View}
                </p>
            </div>
            <div className='title-section-col mb-5'>
                <h2 className='text-center underline' >{title}</h2>
            </div>
            
        </div>
    );
};

export default PageTitle;