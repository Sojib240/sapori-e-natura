import React, { useContext, useEffect, useState } from "react";
import AnimatePage from "../Components/AnimatePage";
import { Link } from "react-router-dom";
import { CartData } from "../Utils/CartContext";

const CartPage = () => {
    const [cart, setCart] = useContext(CartData);
    // amount and price dispaly
    const [amountPrice, setAmountPrice] = useState({});
    useEffect(() => {
        const total = cart.reduce(
            (acc, item) => {
                acc.amount += item.amount;
                acc.price += item.price * item.amount;
                return acc;
            },
            { amount: 0, price: 0 }
        );
        setAmountPrice(total);
    }, [cart]);
    // handle amount
    const handleAmount = (d, id) => {
        let temporaryCart = cart;
        cart.map((pro, idx) => {
            if (pro.id === id) {
                temporaryCart[idx].amount += d;
            }
            if (temporaryCart[idx].amount === 0) {
                temporaryCart[idx].amount = 1;
            }
            if (temporaryCart[idx].amount >= 4) {
                temporaryCart[idx].amount = 4;
            }
            setCart([...temporaryCart]);
        });
    };
    // handle remove
    const handleRemove = (id) => {
        const filterToRemove = cart.filter((item) => item.id !== id);
        setCart(filterToRemove);
    };
    return (
        <AnimatePage>
            <div className="w-full text-color-primary border-color-primary] font-font1">
                <div className="max-w-[1120px] w-full mx-auto pt-28 sm:pt-30 md:pt-44 lg:pt-52 pb-18 sm:pb-28 lg:pb-38 px-3 sm:px-4 md:px-5">
                    {cart.length === 0 ? (
                        <div className="">
                            <h4 className="font-font2 leading-[100%] text-3xl sm:text-4xl md:text-[34px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] uppercase">
                                Your cart is empty. Add products to your cart to
                                continue shopping.
                            </h4>
                            <Link
                                to={"/shop"}
                                className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max mt-4 sm:mt-5 lg:mt-8 block"
                            >
                                Return to shop
                            </Link>
                        </div>
                    ) : (
                        <div className="">
                            <div className="px-3 md:px-5 text-base sm:text-lg text-right font-bold border-b-0 md:border-b pb-1 sm:pb-2 md:pb-3 hidden md:block">
                                <p>Subtotal</p>
                            </div>
                            <div className="main pt-3 md:pt-0">
                                {cart.map(
                                    ({
                                        id,
                                        title,
                                        slug,
                                        image,
                                        price,
                                        amount,
                                        category,
                                    }) => {
                                        return (
                                            <div
                                                key={id}
                                                className="flex flex-col md:flex-row justify-between items-start border-b-0 md:border-b p-0 md:p-3 lg:p-4 xl:p-5"
                                            >
                                                <div className="flex items-start flex-col md:flex-row gap-3 md:gap-5 w-full md:w-auto">
                                                    <div className="flex items-start gap-6 sm:gap-7 md:gap-6 lg:gap-8 w-full md:w-auto border md:border-0">
                                                        <button
                                                            onClick={() =>
                                                                handleRemove(id)
                                                            }
                                                            to={""}
                                                            className="block cursor-pointer w-1/2 md:w-auto p-3 md:p-0"
                                                        >
                                                            <img
                                                                className="w-3.5"
                                                                src="/Images/Icons/close.svg"
                                                                alt=""
                                                            />
                                                        </button>
                                                        <div className="w-1/2 h-25 sm:h-30 md:h-auto md:w-23 p-3 md:p-0 border-l md:border-l-0">
                                                            <Link
                                                                to={`/${category}/${slug}`}
                                                                className="w-23 rounded-[10px] aspect-square overflow-hidden"
                                                            >
                                                                <img
                                                                    className="w-full h-full object-cover rounded-[10px] md:rounded-0"
                                                                    src={image}
                                                                    alt=""
                                                                />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl uppercase w-full md:w-auto border p-3 md:p-0 md:border-0">
                                                        <p className="font-font2 w-full md:w-auto">
                                                            {title}
                                                        </p>
                                                        <p className="font-font3 text-xl md:text-2xl lg:text-2xl xl:text-3xl mt-0 lg:mt-2 w-full md:w-auto">
                                                            € {price}.00
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 lg:gap-6 xl:gap-8 items-center w-full md:w-auto p-3 md:p-0 border md:border-0 mt-3 md:mt-0 mb-3 md:mb-0">
                                                    <div className="overflow-hidden border rounded-[8px] flex items-center justify-between w-1/2 md:w-auto">
                                                        <button
                                                            onClick={() =>
                                                                handleAmount(
                                                                    -1,
                                                                    id
                                                                )
                                                            }
                                                            className="py-1 px-4 border-r text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer"
                                                        >
                                                            -
                                                        </button>
                                                        <p className="py-0.5 lg:py-1 px-6 lg:px-8 xl:px-10 text-base sm:text-lg">
                                                            {amount}
                                                        </p>
                                                        <button
                                                            onClick={() =>
                                                                handleAmount(
                                                                    +1,
                                                                    id
                                                                )
                                                            }
                                                            className="py-1 px-4 border-l text-base sm:text-lg hover:text-color-secondary hover:bg-color-primary transition-colors easing2 cursor-pointer"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <h4 className="font-font3 text-xl lg:text-2xl xl:text-3xl w-1/2 md:w-auto text-right md:text-left">
                                                        € {amount * price}.00
                                                    </h4>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="px-3 md:px-5 pt-3 md:pt-5 pb-3 md:pb-10 border md:mt-0 md:border-b md:border-0 flex items-center justify-between mb-3 sm:mb-4 md:mb-5">
                                <div className="w-full md:w-1/2 flex items-center gap-5 ml-auto">
                                    <input
                                        className="w-full outline-none border pl-3 py-1 rounded-[5px] placeholder:text-color-primary text-base sm:text-lg"
                                        type="text"
                                        placeholder="Coupon code"
                                    />
                                    <button className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max">
                                        Apply
                                    </button>
                                </div>
                                {/* <div className="w-1/2 flex justify-end">
                                    <button className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max">
                                        Update cart
                                    </button>
                                </div> */}
                            </div>
                            <div className="p-3 sm:p-4 md:p-5 border rounded-[10px] mt-10 md:mt-0">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 items-center border-b pb-3 sm:pb-4 md:pb-5 text-4xl sm:text-5xl uppercase font-font2 pt-3 sm:pt-4 md:pt-5">
                                    <h4 className="col-span-1">Total </h4>
                                    <h4 className="col-span-1 justify-self-end md:justify-self-center">
                                        € {amountPrice.price + 4.5}
                                    </h4>
                                </div>
                                <div className="w-full flex justify-end mt-3 sm:mt-4 md:mt-5">
                                    <button className="border px-8 py-1 rounded-[8px] text-base sm:text-lg  hover:text-color-secondary hover:bg-color-primary easing2 transition-colors cursor-pointer hover:border-color-primary w-max">
                                        Proceed to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AnimatePage>
    );
};

export default CartPage;
