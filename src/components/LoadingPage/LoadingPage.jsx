import { useLottie } from "lottie-react";
import chefAni from "../../assets/animation/miniChef.json";
import "./LoadingPage.css"

const LoadingPage = () => {

    const options = {
        animationData: chefAni,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div className='d-flex justify-content-center' style={{height:"87vh"}}>
            <p className='anima'>
                {View}
            </p>
        </div>
    );
};

export default LoadingPage;