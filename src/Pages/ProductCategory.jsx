import React, { useContext, useEffect, useRef, useState } from "react";
import AnimatePage from "../Components/AnimatePage";
import { Link, NavLink, useParams } from "react-router-dom";
import { cookiesContext } from "../Utils/Context";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ProductCategory = ({ isDesktop, setIsDesktop }) => {
    const [cookies] = useContext(cookiesContext);
    const { title } = useParams();
    // single category
    const [singleCategoryCookies, setSingleCategoryCookies] = useState();
    useEffect(() => {
        const categorys = cookies.filter((ca) => ca.category === title);
        setSingleCategoryCookies(categorys);
    }, [title]);

    // unique categorys
    const [category, setCategory] = useState();
    useEffect(() => {
        const uniqueCategories = [
            ...new Set(cookies.map((cookie) => cookie.category)),
        ];

        setCategory(uniqueCategories);
    }, [cookies]);
    const [hoveredId, setHoveredId] = useState(null);

    // animation on scroll
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        handleResize(); // check initially
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const categoryRef = useRef();
    const { scrollYProgress } = useScroll({
        target: categoryRef,
        offset: ["start 70%", "end center"],
    });
    // Different speeds
    const springConfig = { stiffness: 180, damping: 25 };
    const y1 = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isDesktop ? ["0%", "-6%"] : [0, 0]
        ),
        springConfig
    );
    const y2 = useSpring(
        useTransform(
            scrollYProgress,
            [0, 1],
            isDesktop ? ["0%", "-12%"] : [0, 0]
        ),
        springConfig
    );

    return (
        <AnimatePage>
            <div className="pt-40 lg:pt-50 text-color-primary border-color-primary mb-20 sm:mb-25 md:mb-0">
                <div className="max-w-[450px] sm:max-w-[70vw] w-full mx-auto">
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9vw] uppercase font-font2 leading-[80%] text-center">
                        Pure artisanal sweetness
                    </h2>
                </div>

                <div className="flex flex-wrap md:flex-nowrap items-center gap-3 sm:gap-5 lg:gap-8 xl:gap-9 2xl:gap-10 w-full justify-center mt-12 sm:mt-15 lg:mt-20 mb-20 sm:mb-25 md:mb-28 lg:mb-32 xl:mb-40 font-font1 text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5">
                    {category &&
                        category.map((title, idx) => (
                            <NavLink
                                key={idx}
                                to={`/product-category/${title}`}
                                className={`border rounded-full px-6 sm:px-8 md:px-10 py-2 font-semibold easing2 transition-colors hover:text-color-secondary hover:bg-color-primary cursor-pointer`}
                            >
                                {title}
                            </NavLink>
                        ))}
                    <NavLink 
                        to={"/shop/"}
                        className="border rounded-full px-6 sm:px-8 md:px-10 py-2 font-semibold easing2 transition-colors hover:text-color-secondary hover:bg-color-primary cursor-pointer"
                    >
                        View all products
                    </NavLink>
                </div>
                <section
                    ref={categoryRef}
                    className="px-3 sm:px-4 md:px-5 text-color-primary border-color-primary"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-3 xl:gap-5">
                        {/* Column 1 */}
                        <motion.div
                            style={{ y: y1 }}
                            className="first col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-3 xl:gap-5"
                        >
                            {singleCategoryCookies &&
                                singleCategoryCookies
                                    .slice(0, 3)
                                    .map((cook) => (
                                        <Link
                                            to={`/${cook.category}/${cook.slug}`}
                                            onMouseEnter={() =>
                                                setHoveredId(cook.id)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredId(null)
                                            }
                                            key={cook.id}
                                            className="border group"
                                        >
                                            <p className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 border-b font-font3 text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] leading-[110%]">
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
                                                    200g bag containing 10
                                                    amaretti biscuits of 20g
                                                    each, individually wrapped.
                                                    &nbsp; 200g bag containing
                                                    10 amaretti biscuits of 20g
                                                    each, individually wrapped.
                                                    &nbsp; 200g bag containing
                                                    10 amaretti biscuits of 20g
                                                    each, individually wrapped.
                                                </p>
                                            </Marquee>
                                            <div className="grid grid-cols-2 border-t">
                                                <div className="col-span-1 border-r p-5"></div>
                                                <div className="col-span-1 font-font3 text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[36px] text-center p-2 sm:p-3 md:p-2 lg:p-3 xl:p-4 2xl:p-5">
                                                    € {cook.price}.00
                                                </div>
                                            </div>
                                            <div className="aspect-[2/2.3] relative border-t">
                                                <div className="scale-0 duration-300 transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 w-[80%] absolute top-1/2 left-1/2 -translate-1/2 z-[80]">
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

                        {/* Column 2 */}
                        <motion.div
                            style={{ y: y2 }}
                            className="second col-span-1 flex flex-col gap-3 sm:gap-4 md:gap-3 xl:gap-5"
                        >
                            {singleCategoryCookies &&
                                singleCategoryCookies
                                    .slice(3, 6)
                                    .map((cook, idx) => (
                                        <div key={cook.id}>
                                            {idx === 0 && (
                                                <div className="mb-14 sm:mb-16 md:mb-15 lg:mb-18 xl:mb-20 2xl:mb-25 mt-2 px-3 sm:px-4 md:px-5">
                                                    <p className="font-font3 text-base sm:text-lg xl:text-2xl 2xl:text-[28px] mb-2 xl:mb-4">
                                                        Inimitable taste
                                                    </p>
                                                    <p className="font-font2 leading-[85%] text-3xl sm:text-4xl md:text-[34px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] uppercase">
                                                        Tradition and quality
                                                        assured
                                                    </p>
                                                </div>
                                            )}
                                            <Link
                                                to={`/${cook.category}/${cook.slug}`}
                                                onMouseEnter={() =>
                                                    setHoveredId(cook.id)
                                                }
                                                onMouseLeave={() =>
                                                    setHoveredId(null)
                                                }
                                                className="border group block"
                                            >
                                                <p className="p-3 sm:p-3 md:p-2 lg:p-3 xl:p-4 border-b font-font3 text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] leading-[110%]">
                                                    {cook.title}
                                                </p>
                                                <Marquee
                                                    play={
                                                        isDesktop
                                                            ? hoveredId ===
                                                              cook.id
                                                            : true
                                                    }
                                                >
                                                    <p className="text-sm md:text-base xl:text-lg font-font1 py-[1px] md:py-0.5">
                                                        200g bag containing 10
                                                        amaretti biscuits of 20g
                                                        each, individually
                                                        wrapped. &nbsp; 200g bag
                                                        containing 10 amaretti
                                                        biscuits of 20g each,
                                                        individually wrapped.
                                                        &nbsp; 200g bag
                                                        containing 10 amaretti
                                                        biscuits of 20g each,
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
                                                    <div className="scale-0 duration-300 transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 w-[80%] absolute top-1/2 left-1/2 -translate-1/2 z-[80]">
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
                    </div>
                </section>
            </div>
        </AnimatePage>
    );
};

export default ProductCategory;
