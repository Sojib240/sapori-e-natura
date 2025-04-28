import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnimatePage from "../Components/AnimatePage";

const MyAccount = () => {
    const [checked, setChecked] = useState(false);
    return (
        <AnimatePage>
            <section className="pt-35 sm:pt-44 lg:pt-52 pb-25 sm:pb-28 md:pb-32 text-color-primary border-color-primary max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5 font-font1">
                <h4 className="mb-10 font-font2 leading-[85%] text-5xl lg:text-6xl 2xl:text-7xl uppercase">
                    My account
                </h4>
                <div className="w-full">
                    <div className="flex items-start flex-col md:flex-row gap-10 w-full">
                        <div className="w-full md:w-1/2">
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                                Login
                            </p>
                            <div className="w-full flex flex-col gap-3 xl:gap-4">
                                <div className="">
                                    <label
                                        className="text-sm md:text-base lg:text-lg"
                                        htmlFor=""
                                    >
                                        Username or email address *
                                    </label>
                                    <input
                                        className="w-full py-2 border rounded-lg mt-1 xl:mt-1.5 outline-none pl-3"
                                        type="text"
                                    />
                                </div>
                                <div className="">
                                    <label
                                        className="text-sm md:text-base lg:text-lg"
                                        htmlFor=""
                                    >
                                        Password *
                                    </label>
                                    <input
                                        className="w-full py-2 border rounded-lg mt-1 xl:mt-1.5 outline-none pl-3"
                                        type="text"
                                    />
                                </div>
                                <button className="w-auto bg-transparent hover:bg-color-primary hover:text-color-secondary border transition-colors duration-300 ease-in-out py-2 rounded-lg text-color-primary cursor-pointer">
                                    Send
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-1">
                                Register
                            </p>
                            <div className="w-full flex flex-col gap-3 xl:gap-4">
                                <div className="">
                                    <label
                                        className="text-sm md:text-base lg:text-lg"
                                        htmlFor=""
                                    >
                                        Email address *
                                    </label>
                                    <input
                                        className="w-full py-2 border rounded-lg mt-1 xl:mt-1.5 outline-none pl-3"
                                        type="text"
                                    />
                                </div>
                                <div className="">
                                    <div className="">
                                        <p className="text-sm md:text-base lg:text-lg mb-1">
                                            A link to set a new password will be
                                            sent to your email address.
                                        </p>
                                        <div className="text-sm md:text-base lg:text-lg flex items-center gap-2">
                                            <label className="flex items-center cursor-pointer select-none w-max">
                                                {/* Hidden native checkbox */}
                                                <input
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={() =>
                                                        setChecked(!checked)
                                                    }
                                                    className="hidden"
                                                />
                                                <div
                                                    className={`w-4 lg:w-5 h-4 lg:h-5 flex items-center justify-center border rounded transition-colors 
                                                    ${
                                                        checked
                                                            ? "bg-color-primary"
                                                            : "bg-white"
                                                    }`}
                                                >
                                                    {checked && (
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="3"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                            </label>
                                            <p>
                                                I have read and accept the
                                                Privacy Policy *
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-sm md:text-base lg:text-lg leading-[110%]">
                                        Your personal data will be used to
                                        support your experience throughout this
                                        website, to manage access to your
                                        account, and for other purposes
                                        described in our{" "}
                                        <Link
                                            className="underline"
                                            to={"/privacy-policy"}
                                        >
                                            privacy policy .
                                        </Link>
                                    </div>
                                </div>
                                <button className="w-auto bg-transparent hover:bg-color-primary hover:text-color-secondary border transition-colors duration-300 ease-in-out py-2 rounded-lg text-color-primary cursor-pointer">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatePage>
    );
};

export default MyAccount;
