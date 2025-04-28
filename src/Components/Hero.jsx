import React from "react";

const Hero = () => {
    return (
        <section className="bg-cover bg-center w-full h-screen px-5 flex items-center justify-center">
            <img
                className="w-full h-screen object-cover absolute top-0 hidden lg:block"
                src="/Images/hero.jpg"
                alt=""
            />
            <img
                className="w-full h-screen object-cover absolute top-0 lg:hidden block"
                src="/Images/Products/Classic-Amaretto.jpg"
                alt=""
            />
            <div className="w-[98%] sm:w-[80%] lg:w-[50%] relative">
                <img
                    className="w-full"
                    src="/Images/Icons/circle-svg.svg"
                    alt=""
                />
            </div>
            <div className="absolute bottom-0">
                <h4 className="font-font3 text-color-primary text-[20vw] sm:text-9xl lg:text-[11.4vw]  lg:text-center leading-[100%] pl-3.5 sm:pl-5 lg:pl-0">
                    Amaretti e Mandorlotti
                </h4>
            </div>
        </section>
    );
};

export default Hero;
