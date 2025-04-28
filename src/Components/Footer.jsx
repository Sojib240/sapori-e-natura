import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-color-primary w-full p-3 sm:p-4 md:p-5 text-color-secondary">
            <div className="pt-10 sm:pt-10 lg:pt-18">
                <p className="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-font3 mb-12 sm:mb-15 lg:mb-22">
                    Flavors of Calabria
                </p>
                <p className="font-font2 text-6xl lg:text-7xl 2xl:text-8xl uppercase">
                    Artisan Baked Goods
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 mt-8 sm:mt-10 lg:mt-22 font-font1">
                <div className="cols-span-1 flex flex-col gap-1.5">
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Information
                    </p>
                    <Link
                        to={"/privacy-policy/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Privacy Policy
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                    <Link
                        to={"/cookie-policy/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Cookie Policy
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                </div>
                <div className="cols-span-1 flex flex-col gap-1.5">
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Customer Service
                    </p>
                    <Link
                        to={"/sales-condition/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Sales Conditions
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                    <Link
                        to={"/terms-and-conditions/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Website Terms of Use
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                    <Link
                        to={"/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Customer Service
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                </div>
                <div className="cols-span-1 flex flex-col gap-1.5">
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Follow us on:
                    </p>
                    <Link
                        to={"/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Facebook
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                    <Link
                        to={"/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Instagram
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                </div>
                <div className="cols-span-1 flex flex-col gap-1.5">
                    <p className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Account
                    </p>
                    <Link
                        to={"/"}
                        className="text-base lg:text-lg w-max group relative leading-[115%]"
                    >
                        Sign in
                        <span className="w-full scale-x-0 duration-300 block h-[1px] absolute bottom-0 transition-transform ease-in-out origin-right group-hover:origin-left group-hover:scale-x-100 bg-color-secondary" />
                    </Link>
                </div>
            </div>
            <div className="mt-10 sm:mt-15 md:mt-20 lg:mt-25 xl:mt-35 2xl:mt-40">
                <div className="p-3 sm:p-4 md:p-5 border-x border-t border-color-secondary font-font3 text-2xl xl:text-3xl relative">
                    <p>© 2025. Flavours and Nature of Calabria</p>
                    <div className="w-23 md:w-27 lg:w-31 xl:w-36 2xl:w-44 rounded-full absolute bottom-[40%] right-[8%] hidden md:block">
                        <motion.img
                            animate={{ rotate: -360 }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 10,
                            }}
                            className="rounded-full"
                            src="/Images/Icons/orange-circle.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-0 md:gap-3 lg:gap-5 px-3 sm:px-4 md:px-5 py-2 border border-color-secondary font-font1 text-sm sm:text-base xl:text-lg">
                    <p>
                        C.da Archidero, 56 - 87012 Castrovillari (CS). VAT
                        number 02369870783
                    </p>
                    <p>Website byhead.studio</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
