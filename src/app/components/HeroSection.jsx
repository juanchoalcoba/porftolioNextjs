"use client"
import React, { useState, useRef,useEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { BsGithub } from 'react-icons/bs';
import { DiJsBadge, DiReact } from 'react-icons/di';
import gsap from 'gsap';

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef();


    const imageRef = useRef(null)
    useEffect(() => {
        const image = imageRef.current;
        gsap.set(image, {y: '-100%', opacity: 0, scale: 5, x: '-100%'})
        gsap.to(image, {
            y: '0%',
            opacity: 1,
            duration: 4,
            scale: 1,
            x: '0%',
            ease: 'power2.inOut'
        });

        gsap.fromTo('.span-gsap', {
            x: '-100%',
            opacity: 0,
            
            ease: 'power3.out'
        }, {x: '0%', opacity: 1, duration: 2})
    }, [])

    const handleHover = () => {
        setIsHovered(true);
        audioRef.current.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    return (
        /*className='rounded-tl-[8px] rounded-tr-[100px] mt-2 bg-gradient-to-r from-black to-cyan-900 px-8 py-4'*/
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left mt-12'>
                    <h1 className=' text-white span-gsap mb-4 text-4xl sm:text-7xl lg:text-8xl font-extrabold'>
                        <span className=' text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-gray-200'>
                            Hello, I´m{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[

                                'Juan Ignacio',
                                1000, // 
                                'Front-end',
                                1000,
                                'Web Designer',
                                1000,
                                'From Uruguay',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className=" text-lg md:text-4xl lg:text-6xl"
                        />
                    </h1>
                    <p className='text-[#ADB7BE] span-gsap text-base sm:text-lg mb-6 lg:text-2xl'>
                    I am passionate about technology and the web. I like to create exclusive and surprising designs
                    </p>
                    <div className='relative'>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 hover:bg-slate-200 text-white relative z-10 font-bold border border-white'>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-500 via-gray-800 hover:gray-900  text-white mt-3 relative z-10'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-bold'>Download CV</span>
                        </button>




                        <div className='absolute inset-0 bg-gradient-to-br from-[#181818] via-[#181818]] to-[#464545] rounded-full w-[250px] h-[70px] filter blur-md opacity-90'></div>
                    </div>
                    <div className="mt-8 justify-center items-center">
                            <button className="text-2xl ml-4"> {/* Clase de Tailwind para tamaño de texto extra grande */}
                                <BsGithub className="w-6 h-6" /> {/* Clases de Tailwind para ancho y alto */}
                            </button>
                            <button className="text-2xl ml-4"> {/* Clase de Tailwind para tamaño de texto extra grande */}
                                <DiJsBadge className="w-6 h-6" /> {/* Clases de Tailwind para ancho y alto */}
                            </button>
                            <button className="text-2xl ml-4 "> {/* Clase de Tailwind para tamaño de texto extra grande */}
                                <DiReact className="w-6 h-6" /> {/* Clases de Tailwind para ancho y alto */}
                            </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            ref={imageRef}
                            src="/images/hero.png"
                            alt="Imagen first"
                            className='gsap-image absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={400}
                            priority={true}
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        />
                        <audio ref={audioRef} src='/sounds/typing.mp3' />
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection