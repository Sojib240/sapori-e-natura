import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { cookiesContext } from "../Utils/Context";
import { p } from "framer-motion/client";
import AnimatePage from "../Components/AnimatePage";

const Details = () => {
    const [cookies] = useContext(cookiesContext);
    const [ingred, setIngred] = useState(false);
    const [singleCookies, setSingleCookies] = useState();
    const [similarCookies, setSimilarCookies] = useState();

    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });

    useEffect(() => {
        if (containerRef.current && contentRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const contentWidth = contentRef.current.scrollWidth;
            const maxDrag = contentWidth - containerWidth;
            setConstraints({ left: -maxDrag, right: 0 });
        }
    }, [similarCookies]);
    // single product find
    const { slug } = useParams();
    useEffect(() => {
        const singleCookieData = cookies.filter((co) => co.slug === slug);
        setSingleCookies(singleCookieData);
    }, [slug]);
    // similar product find
    useEffect(() => {
        const FindSelectedCookie =
            cookies && cookies.find((sl) => sl.slug === slug);

        const selectedCookieFilter =
            cookies &&
            cookies.filter((cate) => cate.slug !== FindSelectedCookie.slug);
        setSimilarCookies(selectedCookieFilter);
    }, [cookies, slug]);

    return (
        <AnimatePage>
            <div className="border-color-primary text-color-primary font-font1 h-auto lg:h-screen">
                {singleCookies &&
                    singleCookies.map(
                        ({
                            id,
                            title,
                            slug,
                            image,
                            price,
                            amount,
                            allergens,
                            madeWith,
                            Ingredients,
                            NutritionalValues,
                            category,
                            stock,
                        }) => {
                            return (
                                <div
                                    key={id}
                                    className="flex flex-col lg:flex-row h-auto lg:h-[90vh]"
                                >
                                    <div className="w-full lg:w-[60%] xl:w-[67%] h-full relative overflow-hidden">
                                        <div className="w-full h-[60vh] lg:h-full">
                                            <img
                                                className="w-full h-full object-cover"
                                                src={image}
                                                alt=""
                                            />
                                        </div>
                                        <div
                                            className={`${
                                                ingred
                                                    ? "translate-y-0 opacity-100 pointer-events-auto"
                                                    : "translate-y-[100%] opacity-0 pointer-events-none"
                                            } max-w-[100%] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[500px] w-full absolute bottom-0 left-0 p-3 sm:p-4 md:p-5 easing2`}
                                        >
                                            <div className="p-3 sm:p-4 md:p-5 border bg-color-secondary rounded-[8px] relative">
                                                <button
                                                    onClick={() =>
                                                        setIngred(!ingred)
                                                    }
                                                    className="absolute top-0 right-0 p-3 cursor-pointer"
                                                >
                                                    <span className="md:w-3 lg:w-4 block">
                                                        <img
                                                            className="w-full"
                                                            src="/Images/Icons/close.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                </button>
                                                <div className="pt-5">
                                                    <p className="font-bold text-sm sm:text-base uppercase">
                                                        Ingredients
                                                    </p>
                                                    <p className="text-sm sm:text-base">
                                                        {Ingredients}
                                                    </p>
                                                </div>
                                                <div className="mt-3 sm:mt-5">
                                                    <p className="font-bold text-sm sm:text-base uppercase">
                                                        Nutritional Values
                                                    </p>
                                                    <p className="text-sm sm:text-base">
                                                        {NutritionalValues}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-[40%] xl:w-[33%] flex flex-col justify-end p-3 sm:p-4 md:p-5">
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setIngred(!ingred)
                                                }
                                                className="border items-center gap-3 py-1 2xl:py-1.5 pl-2 pr-6 w-max rounded-[8px] text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer mb-4 md:mb-6 lg:mb-10 2xl:mb-12 flex mt-5 lg:mt-0"
                                            >
                                                <p className="w-5 2xl:w-6 h-5 2xl:h-6 flex justify-center items-center border-2 rounded-full font-font3 transition-colors easing2 text-sm 2xl:text-base">
                                                    i
                                                </p>
                                                <p>
                                                    Ingredients and Nutritional
                                                    Values
                                                </p>
                                            </button>
                                            <h4 className="text-5xl md:text-6xl lg:text-[52px] xl:text-[64px] 2xl:text-7xl uppercase font-font2 leading-[80%] pt-5">
                                                {title}
                                            </h4>
                                            <p className="text-base lg:text-lg leading-[130%] mb-1 mt-6">
                                                {madeWith}
                                            </p>
                                            <p className="text-base">
                                                <strong>Packaging:</strong> 200g
                                                bag containing 10 amaretti
                                                biscuits of 20g each,
                                                individually wrapped.
                                            </p>
                                            <h4 className="text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-font3 mt-8">
                                                € {price}.00
                                            </h4>
                                            {stock == "in-stock" ? (
                                                <div className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-3 2xl:gap-5 mt-5">
                                                    <div className="w-1/2 overflow-hidden border rounded-[8px] flex items-center justify-between">
                                                        <button className="py-1 px-5 border-r text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                                            -
                                                        </button>
                                                        <p className="py-1 px-5 text-base sm:text-lg">
                                                            {amount}
                                                        </p>
                                                        <button className="py-1 px-5 border-l text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                                            +
                                                        </button>
                                                    </div>
                                                    <button className="border px-10 py-1 rounded-[8px] text-base sm:text-lg w-1/2 hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary">
                                                        Buy Now
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="border px-3 py-1.5 text-center mt-5 ">
                                                    <p className="text-base xl:text-lg">
                                                        Worn out
                                                    </p>
                                                </div>
                                            )}

                                            <div className="border mt-5">
                                                <p className="px-2 py-1 bg-color-primary text-color-secondary text-base sm:text-lg md:text-lg lg:text-base xl:text-lg">
                                                    Allergens
                                                </p>
                                                <p className="px-2 py-5 border-t text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl">
                                                    {allergens}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    )}

                {/* BUY MORE SECTION */}
                <div className="relative border-y h-auto lg:h-[10vh] flex flex-col lg:flex-row overflow-hidden select-none">
                    <div className="border-r-0 border-b lg:border-b-0 lg:border-r p-5 max-w-full lg:max-w-[20%] w-full shrink-0 flex items-center">
                        <h4 className="font-font2 text-3xl 2xl:text-4xl leading-[90%]">
                            BUY MORE:
                        </h4>
                    </div>

                    {/* 👇 this section is draggable */}
                    <div
                        ref={containerRef}
                        className="w-full overflow-hidden cursor-grab flex"
                    >
                        <motion.div
                            ref={contentRef}
                            className="flex w-max"
                            drag="x"
                            dragConstraints={constraints}
                            dragElastic={0.01}
                            dragTransition={{ power: 0.1, timeConstant: 100 }}
                            dragMomentum={false}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            {similarCookies &&
                                similarCookies.map(
                                    ({ title, id, category, slug }, idx) => {
                                        return (
                                            <div
                                                key={id}
                                                className="border-r px-5 py-7 shrink-0 flex items-center"
                                            >
                                                <Link
                                                    to={`/${category}/${slug}`}
                                                    className="font-font3 text-xl sm:text-2xl 2xl:text-3xl leading-[90%]"
                                                >
                                                    {idx + 1}. {title}
                                                </Link>
                                            </div>
                                        );
                                    }
                                )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatePage>
    );
};

export default Details;
