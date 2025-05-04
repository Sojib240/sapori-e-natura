import React from "react";
import AnimatePage from "../Components/AnimatePage";
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
        <AnimatePage>
            <div className="w-full text-color-primary border-color-primary] font-font1">
                <div className="max-w-[1100px] w-full mx-auto pt-40 sm:pt-44 lg:pt-52 pb-18 sm:pb-28 lg:pb-38">
                    <div className="px-3 sm:px-4 md:px-5 text-base sm:text-lg text-right font-bold border-b pb-1 sm:pb-2 md:pb-3">
                        <p>Subtotal</p>
                    </div>
                    <div className="main">
                        <div className="flex justify-between items-start border-b p-3 sm:p-4 md:p-5">
                            <div className="flex items-start gap-5">
                                <div className="flex gap-6 sm:gap-7 md:gap-8">
                                    <Link to={''} className="block w-3.5">
                                        <img
                                            className="w-full"
                                            src="/Images/Icons/close.svg"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="w-23 rounded-[10px] aspect-square overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="https://saporienatura.it/wp-content/uploads/2023/12/mandorlotto-amarena-600x750.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-4xl uppercase">
                                    <p className="font-font2">
                                        Black Cherry Almond Loaf
                                    </p>
                                    <p className="font-font3 text-3xl mt-2">
                                        € 7.00{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <div className="overflow-hidden border rounded-[8px] flex items-center justify-between">
                                    <button className="py-1 px-4 border-r text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                        -
                                    </button>
                                    <p className="py-1 px-10 text-base sm:text-lg">
                                        1
                                    </p>
                                    <button className="py-1 px-4 border-l text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                        +
                                    </button>
                                </div>
                                <h4 className="font-font3 text-3xl">€ 14.00</h4>
                            </div>
                        </div>
                        <div className="flex justify-between items-start border-b p-3 sm:p-4 md:p-5">
                            <div className="flex items-start gap-5">
                                <div className="flex gap-6 sm:gap-7 md:gap-8">
                                    <Link to={''} className="block w-3.5">
                                        <img
                                            className="w-full"
                                            src="/Images/Icons/close.svg"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="w-23 rounded-[10px] aspect-square overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="https://saporienatura.it/wp-content/uploads/2023/12/mandorlotto-amarena-600x750.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-4xl uppercase">
                                    <p className="font-font2">
                                        Black Cherry Almond Loaf
                                    </p>
                                    <p className="font-font3 text-3xl mt-2">
                                        € 7.00{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <div className="overflow-hidden border rounded-[8px] flex items-center justify-between">
                                    <button className="py-1 px-4 border-r text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                        -
                                    </button>
                                    <p className="py-1 px-10 text-base sm:text-lg">
                                        1
                                    </p>
                                    <button className="py-1 px-4 border-l text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                        +
                                    </button>
                                </div>
                                <h4 className="font-font3 text-3xl">€ 14.00</h4>
                            </div>
                        </div>
                        <div className="flex justify-between items-start border-b p-3 sm:p-4 md:p-5">
                            <div className="flex items-start gap-5">
                                <div className="flex gap-6 sm:gap-7 md:gap-8">
                                    <Link to={''} className="block w-3.5">
                                        <img
                                            className="w-full"
                                            src="/Images/Icons/close.svg"
                                            alt=""
                                        />
                                    </Link>
                                    <div className="w-23 rounded-[10px] aspect-square overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src="https://saporienatura.it/wp-content/uploads/2023/12/mandorlotto-amarena-600x750.jpg"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="text-4xl uppercase">
                                    <p className="font-font2">
                                        Black Cherry Almond Loaf
                                    </p>
                                    <p className="font-font3 text-3xl mt-2">
                                        € 7.00{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-8 items-center">
                                <div className="overflow-hidden border rounded-[8px] flex items-center justify-between">
                                    <button className="py-1 px-4 border-r text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                        -
                                    </button>
                                    <p className="py-1 px-10 text-base sm:text-lg">
                                        1
                                    </p>
                                    <button className="py-1 px-4 border-l text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer">
                                        +
                                    </button>
                                </div>
                                <h4 className="font-font3 text-3xl">€ 14.00</h4>
                            </div>
                        </div>
                        
                    </div>
                    <div className="px-3 sm:px-4 md:px-5 pt-3 sm:pt-4 md:pt-5 pb-6 sm:pb-8 md:pb-10 border-b flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                        <div className="w-1/2 flex items-center gap-5">
                            <input
                                className="w-full outline-none border pl-3 py-1 rounded-[5px] placeholder:text-color-primary text-base sm:text-lg"
                                type="text"
                                placeholder="Coupon code"
                            />
                            <button className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max">
                                Apply
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <button className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max">
                                Update cart
                            </button>
                        </div>
                    </div>
                    <div className="p-3 sm:p-4 md:p-5 border rounded-[10px]">
                        <div className="grid grid-cols-3 gap-5 items-center border-b pb-3 sm:pb-4 md:pb-5 text-5xl uppercase font-font2 pt-3 sm:pt-4 md:pt-5">
                            <h4 className="col-span-1">Total </h4>
                            <h4 className="col-span-1 justify-self-center">
                                € 24.50{" "}
                            </h4>
                        </div>
                        <div className="w-full flex justify-end mt-3 sm:mt-4 md:mt-5">
                            <button className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatePage>
    );
};

export default CartPage;
