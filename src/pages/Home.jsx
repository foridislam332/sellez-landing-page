import React, { useState } from 'react';
import Cart from '../components/Cart';
import Hero from '../sections/Hero';

const Home = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Hero drawer={show} toggle={() => setShow(!show)} />
            <Cart drawer={show} toggle={() => setShow(!show)} />
        </>
    );
};

export default Home;