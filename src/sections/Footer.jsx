import React from 'react';
import { footerMenuLine, logo } from '../assets/icons';
import { footerConsts } from '../constants';
import FooterMenuLine from '../components/FooterMenuLine';

const Footer = () => {
    return (
        <footer className='footer mx-auto max-w-[1312px] mt-[81px] '>
            
            <div className='max-w-[1312px]'>
                <div className='px-[20px] mx-auto'>
                    <section className='flex flex-col md:flex-row items-center md:items-start md:justify-evenly lg:justify-between'>
                        <div>
                            <img src={logo} alt="logo" className='w-[185px] h-[187px]'/>
                        </div>

                        <FooterMenuLine />

                        <div className='groupLinks'>
                            {footerConsts.footerLinkGroup1.map((link) => (
                                <a key={link.id} href={link.href} className='text-white font-bold'>{link.title}</a>
                            ))}
                        </div>

                        <FooterMenuLine />

                        <div className='groupLinks'>
                            {footerConsts.footerLinkGroup2.map((link) => (
                                <a key={link.id} href={link.href} className='text-white font-bold'>{link.title}</a>
                            ))}
                        </div>
                        
                        <FooterMenuLine />
                        
                        <div>
                            <h2 className='font-bold text-[white] mt-[56px] md:mt-0 text-center md:text-left mb-[29px]'>SOCIALIZE WITH HYDRA</h2>
                            <div className='flex gap-[20px] justify-center items-center flex-wrap'>
                                {footerConsts.socialMedias.map((media) => (
                                    <a key={media.id} href={media.href}>
                                        <img src={media.img} alt={media.title} />
                                    </a>
                                ))}
                            </div>
                            <button className='footerBtn'>
                                BUILD YOUR WORLD
                            </button>
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
                        
                        <p className='w-full max-w-[273px] mx-auto mt-[38px] flex flex-col justify-center items-center gap-2  text-white font-bold text-[14px] mb-[89px] md:flex-row md:mt-[49px] md:mb-[59px] whitespace-nowrap'>
                            <span>2023 © HYDRA LANDING PAGE</span> 
                            <span>ALL RIGHTS RESERVED</span> 
                        </p>
                    </div>
                </div>
            </div>

            
        </footer>
    );
}

export default Footer;
