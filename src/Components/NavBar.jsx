import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartData } from "../Utils/CartContext";

const NavBar = () => {
    const [cart] = useContext(CartData);
    const [menu, setMenu] = useState(false);
    return (
        <div className="flex justify-between items-start px-3.5 sm:px-5 py-3.5 sm:py-4 md:py-5 absolute top-0 w-full z-[99] text-color-primary border-color-primary">
            <div className="menu lg:flex items-center gap-1 xl:gap-2 max-w-[40%] xl:max-w-[30%] w-full lg:text-sm xl:text-base 2xl:text-lg font-semibold tracking-widest hidden">
                <NavLink
                    to={"/shop/"}
                    className="px-5 xl:px-6 py-2 font-font1 rounded-full border border-color-primary text-color-primary hover:text-color-secondary hover:bg-color-primary easing2 transition-colors"
                >
                    <p>Shop</p>
                </NavLink>
                <NavLink
                    to={"/about/"}
                    className="px-5 xl:px-6 py-2 font-font1 rounded-full border border-color-primary text-color-primary hover:text-color-secondary hover:bg-color-primary easing2 transition-colors"
                >
                    <p>About Us</p>
                </NavLink>
                <NavLink
                    to={"/contact/"}
                    className="px-5 xl:px-6 py-2 font-font1 rounded-full border border-color-primary text-color-primary hover:text-color-secondary hover:bg-color-primary easing2 transition-colors"
                >
                    <p>Contact Us</p>
                </NavLink>
            </div>
            <div className="logo  text-center w-auto xl:w-full z-[99]">
                <Link
                    to={"/"}
                    className="font-font3 text-3xl lg:text-4xl 2xl:text-5xl tracking-tight block"
                >
                    Sapori e Natura
                </Link>
                <Link
                    to={"/"}
                    className="font-font3 italic text-base 2xl:text-lg block"
                >
                    di Calabria
                </Link>
            </div>
            <div className="cart max-w-[40%] xl:max-w-[30%] w-full flex items-center gap-3 sm:gap-4 justify-end z-[99]">
                <Link
                    to={"/cart/"}
                    className="border rounded-full h-8 w-8 lg:h-9 lg:w-9 2xl:w-10 2xl:h-10 p-1.5 lg:p-2 hover:scale-95 easing"
                >
                    <img
                        className="w-full"
                        src="/Images/Icons/shopping-cart.png"
                        alt=""
                    />
                </Link>
                {cart.length !== 0 ? (
                    <span className="p-1 bg-color-primary rounded-[5px] text-color-secondary  w-4.5 h-4.5 lg:w-5 lg:h-5 flex justify-center items-center text-xs lg:text-sm -ml-[30px] -mt-[30px]">
                        {cart.length}
                    </span>
                ) : null}

                <button
                    onClick={() => setMenu(!menu)}
                    className="cursor-pointer block lg:hidden h-2.5 w-6 md:w-7 relative"
                >
                    <span className="w-6 md:w-7 absolute top-0 bg-color-primary h-[2px] block" />
                    <span className="w-6 md:w-7 absolute bottom-0 bg-color-primary h-[2px] block" />
                    <span />
                </button>
            </div>
            <div
                className={`w-full h-screen fixed top-0 left-0 bg-color-secondary z-[90] p-3 sm:p-4 md:p-5 ${
                    menu
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                } easing flex items-end`}
            >
                <div className="font-font3 text-5xl md:text-5xl flex flex-col gap-4 w-full">
                    <Link onClick={() => setMenu(false)} to={"/shop/"}>
                        Shop
                    </Link>
                    <Link onClick={() => setMenu(false)} to={"/about/"}>
                        About Us
                    </Link>
                    <Link onClick={() => setMenu(false)} to={"/contact/"}>
                        Contact Us
                    </Link>
                    <Link onClick={() => setMenu(false)} to={'/my-account/'} className="bg-transparent hover:bg-color-primary hover:text-color-secondary border transition-colors duration-300 ease-in-out py-2 rounded-lg text-color-primary cursor-pointer text-base w-full mt-6 font-font1 text-center">
                        <p>Sign in</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
