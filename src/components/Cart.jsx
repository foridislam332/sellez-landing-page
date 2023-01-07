import React from 'react';
import psale2 from '../assets/product2.png'
import CartItem from './CartItem';
import { FiChevronsRight } from 'react-icons/fi'

const Cart = ({ drawer, toggle }) => {

    const cartItems = {
        title: "Popular Sales",
        items: [
            {
                id: "0p0x1",
                title: "Nike Addapt BB 2.0",
                text: "MEN Running Shoes",
                rating: "4.9",
                btn: "Buy Now",
                img: psale2,
                price: "200",
                color: "from-blue-600 to-blue-500",
                shadow: "shadow-lg shadow-blue-500",
            },
            {
                id: "0p0x2",
                title: "Nike Martine Rose",
                text: "MEN Running Shoes",
                rating: "4.5",
                btn: "Buy Now",
                img: psale2,
                price: "200",
                color: "from-red-500 to-rose-500",
                shadow: "shadow-lg shadow-rose-500",
            },
            {
                id: "0p0x3",
                title: "Nike Smart Shoe 2.0",
                text: "MEN Running Shoes",
                rating: "5+",
                btn: "Buy Now",
                img: psale2,
                price: "200",
                color: "from-violet-500 to-indigo-500",
                shadow: "shadow-lg shadow-violet-500",
            },
            {
                id: "0M0x1",
                title: "Nike Air Low Premium",
                text: "MEN Running Shoes",
                rating: "5+",
                btn: "Buy Now",
                img: psale2,
                price: "150",
                color: "from-sky-600 to-indigo-600",
                shadow: "shadow-lg shadow-blue-500",
            },
            {
                id: "0M0x2",
                title: "Nike Air Force Green",
                text: "MEN Running Shoes",
                rating: "5+",
                btn: "Buy Now",
                img: psale2,
                price: "150",
                color: "from-green-500 to-emerald-500",
                shadow: "shadow-lg shadow-green-500",
            },
            {
                id: "0M0x3",
                title: "Nike Addapt BB Rose",
                text: "MEN Running Shoes",
                rating: "5+",
                btn: "Buy Now",
                img: psale2,
                price: "150",
                color: "from-red-500 to-rose-500",
                shadow: "shadow-lg shadow-rose-500",
            },
            {
                id: "0M0x4",
                title: "Nike Air Premium",
                text: "MEN Running Shoes",
                rating: "5+",
                btn: "Buy Now",
                img: psale2,
                price: "150",
                color: "from-orange-500 to-amber-500",
                shadow: "shadow-lg shadow-orange-500",
            },
            {
                id: "0M0x5",
                title: "Nike Adapt BB Pro",
                text: "MEN Running Shoes",
                rating: "5+",
                btn: "Buy Now",
                img: psale2,
                price: "150",
                color: "from-gray-900 to-yellow-500",
                shadow: "shadow-lg shadow-yellow-500",
            },
        ],
    };
    return (
        <div
            onClick={toggle}
            className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] bg-[rgba(0,0,0,.6)] ${drawer
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible translate-x-8"
                }`}
        >
            <div
                className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 bg-white px-4 ${drawer
                    ? "opacity-100 visible translate-x-0"
                    : "opacity-0 invisible translate-x-8"
                    }`}
            >

                <div>
                    <div className='flex items-center justify-between py-5'>
                        <button className='relative hover:left-2 transition-all duration-75 ease-in-out' onClick={toggle}>
                            <FiChevronsRight className='text-4xl block text-[#ef4444]' />
                        </button>
                        <h1 className='text-3xl font-bold text-center flex-1 drop-shadow-xl'>Shop</h1>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {cartItems.items?.map((item, i) => (
                            <CartItem item={item} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;