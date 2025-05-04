import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const Materials = ({ isDesktop, setIsDesktop }) => {
    const materialsRef = useRef();
    const { scrollYProgress } = useScroll({
        target: materialsRef,
        offset: ["start end", "end start"],
    });
    const y1 = useTransform(scrollYProgress, [0, 1], isDesktop ? ["0%", "-100%"]:["0", "0"]);
    const y2 = useTransform(scrollYProgress, [0, 1], isDesktop ? ["0%", "-100%"]:["0", "0"]);
    const y3 = useTransform(scrollYProgress, [0, 1], isDesktop ? ["0%", "-170%"]:["0", "0"]);
    const y4 = useTransform(scrollYProgress, [0, 1], isDesktop ? ["0%", "120%"]:["0", "0"]);
    const y5 = useTransform(scrollYProgress, [0, 1], isDesktop ? ["0%", "200%"]:["0", "0"]);
    return (
        <section
            ref={materialsRef}
            className="text-color-primary border-color-primary mt-20 sm:mt-32 px-3 sm:px-4 md:px-5 relative"
        >
            <div className="text-[12vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] leading-[75%] font-font2 py-2 lg:py-3 xl:py-5 border-b uppercase ">
                <h4>Raw materials</h4>
            </div>
            <div className="text-[12vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] leading-[75%] font-font2 py-2 lg:py-3 xl:py-5 border-b uppercase text-right">
                <h4>Excellent</h4>
            </div>
            <div className="text-[12vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] leading-[75%] font-font2 py-2 lg:py-3 xl:py-5 border-b uppercase">
                <h4>For a Taste</h4>
            </div>
            <div className="text-[12vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] xl:text-[9vw] leading-[75%] font-font2 py-2 lg:py-3 xl:py-5 border-b uppercase text-right">
                <h4>Unmistakable</h4>
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-3 sm:px-4 md:px-5">
                <div className="w-full flex justify-between items-center gap-1 sm:gap-3 mb-15">
                    <motion.div
                        style={{ y: y1 }}
                        className="flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.3vw] font-font3 border rounded-full uppercase bg-color-secondary translate-y-[-100%] md:translate-y-[40%] px-[6vw] sm:px-12 md:px-15 lg:px-18 xl:px-20 2xl:px-24 aspect-[3/1.1] text-center"
                    >
                        <p>Almonds</p>
                    </motion.div>
                    <motion.div
                        style={{ y: y2 }}
                        className="flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.3vw] font-font3 border rounded-full uppercase bg-color-secondary translate-y-[30%] md:translate-y-[0%] px-[6vw] sm:px-12 md:px-15 lg:px-18 xl:px-20 2xl:px-24 aspect-[3/1.1] text-center"
                    >
                        <p>Pistachio</p>
                    </motion.div>
                    <motion.div
                        style={{ y: y3 }}
                        className="flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.3vw] font-font3 border rounded-full uppercase bg-color-secondary translate-y-[-50%] md:translate-y-[-10%] lg:translate-y-[30%] xl:translate-y-[100%] px-[6vw] sm:px-12 md:px-15 lg:px-18 xl:px-20 2xl:px-24 aspect-[3/1] text-center"
                    >
                        <p>Black cherry</p>
                    </motion.div>
                </div>
                <div className="w-full flex justify-evenly items-center gap-2 sm:gap-3">
                    <motion.div
                        style={{ y: y4 }}
                        className="flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.3vw] font-font3 border rounded-full uppercase bg-color-secondary translate-y-[10%] md:translate-y-[-10%] lg:translate-y-[10%] xl:translate-y-[20%] px-[6vw] sm:px-12 md:px-15 lg:px-18 xl:px-20 2xl:px-24 aspect-[3/1.1] text-center"
                    >
                        <p>Licorice</p>
                    </motion.div>
                    <motion.div
                        style={{ y: y5 }}
                        className="flex justify-center items-center text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.3vw] font-font3 border rounded-full uppercase bg-color-secondary translate-y-[30%] md:translate-y-[-50%] lg:translate-y-[-10%] xl:translate-y-[10%] px-[6vw] sm:px-12 md:px-15 lg:px-18 xl:px-20 2xl:px-24 aspect-[3/1] text-center"
                    >
                        <p>Clementines</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Materials;
