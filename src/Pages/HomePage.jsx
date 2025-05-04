import React from "react";
import Hero from "../Components/Hero";
import ProductShowCase from "../Components/ProductShowCase";
import ArtisanalSweets from "../Components/ArtisanalSweets";
import Materials from "../Components/Materials";
import WithoutCompromises from "../Components/WithoutCompromises";
import AnimatePage from "../Components/AnimatePage";

const HomePage = ({ isDesktop, setIsDesktop }) => {
    return (
        <AnimatePage>
            <div>
                <Hero />
                <ProductShowCase
                    isDesktop={isDesktop}
                    setIsDesktop={setIsDesktop}
                />
                <ArtisanalSweets />
                <Materials isDesktop={isDesktop}
                    setIsDesktop={setIsDesktop} />
                <WithoutCompromises
                    isDesktop={isDesktop}
                    setIsDesktop={setIsDesktop}
                />
            </div>
        </AnimatePage>
    );
};

export default HomePage;
