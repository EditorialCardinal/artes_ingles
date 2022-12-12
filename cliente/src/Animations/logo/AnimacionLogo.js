import React, {createRef, useEffect} from 'react';

import lottie from "lottie-web";
import animation from "./animacionLogoCardinal.json";

const AnimacionLogo = () => {
    let animationContainer = createRef();

    lottie.loadAnimation({
        container: animationContainer.current, // current instance of our container!
        animationData: animation, // animation file!
        renderer: "svg",
        loop: false,
        autoplay: true
    });

    useEffect(() => {
        const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: animation
        });
        return () => anim.destroy(); // optional clean up for unmounting
    }, []);

    return (
        <div className="animation-container">
            <div ref={animationContainer} />
        </div>
    )
}

export default AnimacionLogo