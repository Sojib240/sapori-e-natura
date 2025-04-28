import React from "react";
import Lenis from "lenis";

const SmoothScroll = () => {
    const lenis = new Lenis({
        duration: 0.8,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return null;
};

export default SmoothScroll;
