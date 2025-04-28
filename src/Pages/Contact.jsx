import React from "react";
import AnimatePage from "../Components/AnimatePage";

const Contact = () => {
    return (
        <AnimatePage>
            <section className="pt-35 sm:pt-44 lg:pt-52 pb-25 sm:pb-28 md:pb-32 text-color-primary border-color-primary flex items-start flex-col md:flex-row gap-10 max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5">
                <div className="w-full md:w-1/2">
                    <h4 className="mb-5 font-font2 leading-[85%] text-5xl lg:text-6xl 2xl:text-7xl uppercase">
                        More about our products?
                    </h4>
                    <p className="text-sm md:text-base">
                        By filling out this form, you can send us your
                        questions, requests for information or any other
                        curiosity regarding our products. Once we receive the
                        form, we will respond as soon as possible.
                    </p>
                </div>
                <div className="w-full md:w-1/2 font-font1">
                    <form className="w-full flex flex-col gap-3 xl:gap-4">
                        <div className="">
                            <label
                                className="text-sm md:text-base lg:text-lg"
                                htmlFor=""
                            >
                                Your name
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
                                Your email
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
                                Object
                            </label>
                            <input
                                className="w-full py-2 border rounded-lg mt-1 xl:mt-1.5 outline-none pl-3"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label
                                className="text-sm md:text-base lg:text-lg"
                                htmlFor=""
                            >
                                Your message (optional)
                            </label>
                            <textarea
                                className="border resize-none h-40 rounded-lg mt-1 xl:mt-1.5 outline-none pl-3 pt-3"
                                name=""
                                id=""
                            ></textarea>
                        </div>
                        <button className="w-full bg-transparent hover:bg-color-primary hover:text-color-secondary border transition-colors duration-300 ease-in-out py-2 rounded-lg text-color-primary cursor-pointer">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </AnimatePage>
    );
};

export default Contact;
