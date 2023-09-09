import React from 'react';
import { technologies } from '../constants';
import SliderBtnPrev from '../components/SliderBtnPrev';
import SliderBtnNext from '../components/SliderBtnNext';
import useCreateSider from '../hooks/useCreateSider';

import { motion } from 'framer-motion';

const Technologies = () => {

    const [data, nextSlider, prevSlider] = useCreateSider(technologies.techList, 1, 4)

    return (
        <section id='technologies' className='mx-auto max-w-[1312px] mt-[56px] md:mt-[114px]'>
            
            <section className='px-[20px] mx-auto'>
                <motion.div className='technologies w-full rounded-[160px] bg-[#211E2E] text-center pt-[51px] pb-[49px] lg:pt-[108px] lg:pb-[96px]'
                initial={{y: '-100%', opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{delay: 0, duration: 0.7}}
                >
                    <motion.h2 className='text font-bold text-white text-[16px] lg:text-[36px] mb-[14px] md:mb-[11px]'
                    initial={{y: '-100%', opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: false}}
                    transition={{delay: 0.5, duration: 0.7}}
                    >
                        {technologies.title}
                    </motion.h2>
                    <motion.h3 className='text-[white] text-[24px] lg:text-[36px] font-light'
                    initial={{y: '-100%', opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: false}}
                    transition={{delay: 0.9, duration: 0.6}}
                    >
                        {technologies.subtitle}
                    </motion.h3>
                </motion.div>

                <motion.button className='hidden md:block w-[70px] h-[70px] rounded-full border-[20px] border-[#0d0d0d52] box-content overflow-hidden z-10 mx-auto -m-[60px]'
                initial={{y: '-100%', opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{delay: 1, duration: 0.5}}
                >
                    <div className='techBtn flex items-center justify-center w-full h-full'>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 25L30 37.5L42.5 25" stroke="#433D60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </motion.button>
            </section>

            {/* MOBILE SECTION */}
            <section className=' tablet:hidden '>
                <div className='flex relative items-center justify-center'>
                    <SliderBtnPrev func={prevSlider} />
                    <img src={data.img} alt={data.title} className={data.styles} />
                    <SliderBtnNext func={nextSlider} />
                </div>

            </section>


            {/* DESKTOP SECTION */}
            <section className='hidden tablet:block px-[20px] mx-auto'>

                <div className='grid grid-cols-2 lg:grid-cols-4 mt-[20px] content-center items-center gap-3'>
                    {technologies.techList.map((item) => (
                        <motion.div key={item.id} className='flex items-center justify-center'
                        initial={{y: '100%', opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: false}}
                        transition={{delay: 0.25 * item.id , duration: 0.7}}
                        >
                            <img src={item.img} alt={item.title} className={item.styles} />
                        </motion.div>
                    ))}
                </div>

            </section>


        </section>
    );
}

export default Technologies;
