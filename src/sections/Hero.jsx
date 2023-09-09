import { useEffect, useRef, useState } from "react";
import { closeMenu, hamburgerMenu, logo, logoText, mobileBgLines } from "../assets/icons";
import { heroGirl } from "../assets/images/indedx";
import Navbar from "../components/Navbar";
import { headerVars, heroLinks } from "../constants";
import HeroLinkItem from "../components/HeroLinkItem";
import useCreateSider from "../hooks/useCreateSider";

import {easeInOut, motion, useInView} from 'framer-motion';

const Hero = () => {

    const svgRef = useRef(null)
    const refInView = useInView(svgRef)

    const [data, nextSlider, prevSlider] = useCreateSider(heroLinks, 1, 3)
    const [activeNavbar, setActiveNavbar] = useState(false)

    const handleMenuClick = () => {
        setActiveNavbar(!activeNavbar)
    }

    return (
        <section className=" max-w-[1312px]  mx-auto relative flex flex-col mt-[26px] overflow-hidden">

            <header className="flex justify-between items-end md:items-center bg-[#302C42] fixed top-0 left-auto max-w-[1312px] mx-auto py-[15px] w-full px-[20px] z-20">

                <motion.a href="/" className="flex gap-[11px] lg:gap-[15px] items-end md:items-center"
                initial={{x: '-200px'}}
                animate={{x: 0}}
                transition={{
                    duration: 0.7,
                }}
                >
                    <img src={logo} alt="logo" className="w-[69px] h-[69px] lg:w-[102px] lg:h-[103px]"/>
                    <img src={logoText} alt="logo text" width={46} height={28} className="mb-[5px] md:mb-0 w-[46px] h-[28px] lg:w-[76px] lg:h-[46px]" />
                </motion.a>


                <motion.div className="md:hidden"
                initial={{x: '200px'}}
                animate={{x: 0}}
                transition={{
                    duration: 0.7,
                }}
                >
                    <img src={!activeNavbar ? hamburgerMenu : closeMenu} alt="menu" width={33} height={26}
                    className="mb-[5px] cursor-pointer" onClick={handleMenuClick}
                    />
                </motion.div>

                {activeNavbar && <Navbar linkClick={handleMenuClick} containerStyles={headerVars.headerMobileStyles} />}

                <Navbar linkClick={handleMenuClick} containerStyles={headerVars.headerDesktopStyles} />

            </header>


            {/* HERO START ---------------------------------------------------- */}
            <section className="w-full px-[20px] mx-auto mb-[53px] flex flex-col 
            md:flex-row-reverse md:justify-between md:items-center md:px-5 pt-[100px] md:pt-[170px] lg:pt-[200px]">

                <div className="lines absolute top-0 left-0 md:left-[30%] w-full h-full flex items-start justify-center md:justify-end">

                <motion.svg width="390" height="645" viewBox="0 0 390 645" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[70%] w-full"
                >
                    <motion.path d="M449 77C374.214 89.4693 231.842 160.354 260.641 344.137C289.439 527.92 166.879 617.289 102 639" stroke="url(#paint0_linear_307_38)" strokeWidth="6"
                    initial={{opacity: 0, pathLength: 0}}
                    animate={{opacity: refInView ? 1 : 0, pathLength: refInView ? 1 : 0}}
                    transition={{delay: 0.7, duration: 1.5}}
                    viewport={{once: false}}
                    />
                    <motion.path d="M454 287.11C246.803 276.897 -166.669 332.776 -162.975 638" stroke="url(#paint1_linear_307_38)" strokeWidth="6"
                    initial={{opacity: 0, pathLength: 0}}
                    animate={{opacity: refInView ? 1 : 0, pathLength: refInView ? 1 : 0}}
                    transition={{delay: 0.7, duration: 1.5}}
                    viewport={{once: false}}
                    />
                    <motion.path d="M23.1617 -65C20.4117 52.5736 51.6736 298.574 198.721 341.986C345.769 385.397 348.871 561.417 332.041 644" stroke="url(#paint2_linear_307_38)" strokeWidth="6"
                    initial={{opacity: 0, pathLength: 0}}
                    animate={{opacity: refInView ? 1 : 0, pathLength: refInView ? 1 : 0}}
                    transition={{delay: 0.7, duration: 1.5}}
                    viewport={{once: false}}
                    />
                    <defs>
                    <linearGradient id="paint0_linear_307_38" x1="407.511" y1="98.0015" x2="192.555" y2="573.111" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#343045"/>
                    <stop offset="0.276042" stopColor="#8176AF"/>
                    <stop offset="0.739583" stopColor="#C0B7E8"/>
                    <stop offset="1" stopColor="#343045"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_307_38" x1="422.102" y1="279.975" x2="-153.75" y2="586.359" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#343045"/>
                    <stop offset="0.213542" stopColor="#C0B7E8"/>
                    <stop offset="0.71875" stopColor="#8176AF"/>
                    <stop offset="1" stopColor="#343045"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_307_38" x1="56" y1="111.5" x2="325.136" y2="617.784" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0104167" stopColor="#343045"/>
                    <stop offset="0.229167" stopColor="#C0B7E8"/>
                    <stop offset="0.776042" stopColor="#8176AF"/>
                    <stop offset="1" stopColor="#343045"/>
                    </linearGradient>
                    </defs>
                </motion.svg>
                </div>

                <motion.div ref={svgRef} className="overflow-hidden rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] border-[11px] border-[#00000013] mx-auto
                w-full h-full max-w-[600px]
                md:max-w-[390px] md:h-[356px] lg:max-w-[490px] lg:h-[426px]
                md:mx-0 z-10"
                initial={{x: '100%'}}
                whileInView={{x: 0}}
                viewport={{once: false}}
                transition={{
                    duration: 1,
                }}
                >
                    <img src={heroGirl} alt="" className="h-full w-full object-cover" />
                </motion.div>

                <motion.div className="text-center md:text-start font-bold text-[#FFFFFF] text-[24px] tablet:text-[34px] lg:text-[40px] z-10"
                
                >
                    <motion.p className="mb-[8px]"
                    initial={{x: '-100%'}}
                    whileInView={{x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8}}
                    ><span className="text-[#C0B7E8] text-[36px] tablet:text-[42px] lg:text-[46px]">Dive</span> Into The Depths</motion.p>
                    <motion.p
                    initial={{x: '-100%'}}
                    whileInView={{x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8, delay: 0.3}}
                    >Of <span className="text-[#C0B7E8] text-[32px] tablet:text-[42px] lg:text-[46px]"
                    >Virtual Reality</span> 
                    </motion.p>

                    <motion.p className="hidden md:block max-w-[350px] lg:max-w-[450px] text-[16px] font-normal mt-[20px] mb-[30px] lg:mt-[36px] lg:mb-[66px]"
                    initial={{x: '-100%'}}
                    whileInView={{x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8, delay: 0.3}}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </motion.p>

                    <motion.div className="mt-[36px] flex items-center gap-[20px] lg:gap-[40px]"
                    initial={{y: "-100%", opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: false}}
                    transition={{duration: 0.7, delay: 0}}
                    >
                        <motion.button className="text-[14px] md:text-[12px] font-bold text-[#343045] py-[18px] px-[69px] md:py-[16px] md:px-[43px] bg-[#8176AF]  rounded-[40px] block mx-auto md:mx-0 headerBtnGradient"
                        initial = {{scale: 1}}
                        whileHover={{
                            scale: 1.1
                        }}
                        transition={{
                            
                            ease: easeInOut,
                            duration: 0.2,
                        }}
                        >BUILD YOUR WORLD</motion.button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#C0B7E8" className="w-[40px] h-[50px] hidden md:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>

                    </motion.div>
                </motion.div>

                
            </section>




            <motion.section className="heroInfo mx-auto rounded-[90px] px-[11px] z-10"
            initial={{y: "100%", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: false}}
            transition={{duration: 0.7, delay: 0}}
            >


                <div className="lg:hidden flex gap-[10px] md:gap-[20px] justify-between items-center"
                >
                    <button className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full border-[1.5px] border-white flex justify-center items-center"
                        onClick={prevSlider}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    
                    <div key={data.id} className="flex gap-[10px] justify-center items-center flex-wrap pt-[27px] pb-[21px]">
                            <img src={data.img} alt="img" className="" />
                            <p 
                                className="text-[14px] text-white min-w-[150px] max-w-[195px]
                                        md:min-w-[270px] md:max-w-[390px] md:text-[26px]"
                            >{data.subtitle}</p>
                        </div>

                    <button className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full border-[1.5px] border-white flex justify-center items-center"
                        onClick={nextSlider}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  stroke-white ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </motion.section>
            
            {/* DESCTOP SECTION */}
            <motion.div className="hidden lg:block px-[20px]"
            initial={{y: "100%", opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: false}}
            transition={{duration: 0.6, delay: 0.8}}
            >
                <section className='heroInfo flex justify-evenly items-center bg-[#3A3456] lg:mt-[103px] lg:mb-[90px] max-w-[1272px] rounded-[90px]'>
                    {heroLinks.map( (link) => (
                            <HeroLinkItem key={link.id} link={link} />
                    ))}
                </section>
            </motion.div>


        </section>
    );
}

export default Hero;
