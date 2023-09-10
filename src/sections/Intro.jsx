import React from 'react';
import { introBoy } from '../assets/images/indedx';
import SectionHead from '../components/SectionHead';
import { heroHead } from '../constants';

import {easeIn, easeInOut, motion} from 'framer-motion'

const Intro = () => {
    return (
        <section id="about" className='mx-auto max-w-[1312px] overflow-hidden'>
            

            <div className='lg:hidden mt-[59px] px-[20px] overflow-hidden'>
                <div className='mx-auto w-fit text-center mb-[36px]'>
                    <motion.h2 className='mb-[16px] font-bold text-[26px] md:text-[38px] text-white'
                    initial={{y: '-100%', opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: false}}
                    transition={{duration: 0.7, delay: 0, ease: easeIn}}
                    >INTRODUCTION</motion.h2>
                    <motion.h3 className=' font-light text-[26px] md:text-[38px] text-white'
                    initial={{y: '-100%', opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: false}}
                    transition={{duration: 0.7, delay: 0.3, ease: easeIn}}
                    >TO HYDRA VR</motion.h3>
                </div>

                <motion.div className='max-w-[650px] mx-auto overflow-hidden rounded-tl-[140px] rounded-br-[140px] rounded-tr-[60px] rounded-bl-[60px] mb-[51px]'
                initial={{x: '-100%'}}
                whileInView={{x: 0}}
                viewport={{once: false}}
                transition={{
                    duration: 0.7,
                    ease: easeIn,
                }}
                >
                    <img src={introBoy} alt="boy" className='w-full h-full object-contain -mt-[3px] ' />
                </motion.div>

                <motion.p className='max-w-[650px] mx-auto text-white text-[12px] tablet:text-[16px] md:text-[21px] mb-[34px] tablet:mb-[44px] md:mb-[52px]'
                initial={{y: '-100%', opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 0.7, ease: easeIn}}
                >
                    Eget mi proin sed libero enim sed faucibus turpis. Nisl 
                    rhoncus mattis rhoncus urna neque viverra justo. Vivamus 
                    at augue eget arcu dictum. Ultrices gravida dictum fusce 
                    ut placerat orci. Aenean et tortor at risus viverra adipisci
                    ng at in. Mattis aliquam faucibus purus in massa. Est 
                    placerat in egestas erat imperdiet sed. Consequat sem
                    per viverra nam libero justo laoreet sit amet. Aliquam 
                    etiam erat velit scelerisque in dictum non consectetur 
                    a. Laoreet sit amet cursus sit amet. Vel eros donec ac 
                    odio tempor orci dapibus. Sem nulla pharetra diam sit 
                    amet nisl suscipit adipiscing bibendum. Leo a diam 
                    sollicitudin tempor.
                </motion.p>

                <motion.button className='introBtn px-[63px] py-[19px] mx-auto block bg-[#8176AF] rounded-[40px] font-bold text-[#343045] text-[14px]'
                initial={{y: "100%", opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 0.7, delay: 0}}
                >LET’S GET IN TOUCH</motion.button>
            </div>


            {/* DESCTOP SECTION */}

            <div className='hidden lg:block px-[20px] mx-auto overflow-hidden'>

                <section>
                    
                    <SectionHead data={heroHead} />

                    
                    <section className='mt-[101px] flex gap-[50px] justify-between '>

                        <motion.div className='w-[524px] max-h-[557px] overflow-hidden rounded-tl-[140px] rounded-br-[140px] rounded-tr-[60px] rounded-bl-[60px]'
                        initial={{ scale: 0, opacity: 0, rotate: 360 }}
                        whileInView={{scale: 1, opacity: 1, rotate: 0}}
                        viewport={{once: false}}
                        transition={{delay: 0.5, duration: 0.8}}
                        >
                            <img src={introBoy} alt="boy" className=' object-cover -mt-[3px] w-full' />
                        </motion.div>

                        <motion.div className='lg:mt-[30px] xl:mt-[50px]'
                        initial={{y: '100%', opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: false}}
                        transition={{delay: 0.5, duration: 0.8, ease: easeInOut}}
                        >

                            <h2 className='font-bold text-[36px] text-white'>ABOUT</h2>
                            <h3 className=' font-light text-[36px] whitespace-nowrap text-white mb-[42px]'>HYDRA VR</h3>

                            <p className= ' text-white max-w-[650px] mb-[28px] lg:text-[14px] xl:text-[16px]'>
                                Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                                urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                                dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                                Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                                sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                                etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                                cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                                retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                                n tempor.
                            </p>

                            <button className='introBtn px-[43px] py-[17px] block bg-[#8176AF] text-[12px] rounded-[40px] font-bold'>LET’S GET IN TOUCH</button>
                        </motion.div>

                    </section>

                </section>
                

            </div>


        </section>
    );
}

export default Intro;
