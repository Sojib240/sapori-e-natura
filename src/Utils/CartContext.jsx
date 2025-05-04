import React, { createContext, useState } from "react";
export const CartData = createContext();

const CartContext = (props) => {
    const [cart, setCart] = useState([]);
    return (
        <CartData.Provider value={[cart, setCart]}>
            {props.children}
        </CartData.Provider>
    );
};

export default CartContext;
