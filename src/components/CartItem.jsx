import React from 'react';
const CartItem = ({ item }) => {
    const { title, img, price, color, shadow, text } = item;
    return (
        <div>
            <div className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out`}>
                <div className='flex items-center gap-4'>
                    <div>
                        <img
                            src={img}
                            alt={title}
                            className="w-36 h-auto object-fill lg:w-28"
                        />
                        <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
                            ${price}
                        </div>
                    </div>
                    <div className="grid items-center gap-4">
                        <div className="grid items-center leading-none">
                            <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                                {title}
                            </h1>
                            <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='w-full bg-white mt-2 py-1'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;