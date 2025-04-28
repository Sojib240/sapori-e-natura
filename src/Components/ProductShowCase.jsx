import React, { useContext, useEffect, useRef, useState } from "react";
import { cookiesContext } from "../Utils/Context";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

const ProductShowCase = ({ isDesktop, setIsDesktop }) => {
    const [cookies] = useContext(cookiesContext);
    const [hoveredId, setHoveredId] = useState(null);

    const productShowRef = useRef();
    const { scrollYProgress } = useScroll({
        target: productShowRef,
        offset: ["start end", "end center"],
    });

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize(); // check initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const springConfig = { stiffness: 180, damping: 25 };

    // If not desktop, just fix y to 0%
    const y1 = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isDesktop ? ["0%", "-6%"] : ["0%", "0%"]
        ),
        springConfig
    );
    const y2 = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isDesktop ? ["0%", "-12%"] : ["0%", "0%"]
        ),
        springConfig
    );
    const y3 = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isDesktop ? ["0%", "-18%"] : ["0%", "0%"]
        ),
        springConfig
    );

    return (
        <section
            ref={productShowRef}
            className="pt-35 md:pt-40 lg:pt-45 xl:pt-50 2xl:pt-60 px-3 sm:px-4 md:px-5 text-color-primary"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-3 xl:gap-5">
                <motion.div
                    style={{ y: y1 }}
                    className="first col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-3 xl:gap-5"
                >
                    {cookies
                        .filter((cook) => [6, 9].includes(cook.id))
                        .map((cook) => (
                            <Link
                                to={`/${cook.category}/${cook.slug}`}
                                onMouseEnter={() => setHoveredId(cook.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                key={cook.id}
                                className="border text-color-primary border-color-primary group"
                            >
                                <p className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 border-b font-font3 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] leading-[110%]">
                                    {cook.title}
                                </p>
                                <Marquee
                                    play={
                                        isDesktop ? hoveredId === cook.id : true
                                    }
                                >
                                    <p className="text-sm md:text-base xl:text-lg font-font1 py-[1px] md:py-0.5">
                                        200g bag containing 10 amaretti biscuits
                                        of 20g each, individually wrapped.
                                        &nbsp; 200g bag containing 10 amaretti
                                        biscuits of 20g each, individually
                                        wrapped. &nbsp; 200g bag containing 10
                                        amaretti biscuits of 20g each,
                                        individually wrapped.
                                    </p>
                                </Marquee>
                                <div className="grid grid-cols-2 border-t">
                                    <div className="col-span-1 border-r p-5"></div>
                                    <div className="col-span-1 font-font3 text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[36px] text-center p-2 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5">
                                        € {cook.price}.00
                                    </div>
                                </div>
                                <div className="aspect-[2/2.3] relative border-t">
                                    <div className="scale-0 easing transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 w-[80%] absolute top-1/2 left-1/2 -translate-1/2 z-[80]">
                                        <img
                                            className="w-full"
                                            src="/Images/Icons/circle-svg.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-1/2 border-r h-full absolute top-0 left-0" />
                                    <div className="absolute top-0 left-0 p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover rounded-2xl"
                                            src={cook.image}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                </motion.div>
                <motion.div
                    style={{ y: y2 }}
                    className="second col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-3 xl:gap-5"
                >
                    {cookies
                        .filter((cook) => [1, 3].includes(cook.id))
                        .map((cook, idx) => (
                            <div className="">
                                {idx === 0 && (
                                    <div className="mb-14 sm:mb-16 md:mb-15 lg:mb-18 xl:mb-20 2xl:mb-25 mt-6">
                                        <p className="font-font3 text-base sm:text-lg xl:text-2xl 2xl:text-[28px] mb-2 xl:mb-4">
                                            Try ours
                                        </p>
                                        <p className="font-font2 leading-[85%] text-3xl sm:text-4xl md:text-[34px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] uppercase">
                                            Amaretti and Almond Biscuits
                                        </p>
                                    </div>
                                )}
                                {idx === 1 && (
                                    <div className="mb-14 sm:mb-16 md:mb-15 lg:mb-18 xl:mb-20 2xl:mb-25 mt-6">
                                        <p className="font-font3 text-base sm:text-lg xl:text-2xl 2xl:text-[28px] mb-2 xl:mb-4">
                                            100% Italian Almonds
                                        </p>
                                        <p className="font-font2 leading-[85%] text-3xl sm:text-4xl md:text-[34px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] uppercase">
                                            Pure nature in every bite
                                        </p>
                                    </div>
                                )}
                                <Link
                                    to={`/${cook.category}/${cook.slug}`}
                                    onMouseEnter={() => setHoveredId(cook.id)}
                                    onMouseLeave={() => setHoveredId(null)}
                                    key={cook.id}
                                    className="border text-color-primary border-color-primary group block"
                                >
                                    <p className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 border-b font-font3 leading-[110%] text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px]">
                                        {cook.title}
                                    </p>
                                    <Marquee
                                        play={
                                            isDesktop
                                                ? hoveredId === cook.id
                                                : true
                                        }
                                    >
                                        <p className="text-sm md:text-base xl:text-lg font-font1 py-[1px] md:py-0.5">
                                            200g bag containing 10 amaretti
                                            biscuits of 20g each, individually
                                            wrapped. &nbsp; 200g bag containing
                                            10 amaretti biscuits of 20g each,
                                            individually wrapped. &nbsp; 200g
                                            bag containing 10 amaretti biscuits
                                            of 20g each, individually wrapped.
                                        </p>
                                    </Marquee>
                                    <div className="grid grid-cols-2 border-t">
                                        <div className="col-span-1 border-r p-5"></div>
                                        <div className="col-span-1 font-font3 text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[36px] text-center p-2 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5">
                                            € {cook.price}.00
                                        </div>
                                    </div>
                                    <div className="aspect-[2/2.3] relative border-t">
                                        <div className="scale-0 easing transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 w-[80%] absolute top-1/2 left-1/2 -translate-1/2 z-[80]">
                                            <img
                                                className="w-full"
                                                src="/Images/Icons/circle-svg.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="w-1/2 border-r h-full absolute top-0 left-0" />
                                        <div className="absolute top-0 left-0 p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden">
                                            <img
                                                className="w-full h-full object-cover rounded-2xl"
                                                src={cook.image}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                </motion.div>
                <motion.div
                    style={{ y: y3 }}
                    className="third col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-3 xl:gap-5"
                >
                    {cookies
                        .filter((cook) => [8, 2].includes(cook.id))
                        .map((cook) => (
                            <Link
                                to={`/${cook.category}/${cook.slug}`}
                                onMouseEnter={() => setHoveredId(cook.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                key={cook.id}
                                className="border text-color-primary border-color-primary group"
                            >
                                <p className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 border-b font-font3 text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] leading-[110%]">
                                    {cook.title}
                                </p>
                                <Marquee
                                    play={
                                        isDesktop ? hoveredId === cook.id : true
                                    }
                                >
                                    <p className="text-sm md:text-base xl:text-lg font-font1 py-[1px] md:py-0.5">
                                        200g bag containing 10 amaretti biscuits
                                        of 20g each, individually wrapped.
                                        &nbsp; 200g bag containing 10 amaretti
                                        biscuits of 20g each, individually
                                        wrapped. &nbsp; 200g bag containing 10
                                        amaretti biscuits of 20g each,
                                        individually wrapped.
                                    </p>
                                </Marquee>
                                <div className="grid grid-cols-2 border-t">
                                    <div className="col-span-1 border-r p-5"></div>
                                    <div className="col-span-1 font-font3 text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[36px] text-center p-2 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5">
                                        € {cook.price}.00
                                    </div>
                                </div>
                                <div className="aspect-[2/2.3] relative border-t">
                                    <div className="scale-0 easing transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 w-[80%] absolute top-1/2 left-1/2 -translate-1/2 z-[80]">
                                        <img
                                            className="w-full"
                                            src="/Images/Icons/circle-svg.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="w-1/2 border-r h-full absolute top-0 left-0" />
                                    <div className="absolute top-0 left-0 p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5 w-full h-full overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover rounded-2xl"
                                            src={cook.image}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </Link>
                        ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductShowCase;
