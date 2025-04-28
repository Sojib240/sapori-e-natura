import React, { createContext, useState } from "react";
export const cookiesContext = createContext();

const Context = (props) => {
    const [cookies, setCookies] = useState([
        {
            id: 1,
            title: "Pistachio Amaretto",
            slug:'pistachio-amaretto',
            image: "/Images/Products/Pistachio-Amaretto.jpg",
            price: 7,
            amount: 1,
            allergens: "Almonds, Pistachio, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-worked almond paste with pistachio paste filling.",
            Ingredients:
                "Almond 45%, Sugar, Egg white, Flavourings, Pistachio paste",
            NutritionalValues:
                "Energy value 478.7Kcal / 1997.1kj - Carbohydrates 42.9g - Fat 29.9gr - Saturated fat 2.1gr - Salt 0.10gr - Cholesterol 0.12mg - Protein 9.5gr - Vitamin E 29.80mg - Folate 43.80mg - Niacin 11.70mg",
            category: "macaroons",
            stock: "out-of-stock",
        },
        {
            id: 2,
            title: "Amaretto with Black Cherry",
            slug:'amaretto-with-black-cherry',
            image: "/Images/Products/Amaretto-with-Black-Cherry.jpg",
            price: 7,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-worked almond paste with a filling of black cherry jam.",
            Ingredients:
                "Almond 37.4%, Black Cherry Jam 20.42%, Sugar, Egg White, Flavourings",
            NutritionalValues:
                "Energy value 457.5Kcal / 1910.0kj - Carbohydrates 44.9gr - Fats 27.5gr - Saturated fats 1.6gr - Salt 0.09gr - Cholesterol 0.12mg - Proteins 7.6gr - Vitamin E 29.80mg - Folates 43.80mg - Niacin 11.70mg",
            category: "macaroons",
            stock: "in-stock",
        },
        {
            id: 3,
            title: "Licorice Amaretto",
            slug:'licorice-amaretto',
            image: "/Images/Products/Licorice-Amaretto.jpg",
            price: 6,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-processed almond paste mixed with Calabrian liquorice powder.",
            Ingredients:
                "Almond 45%, Sugar, Egg white, Flavourings, Liquorice powder",
            NutritionalValues:
                "Energy value 478.7Kcal / 1997.1kj - Carbohydrates 42.9g - Fat 29.9gr - Saturated fat 2.1gr - Salt 0.10gr - Cholesterol 0.12mg - Protein 9.5gr - Vitamin E 29.80mg - Folate 43.80mg - Niacin 11.70mg",
            category: "macaroons",
            stock: "in-stock",
        },
        {
            id: 4,
            title: "Clementine Amaretto",
            slug:'clementine-amaretto',
            image: "/Images/Products/Clementine-Amaretto.jpg",
            price: 6,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-processed almond paste, with Calabrian clementine jam.",
            Ingredients:
                "Almond 37.4%, Clementine jam 20.42% (82% fruit), Sugar, Egg white, Flavourings.",
            NutritionalValues:
                "Energy value 457.5Kcal / 1910.0kj - Carbohydrates 44.9gr - Fats 27.5gr - Saturated fats 1.6gr - Salt 0.09gr - Cholesterol 0.12mg - Proteins 7.6gr - Vitamin E 29.80mg - Folates 43.80mg - Niacin 11.70mg",
            category: "macaroons",
            stock: "in-stock",
        },
        {
            id: 5,
            title: "Clementine and Rum Amaretto",
            slug:'clementine-and-rum-amaretto',
            image: "/Images/Products/Clementine-and-Rum-Amaretto.jpg",
            price: 7,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-processed almond paste, with Calabrian Clementine jam, soaked in rum and covered with a layer of chocolate.",
            Ingredients:
                "Almond 37.4%, Clementine jam 20.42% (82% fruit), Sugar, Egg white, Flavourings, Chocolate.",
            NutritionalValues:
                "Energy value 457.5Kcal / 1910.0kj - Carbohydrates 44.9gr - Fats 27.5gr - Saturated fats 1.6gr - Salt 0.09gr - Cholesterol 0.12mg - Proteins 7.6gr - Vitamin E 29.80mg - Folates 43.80mg - Niacin 11.70mg",
            category: "macaroons",
            stock: "out-of-stock",
        },
        {
            id: 6,
            title: "Classic Amaretto",
            slug:'classic-amaretto',
            image: "/Images/Products/Classic-Amaretto.jpg",
            price: 6,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-processed almond paste.",
            Ingredients: "Almond 45%, Sugar, Egg white, Flavourings",
            NutritionalValues:
                "Energy value 478.7Kcal / 1997.1kj - Carbohydrates 42.9g - Fat 29.9gr - Saturated fat 2.1gr - Salt 0.10gr - Cholesterol 0.12mg - Protein 9.5gr - Vitamin E 29.80mg - Folate 43.80mg - Niacin 11.70mg",
            category: "macaroons",
            stock: "in-stock",
        },
        {
            id: 7,
            title: "Pistachio Almond Biscuit",
            slug:'pistachio-almond-biscuit',
            image: "/Images/Products/Pistachio-Almond-Biscuit.jpg",
            price: 7,
            amount: 1,
            allergens: "Almonds, Pistachios, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-worked almond paste with pistachio filling.",
            Ingredients:
                "Almond 45%, Sugar, Egg white, Flavourings, Pistachio paste",
            NutritionalValues:
                "Energy value 478.7Kcal / 1997.1kj - Carbohydrates 42.9g - Fat 29.9gr - Saturated fat 2.1gr - Salt 0.10gr - Cholesterol 0.12mg - Protein 9.5gr - Vitamin E 29.80mg - Folate 43.80mg - Niacin 11.70mg",
            category: "almonds",
            stock: "out-of-stock",
        },
        {
            id: 8,
            title: "Black Cherry Almond Loaf",
            slug:'black-cherry-almond-loaf',
            image: "/Images/Products/Black-Cherry-Almond-Loaf.jpg",
            price: 7,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-worked almond paste with a filling of black cherry jam.",
            Ingredients:
                "Almond 37.4%, Black Cherry Jam 20.42%, Sugar, Egg White, Flavourings",
            NutritionalValues:
                "Energy value 457.5Kcal / 1910.0kj - Carbohydrates 44.9gr - Fats 27.5gr - Saturated fats 1.6gr - Salt 0.09gr - Cholesterol 0.12mg - Proteins 7.6gr - Vitamin E 29.80mg - Folates 43.80mg - Niacin 11.70mg",
            category: "almonds",
            stock: "in-stock",
        },
        {
            id: 9,
            title: "Classic Mandorlotto",
            slug:'classic-mandorlotto',
            image: "/Images/Products/Classic-Mandorlotto.jpg",
            price: 6,
            amount: 1,
            allergens: "Almonds, Egg White",
            madeWith:
                "Baked product made from 100% Italian cold-processed almond paste.",
            Ingredients: "Almond 45%, Sugar, Egg white, Flavourings",
            NutritionalValues:
                "Energy value 478.7Kcal / 1997.1kj - Carbohydrates 42.9g - Fat 29.9gr - Saturated fat 2.1gr - Salt 0.10gr - Cholesterol 0.12mg - Protein 9.5gr - Vitamin E 29.80mg - Folate 43.80mg - Niacin 11.70mg",
            category: "almonds",
            stock: "in-stock",
        },


    ]);
    return (
        <cookiesContext.Provider value={[cookies, setCookies]}>
            {props.children}
        </cookiesContext.Provider>
    );
};

export default Context;
