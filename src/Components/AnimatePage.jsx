import { motion } from "framer-motion";
import React from "react";

const AnimatePage = ({ children }) => {
    const scaleY = {
        enter: {
            scaleY: 0,
            transformOrigin: "bottom",
            transition: {
                duration: 0.85,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.8,
            },
        },
        exit: {
            scaleY: 1,
            transformOrigin: "top",
            transition: {
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
            },
        },
    };
    
    const opacity = {

        enter: {
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.76,
            },
        },
        exit: {
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.495,
            },
        },
    };
    
    return (
        <div className="">
            <motion.div
                variants={scaleY}
                initial="initial"
                animate="enter"
                exit="exit"
                className="fixed top-0 left-0 bg-color-primary z-[9999] w-full h-screen flex items-center justify-center font-font3 text-[28px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-color-secondary"
            >
                <motion.div
                    variants={opacity}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    ✧ Artisanal Sweetness ✧
                </motion.div>
            </motion.div>
            <div>{children}</div>
        </div>
    );
};

export default AnimatePage;