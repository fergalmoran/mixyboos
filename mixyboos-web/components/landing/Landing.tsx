import React from 'react';
import Link from 'next/link';

const Landing = () => {
    return (
        <React.Fragment>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('img/landing.jpg')",
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-75 bg-black"
                    ></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Robot Powered Mixes.
                                </h1>
                                <p className="mt-4 text-lg text-gray-300">
                                    Join our friendly, global community of
                                    fabulous DJs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                    style={{ transform: 'translateZ(0)' }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </div>

            <section className="pb-20 bg-gray-300 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                        <i className="fas fa-music"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Hassle Free
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-600">
                                        We'll do our best to keep your content
                                        up and promise to always let your
                                        listeners rewind.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                        <i className="fas fa-hand-holding-usd"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Generous Free Tier
                                    </h6>

                                    <p className="mt-2 mb-4 text-gray-600">
                                        5Gb of storage for free. Unlimited
                                        mixes, unlimited sharing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                <div className="px-4 py-5 flex-auto">
                                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                        <i className="fas fa-headphones"></i>
                                    </div>
                                    <h6 className="text-xl font-semibold">
                                        Developed by DJs.... for DJs.
                                    </h6>
                                    <p className="mt-2 mb-4 text-gray-600">
                                        We've been making mixes since TDK-90s
                                        and uploading them since before MySpace.
                                        We are listener first, DJ second and
                                        everyone else can get in line.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Landing;
