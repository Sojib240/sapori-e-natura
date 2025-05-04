import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import SmoothScroll from "./Utils/SmoothScroll";
import NavBar from "./Components/NavBar";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CookiePolicy from "./Pages/CookiePolicy";
import TermsAndConditions from "./Pages/TermsAndConditions";
import SalesCondition from "./Pages/SalesCondition";
import Footer from "./Components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import MyAccount from "./Pages/MyAccount";
import Shop from "./Pages/Shop";
import Details from "./Pages/Details";
import { AnimatePresence } from "framer-motion";
import CartPage from "./Pages/CartPage";
import ProductCategory from "./Pages/ProductCategory";

const App = () => {
    const [isDesktop, setIsDesktop] = useState(true);
    const location = useLocation();
    return (
        <div>
            <SmoothScroll />
            <NavBar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                isDesktop={isDesktop}
                                setIsDesktop={setIsDesktop}
                            />
                        }
                    />
                    <Route path="/about/" element={<AboutPage />} />
                    <Route
                        path="/shop/"
                        element={
                            <Shop
                                isDesktop={isDesktop}
                                setIsDesktop={setIsDesktop}
                            />
                        }
                    />
                    <Route path="/contact/" element={<Contact />} />
                    <Route path="/my-account/" element={<MyAccount />} />
                    <Route
                        path="/privacy-policy/"
                        element={<PrivacyPolicy />}
                    />
                    <Route path="/cookie-policy/" element={<CookiePolicy />} />
                    <Route path="/:category/:slug" element={<Details />} />
                    <Route
                        path="/terms-and-conditions/"
                        element={<TermsAndConditions />}
                    />
                    <Route
                        path="/sales-condition/"
                        element={<SalesCondition />}
                    />
                    <Route path="/cart/" element={<CartPage />} />
                    <Route
                        path="/product-category/:title"
                        element={<ProductCategory isDesktop={isDesktop} setIsDesktop={setIsDesktop} />}
                    />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

export default App;
