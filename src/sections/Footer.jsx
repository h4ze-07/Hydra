import React from 'react';
import { footerMenuLine, logo } from '../assets/icons';
import { footerConsts } from '../constants';
import FooterMenuLine from '../components/FooterMenuLine';

import { easeOut, motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className='footer mx-auto max-w-[1312px] mt-[81px] '>
            
            <div className='max-w-[1312px]'>
                <div className='px-[20px] mx-auto'>
                    <section className='flex flex-col md:flex-row items-center md:items-start md:justify-evenly lg:justify-between'>
                        <motion.div
                        initial={{scale: 0, rotate: 360, opacity: 0}}
                        whileInView={{scale: 1, rotate: 0, opacity: 1}}
                        viewport={{once: false}}
                        transition={{delay: 0.3, duration: 1, ease: easeOut}}
                        >
                            <img src={logo} alt="logo" className='w-[185px] h-[187px]'/>
                        </motion.div>

                        <FooterMenuLine />

                        <div className='groupLinks'>
                            {footerConsts.footerLinkGroup1.map((link) => (
                                <motion.a key={link.id} href={link.href} className='text-white font-bold'
                                initial={{y: '-100%', opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: false}}
                                transition={{delay: 0.25 * link.id, duration: 0.5}}
                                >{link.title}</motion.a>
                            ))}
                        </div>

                        <FooterMenuLine />

                        <motion.div className='groupLinks'
                        >
                            {footerConsts.footerLinkGroup2.map((link) => (
                                <motion.a key={link.id} href={link.href} className='text-white font-bold'
                                initial={{y: '-100%', opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                viewport={{once: false}}
                                transition={{delay: 0.45 * link.id, duration: 0.5}}
                                >{link.title}</motion.a>
                            ))}
                        </motion.div>
                        
                        <FooterMenuLine />
                        
                        <div>
                            <motion.h2 className='font-bold text-[white] mt-[56px] md:mt-0 text-center md:text-left mb-[29px]'
                            initial={{y: '-100%', opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: false}}
                            transition={{delay: 0.5, duration: 0.5}}
                            >SOCIALIZE WITH HYDRA</motion.h2>
                            <div className='flex gap-[20px] justify-center items-center flex-wrap'>
                                {footerConsts.socialMedias.map((media) => (
                                    <motion.a key={media.id} href={media.href}
                                    initial={{x: '100%', opacity: '0'}}
                                    whileInView={{x: 0, opacity: 1}}
                                    viewport={{once: false}}
                                    transition={{delay: 0.3 * media.id, transition: 0.5}}
                                    >
                                        <img src={media.img} alt={media.title} />
                                    </motion.a>
                                ))}
                            </div>
                            <motion.button className='footerBtn'
                            initial={{y: '100%', opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: false}}
                            transition={{delay: 0.5, duration: 0.5}}
                            >
                                BUILD YOUR WORLD
                            </motion.button>
                        </div>
                        


                    </section>
                    <div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="290" height="2" viewBox="0 0 290 2" fill="none" className=' w-full max-w-[289px] mx-auto md:hidden'>
                        <path d="M0.5 1C20.5 1 201.5 1 289.5 1" stroke="url(#paint0_linear_314_273)"/>
                        <defs>
                        <linearGradient id="paint0_linear_314_273" x1="-2.23865" y1="1.00004" x2="-2.23498" y2="-0.0667334" gradientUnits="userSpaceOnUse">
                        <stop offset="0.067901" stopColor="#343045"/>
                        <stop offset="0.348958" stopColor="#C0B7E8"/>
                        <stop offset="0.6875" stopColor="#8176AF"/>
                        <stop offset="0.927153" stopColor="#343045"/>
                        </linearGradient>
                        </defs>
                        </svg>

                        <svg width="1269" height="2" viewBox="0 0 1269 2" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className='hidden md:block w-full md:max-w-[650px] lg:max-w-[900px] xl:max-w-full mx-auto'
                        >
                        <path d="M0 1H1269" stroke="url(#paint0_linear_13_63)"/>
                        <defs>
                        <linearGradient id="paint0_linear_13_63" x1="1269" y1="1.00238" x2="3.52735e-07" y2="0.980001" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#343045"/>
                        <stop offset="0.348958" stopColor="#C0B7E8"/>
                        <stop offset="0.6875" stopColor="#8176AF"/>
                        <stop offset="1" stopColor="#343045"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        
                        <motion.p className='w-full max-w-[273px] mx-auto mt-[38px] flex flex-col justify-center items-center gap-2  text-white font-bold text-[14px] mb-[89px] md:flex-row md:mt-[49px] md:mb-[59px] whitespace-nowrap'
                        initial={{x: '-100%', opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: false}}
                        transition={{delay: 0.5, duration: 0.9}}
                        >
                            <span>2023 © HYDRA LANDING PAGE</span> 
                            <span>ALL RIGHTS RESERVED</span> 
                        </motion.p>
                    </div>
                </div>
            </div>

            
        </footer>
    );
}

export default Footer;
