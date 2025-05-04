import {
    motion,
    useInView,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

const ArtisanalSweets = () => {
    const artisanalSweetsMainRef = useRef();
    const artisanalRef = useRef();
    const imageRef = useRef();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const heightOfset =
            artisanalRef.current.offsetHeight - imageRef.current.offsetWidth;
        setHeight(heightOfset);
    }, []);
    const { scrollYProgress } = useScroll({
        target: artisanalSweetsMainRef,
        offset: ["start end", "end end"],
    });

    // Different speeds
    // const springConfig = { stiffness: 180, damping: 25 };
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `-${height}px`]);

    const parentRef = useRef();
    const isInView = useInView(parentRef, { once: true, margin: "-100px" });

    return (
        <div
            ref={artisanalSweetsMainRef}
            className="w-full bg-color-secondary mt-20 sm:mt-25"
        >
            <section
                ref={artisanalRef}
                className="sticky top-0 text-color-primary border-color-primary w-full px-3 sm:px-4 md:px-5 pt-5 mb-0 sm:mb-25 lg:mb-40"
            >
                <p className="font-font2 uppercase text-[45px] sm:text-[70px] md:text-[90px] lg:text-[120px] xl:text-[140px] 2xl:text-[180px] leading-[80%] text-left sm:text-left">
                    Artisanal sweets, authentic taste, guaranteed well-being.
                </p>
                <p className="font-font1 text-base md:text-lg lg:text-xl xl:text-2xl text-left sm:text-right mt-4 sm:mt-5 md:mt-8 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] w-full ml-auto">
                    The "cold" processing to obtain almond paste leaves the
                    healthy nutrients naturally contained in almonds unaltered.
                </p>
                <div className="w-full sm:pr-[12%] static sm:absolute bottom-0 right-0 mt-5 sm:mt-0">
                    <motion.div
                        ref={imageRef}
                        style={{ y: y }}
                        className="w-25 md:w-30 lg:w-34 xl:w-38 2xl:w-48 rounded-full sm:ml-auto"
                    >
                        <motion.img
                            animate={{ rotate: -360 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 10,
                            }}
                            className="rounded-full"
                            src="/Images/Icons/text.png"
                            alt=""
                        />
                    </motion.div>
                </div>
            </section>

            <section className="px-3 sm:px-4 md:px-0 bg-color-secondary w-full">
                <div className="w-full relative text-color-primary border-x md:border-x-0 border-y bg-color-secondary">
                    <div className="px-5 py-8">
                        <p className="font-font3 text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                            Natural flavor in every bite
                        </p>
                    </div>
                    <div className="w-full overflow-hidden border-y py-1.5">
                        <Marquee className="overflow-hidden">
                            <p className="text-base xl:text-lg font-font1 py-[1px] md:py-0.5 leading-[80%]">
                                Customer well-being is a source of inspiration
                                for Sapori e Natura di Calabria &nbsp; Customer
                                well-being is a source of inspiration for Sapori
                                e Natura di Calabria &nbsp; Customer well-being
                                is a source of inspiration for Sapori e Natura
                                di Calabria &nbsp; Customer well-being is a
                                source of inspiration for Sapori e Natura di
                                Calabria &nbsp; Customer well-being is a source
                                of inspiration for Sapori e Natura di Calabria
                                &nbsp;
                            </p>
                        </Marquee>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="aspect-square relative border-r-0 md:border-r border-b md:border-b-0 col-span-1">
                            <div className="w-1/2 h-full absolute top-0 left-0 border-r" />
                            <div className="absolute top-0 left-0 p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 w-full h-full overflow-hidden">
                                <img
                                    className="w-full h-full object-cover rounded-2xl"
                                    src="/Images/section3.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="col-span-1 aspect-square flex justify-center items-center flex-col  uppercase relative overflow-hidden">
                            <motion.div
                                ref={parentRef}
                                className="absolute bottom-0 left-0 w-full flex items-center"
                            >
                                {[
                                    "Gluten Free",
                                    "Cholesterol Free",
                                    "Without Preservatives",
                                ].map((text, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ y: "-300%", rotate: -360 }}
                                        animate={
                                            isInView
                                                ? { y: "0%", rotate: 0 }
                                                :null
                                        }
                                        transition={{
                                            type: "spring",
                                            stiffness: 100, // Adjust stiffness for smoothness
                                            damping: 8, // Adjust damping for less bounce
                                            mass: 1, // Adjust mass to control speed
                                            delay: idx * 0.2, // Delay based on index for stagger effect
                                            ease: "easeOut", // Ease out for smooth deceleration
                                        }}
                                        className="aspect-square w-full rounded-full bg-color-secondary border uppercase p-3 lg:p-5 text-[3.5vw] sm:text-xl md:text-sm leading-[130%] lg:text-lg 2xl:text-2xl font-font3 flex items-center justify-center text-center"
                                    >
                                        {text}
                                    </motion.div>
                                ))}
                            </motion.div>

                            <p className="font-font2 leading-[100%] text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                Simply
                            </p>
                            <p className="font-font3 leading-[100%] text-6xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                                Healthy!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ArtisanalSweets;
