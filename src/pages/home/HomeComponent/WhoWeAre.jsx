import { useLottie } from "lottie-react";
import chef from "../../../assets/animation/chef.json";

const WhoWeAre = () => {

    const options = {
        animationData: chef,
        loop: true
    };

    const { View } = useLottie(options);
    return (
        <div>
            <div className='row home-second-container '>
                <div className='col-md-6 d-flex justify-content-center'>
                    {View}
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                    <div>
                        <p>Welcome to <b>Chef's Palette</b> – your culinary haven! 🍽️✨</p>
                        <p>
                            We're a passionate team of food enthusiasts on a mission to make every meal a masterpiece. From discovering talented chefs to bringing you a diverse array of mouthwatering recipes, Chef's Palette is your go-to destination for culinary inspiration.
                        </p>
                        <p> <strong>👩‍🍳 Our Team:</strong>
                            Meet our culinary curators, each with a love for cooking and a keen eye for exceptional talent.
                            <br />
                            <br />
                            <strong>🌐 Global Flavors:</strong>
                            Explore a world of tastes – from traditional cuisines to avant-garde creations, we celebrate the rich tapestry of global flavors.
                            <br />
                            <br />
                            <strong>🤝 Community:</strong> Join us, save your favorite recipes, and share your culinary adventures with fellow foodies.
                            <br />
                        </p>


                        Ready to embark on a delicious journey? Let's savor the art of cooking together at Chef's Palette! <br /><br />

                        Happy Cooking,<br />
                        The Chef's Palette Team 🌟👩‍🍳👨‍🍳
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;