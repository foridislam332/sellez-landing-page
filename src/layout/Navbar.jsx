import React, { useEffect, useState } from 'react';

// image
import logo from '../assets/logo.png';

// react icons
import { FiSearch } from "react-icons/fi";
import { BsSuitHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { TbClipboardList } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../features/CartSlice.js";

const Navbar = () => {
    const [navState, setNavState] = useState(false);
    const dispatch = useDispatch();
    const totalQTY = useSelector(selectTotalQTY);
    const onCartToggle = () => {
        dispatch(
            setOpenCart({
                cartState: true,
            })
        );
    };
    const onOrderToogle = () => {
        dispatch(
            setOpenCart({
                orderState: true,
            })
        );
    };
    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };
    const goToLivePage = () => {
        window.location.href = "/streaming";
    };
    useEffect(() => {
        window.addEventListener("scroll", onNavScroll);

        // return () => {
        //   window.removeEventListener("scroll", onNavScroll);
        // };
    }, []);
    return (
        <header
            className={
                !navState
                    ? "absolute top-7 left-0 right-0 opacity-100 z-50 container mx-auto"
                    : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme bg-white pt-10 pb-10 shadow-xl"
            }
        >
            <nav className="flex items-center justify-between gap-20">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="logo/img"
                        className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                    />
                </div>
                <ul className="flex items-center justify-center gap-2">
                    <li className="grid items-center">
                        <FiSearch
                            className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                }`}
                        />
                    </li>
                    <li className="grid items-center">
                        <BsSuitHeart
                            className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                }`}
                        />
                    </li>
                    <li className="grid items-center">
                        <button
                            type="button"
                            onClick={onCartToggle}
                            className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                        >
                            <BiShoppingBag
                                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                    }`}
                            />
                            <div
                                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState
                                    ? "bg-slate-900 text-slate-100 shadow-slate-900"
                                    : "bg-slate-100 text-slate-900 shadow-slate-100"
                                    }`}
                            >
                                {totalQTY}
                            </div>
                        </button>
                    </li>
                    <li className="grid items-center">
                        <button
                            type="button"
                            onClick={onOrderToogle}
                            className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                        >
                            <TbClipboardList
                                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                    }`}
                            />
                            <div
                                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState
                                    ? "bg-slate-900 text-slate-100 shadow-slate-900"
                                    : "bg-slate-100 text-slate-900 shadow-slate-100"
                                    }`}
                            >
                                {totalQTY}
                            </div>
                        </button>
                    </li>
                    <li className="grid items-center">
                        <button
                            type="button"
                            onClick={goToLivePage}
                            className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                        >
                            <RiLiveLine
                                className={`icon-style ${navState && "text-slate-900 transition-all duration-300"
                                    }`}
                            />
                            <div
                                className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState
                                    ? "bg-slate-900 text-slate-100 shadow-slate-900"
                                    : "bg-slate-100 text-slate-900 shadow-slate-100"
                                    }`}
                            ></div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;