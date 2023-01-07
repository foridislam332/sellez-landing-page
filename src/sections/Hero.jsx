import React from 'react';
import video from '../assets/Dummy-Video.mp4';

import { AiOutlinePlayCircle, AiOutlineShoppingCart, AiFillSetting } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { CgProfile, CgShapeCircle } from 'react-icons/cg';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

const Hero = ({ drawer, toggle }) => {
    return (
        <div className="bg-hero-bg bg-no-repeat bg-cover h-full w-auto pb-24">
            <div className='md:flex items-start h-full gap-3 pt-24 md:pl-20'>
                <div className='shadow-xl w-full md:w-3/4'>
                    <div className='relative'>
                        <video height="600" controls className='relative w-full' >
                            <source src={video} type="video/mp4" />
                        </video>
                        <span className='text-red-500 font-bold text-xl uppercase absolute top-2 right-3 z-20'>Live</span>
                    </div>

                    <div className='flex justify-around gap-4 py-3'>
                        <button className='py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out'><AiOutlinePlayCircle className='mr-2 text-2xl' /> Start Stream</button>

                        <button onClick={toggle} className='py-2 px-3 text-white text-lg font-semibold bg-[#5c17c5] flex items-center border border-[#5c17c5] hover:bg-transparent hover:text-black transition-all duration-75 ease-in-out'>
                            <AiOutlineShoppingCart className='mr-2 text-2xl' /> Shop Now</button>
                    </div>
                </div>

                {/* chat box */}
                <div className='h-[600px] w-full md:w-[25%] bg-[#18181b] shadow-xl relative text-white border rounded-sm'>
                    <div className='flex justify-between py-3 px-4 border-b border-gray-300 shadow-md'>
                        <h2 className='text-lg font-medium'>Stream Chat</h2>
                        <BsPeople className='text-xl' />
                    </div>
                    <div className='absolute bottom-0 w-full'>
                        <div className='flex flex-col gap-2 my-3 px-3'>
                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>ravonuz:</h3>
                                    <span className='ml-2 font-normal text-white'>chat guys</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>SillenDillenG:</h3>
                                    <span className='ml-2 font-normal text-white'>PagMan op</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>alpinix_0: </h3>
                                    <span className='ml-2 font-normal text-white'>monkaEyes</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>Duredzu: </h3>
                                    <span className='ml-2 font-normal text-white'>hold me</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>criseast555: </h3>
                                    <span className='ml-2 font-normal text-white'>monkaW</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>clemonr6: </h3>
                                    <span className='ml-2 font-normal text-white'>!uptime</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>Big_Fudgge: </h3>
                                    <span className='ml-2 font-normal text-white'>PepegaChat</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>Vuskyy: </h3>
                                    <span className='ml-2 font-normal text-white'>xQcOW chatr</span>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <CgProfile className='mr-2 text-2xl' />
                                <div className='flex items-center'>
                                    <h3 className='text-xl font-medium text-[#5c17c5] -mt-1'>Big_Fudgge: </h3>
                                    <span className='ml-2 font-normal text-white'>PepegaChat</span>
                                </div>
                            </div>
                        </div>

                        <div className='relative px-3'>
                            <input className='py-2 pl-3 bg-[#3d3d40] placeholder-white w-full rounded-md' type="text" placeholder='Send a Message' />
                            <HiOutlineEmojiHappy className='absolute top-[10px] right-5 text-xl' />
                        </div>

                        <div className='flex items-center justify-between px-3 py-4'>
                            <div className='flex items-center gap-3'>
                                <CgShapeCircle className='text-2xl ml-2 text-[#5c17c5]' />
                                <span className='font-medium'>0</span>
                            </div>
                            <div className='flex items-center gap-3'>
                                <AiFillSetting className='text-xl' />
                                <button className='py-1 px-3 text-white font-medium rounded-md bg-[#5c17c5]'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;