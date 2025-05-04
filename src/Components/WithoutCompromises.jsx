import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
const WithoutCompromises = ({ isDesktop, setIsDesktop }) => {
    const [width, setWidth] = useState();
    const compromisesEmptyRef = useRef();
    const compromisesRef = useRef();

    const { scrollYProgress } = useScroll({
        target: compromisesEmptyRef,
        offset: ["start end", "end end"],
    });

    useEffect(() => {
        const mainWidth =
            compromisesRef.current.scrollWidth - window.innerWidth;
        setWidth(mainWidth);
        // console.log(compromisesRef.current.scrollWidth);
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    const x = useTransform(
        scrollYProgress,
        [0.02, 0.95],
        isDesktop ? ["0px", `-${width}px`] : [0, 0]
    );
    return (
        <section className="relative w-full text-color-primary border-color-primary flex flex-col justify-center mt-10 sm:mt-20 md:mt-25 lg:mt-30 xl:mt-40 ">
            <div className="static md:sticky top-0 flex flex-col justify-between min-h-screen overflow-hidden">
                <div className="mb-10 pt-5 px-3 sm:px-4 md:px-5">
                    <h4 className="font-font3 leading-[85%] text-[45px] sm:text-6xl md:text-[7vw] lg:text-[6.5vw] 2xl:text-[6.5vw] text-center">
                        Sweetness without compromises.
                    </h4>
                </div>
                <div className="">
                    <motion.div
                        style={{ x }}
                        ref={compromisesRef}
                        className="flex flex-col md:flex-row items-center md:items-end gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-8 2xl:gap-10 w-full px-3 sm:px-4 md:px-5"
                    >
                        <div className="border-b md:border-b-0 border-t border-x shrink-0">
                            <div className="w-auto aspect-video md:aspect-auto md:w-[450px] xl:w-[500px] 2xl:w-[32vw] h-auto md:h-[65vh] 2xl:h-auto relative">
                                <div className="w-1/2 border-r h-full absolute top-0 left-0 z-0" />
                                <div className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden z-20 relative">
                                    <img
                                        className="w-full h-full object-cover rounded-2xl"
                                        src="/Images/section3.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-b md:border-b-0 border-t border-x shrink-0">
                            <div className="w-auto aspect-video md:aspect-auto md:w-[450px] lg:w-[400px] xl:w-[500px] 2xl:w-[32vw] h-auto md:h-[65vh] 2xl:h-auto relative">
                                <div className="w-1/2 border-r h-full absolute top-0 left-0 z-0" />
                                <div className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden z-20 relative">
                                    <img
                                        className="w-full h-full object-cover rounded-2xl"
                                        src="/Images/section5b.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="border-b md:border-b-0 border-t border-x shrink-0">
                            <div className="w-auto aspect-video md:aspect-auto md:w-[450px] lg:w-[400px] xl:w-[500px] 2xl:w-[32vw] h-auto md:h-[65vh] 2xl:h-auto relative">
                                <div className="w-1/2 border-r h-full absolute top-0 left-0 z-0" />
                                <div className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden z-20 relative">
                                    <img
                                        className="w-full h-full object-cover rounded-2xl"
                                        src="/Images/section5.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="max-w-full md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 2xl:max-w-[35%] w-full shrink-0 py-3 sm:py-3 md:py-2 lg:py-3 xl:py-4 2xl:py-5">
                            <h4 className="font-font2 leading-[85%] text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl uppercase ">
                                Supply chain
                            </h4>
                            <p className="text-sm md:text-base lg:text-lg leading-[130%]">
                                We follow the entire almond production chain,
                                from harvest to processing. Attention to the
                                quality of almonds guarantees the production of
                                sweets with an unmistakable taste.
                            </p>
                        </div>
                        <div className="border-t border-x shrink-0">
                            <div className="w-auto aspect-video md:aspect-auto md:w-[450px] lg:w-[400px] xl:w-[500px] 2xl:w-[32vw] h-auto md:h-[65vh] 2xl:h-auto relative">
                                <div className="w-1/2 border-r h-full absolute top-0 left-0 z-0" />
                                <div className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden z-20 relative">
                                    <img
                                        className="w-full h-full object-cover rounded-2xl"
                                        src="/Images/section5c.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block p-0 md:p-3 lg:p-4 xl:p-5" />
                    </motion.div>
                    <div className="border-y py-4 md:py-3 px-3 sm:px-4 md:px-5">
                        <h4 className="text-3xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-font3 leading-[110%] text-center">
                            Taste the Authentic Taste of Calabria: Almond Sweets
                            Prepared with Passion!
                        </h4>
                    </div>
                </div>
            </div>
            <div
                ref={compromisesEmptyRef}
                className="w-full hidden md:block h-[300vh] relative pointer-events-none select-none"
            />
        </section>
    );
};

export default WithoutCompromises;
