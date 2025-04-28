import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import AnimatePage from "../Components/AnimatePage";

const AboutPage = () => {
    const aboutRef = useRef(null);
    const imageRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const heightOfset =
            aboutRef.current.offsetHeight - imageRef.current.offsetWidth;
        setHeight(heightOfset);
    }, []);

    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0", `${height}px`]);
    return (
        <AnimatePage>
            <div className="pt-35 sm:pt-44 lg:pt-52 text-color-primary border-color-primary">
                <section className="px-3 sm:px-4 md:px-5">
                    <div className="w-full md:w-[80%] lg:w-[66%] mb-12 md:mb-15 lg:mb-20 xl:mb-25">
                        <h4 className="font-font2 text-6xl sm:text-8xl lg:text-[9vw] leading-[80%] uppercase">
                            A caress from Calabria
                        </h4>
                    </div>
                    <div className="w-full md:w-[80%] lg:w-[55%] mx-auto mb-16 md:mb-20 lg:mb-25 xl:mb-30 2xl:mb-40">
                        <p className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-font3">
                            Sapori e Natura di Calabria produces artisanal baked
                            goods whose main ingredient is almonds
                        </p>
                    </div>
                </section>
                <section className="relative">
                    <div className="sticky top-0">
                        <img
                            className="w-full"
                            src="/Images/about-1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="pb-15 md:pb-20 lg:pb-25 xl:pb-30 2xl:pb-35 relative bg-color-secondary">
                        <div className="py-6 border-y px-3 sm:px-4 md:px-5">
                            <p className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-5xl font-font3 text-center w-full md:w-[80%] lg:w-[60%] mx-auto">
                                We are located in Castrovillari, in the
                                territory of the Pollino National Park
                            </p>
                        </div>
                    </div>

                    <div ref={aboutRef} className="bg-color-secondary relative">
                        <div className="max-w-[1100px] w-full mx-auto flex flex-col md:flex-row items-start justify-between px-3 sm:px-4 md:px-5">
                            <div className="w-full md:w-[65%] xl:w-[60%] text-sm md:text-base">
                                <div className="">
                                    <p>
                                        Located in Castrovillari, in the Pollino
                                        National Park, the company follows the
                                        entire almond production chain, from
                                        harvest to processing. The attention to
                                        the quality of the almonds guarantees
                                        the production of sweets with an
                                        unmistakable taste.
                                    </p>
                                    <p className="mt-5">
                                        In the company laboratory, the flagship
                                        products, the Amaretti di Calabria and
                                        the Mandorlotti, are made using
                                        artisanal methods and at cold
                                        temperatures to maintain all the
                                        nutritional elements of the almonds
                                        unaltered.
                                    </p>
                                    <p className="mt-5">
                                        The well-being of its customers is a
                                        source of inspiration for Sapori e
                                        Natura di Calabria: the Amaretti di
                                        Calabria and the Mandorlotti handcrafted
                                        in Castrovillari are gluten-free,
                                        lactose-free and yeast-free.
                                    </p>
                                </div>
                                <div className="mt-14 md:mt-20 lg:mt-25 xl:mt-35">
                                    <p className="font-font2 leading-[85%] text-3xl sm:text-4xl md:text-[34px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] uppercase">
                                        The production phases of our Amaretti
                                        and Mandorlotti
                                    </p>
                                    <p className="mt-8">
                                        We use only Italian almonds, preferring
                                        those produced in our splendid territory
                                        that is part of the Pollino National
                                        Park. For this reason,
                                        <strong> we guarantee</strong> the
                                        entire almond supply chain, from
                                        shelling to the finished product.
                                    </p>
                                    <p className="mt-5">
                                        After washing them, the shelled almonds
                                        are mixed with the appropriate
                                        quantities of sugar. The mixture is
                                        worked “cold” in a roller refiner to
                                        obtain the compound. The rollers
                                        compress the almonds with the sugar
                                        several times without increasing the
                                        temperature of the product. This type of
                                        processing, called “cold”, guarantees
                                        the perfect integrity of the nutrients
                                        present in the almonds such as essential
                                        oils, mineral salts and vitamins.
                                    </p>
                                    <p>
                                        The almond and sugar paste is then
                                        kneaded with the egg white
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-[35%] xl:w-[40%] hidden md:block">
                                <motion.div
                                    style={{ y: y }}
                                    ref={imageRef}
                                    className="w-35 lg:w-40 xl:w-45 mx-auto -translate-y-[20px]"
                                >
                                    <motion.img
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            repeat: Infinity,
                                            ease: "linear",
                                            duration: 10,
                                        }}
                                        className="w-full"
                                        src="/Images/Icons/text.png"
                                        alt=""
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-3 sm:px-4 md:px-5 w-full md:w-[80%] lg:w-[60%] mx-auto pb-12 md:pb-16 lg:pb-20 xl:pb-22 2xl:pb-25 pt-12 sm:pt-26 md:pt-38 lg:pt-50 xl:pt-55 2xl:pt-60">
                    <div className="bg-color-secondary">
                        <p className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-5xl font-font3 text-center">
                            When the dough is ready, the Amaretti or Mandorlotti
                            are formed. After baking in the oven they are ready
                            to be enjoyed!
                        </p>
                    </div>
                </section>
            </div>
        </AnimatePage>
    );
};

export default AboutPage;
