import React, { useEffect, useState } from 'react';
import SectionHead from '../components/SectionHead';
import { whyBuildCards, whyBuildHead } from '../constants';
import WhyBuildCard from '../components/WhyBuildCard';
import useCreateSider from '../hooks/useCreateSider';
import SliderBtnPrev from '../components/SliderBtnPrev';
import SliderBtnNext from '../components/SliderBtnNext';

import { motion } from 'framer-motion';

const WhyBuild = () => {

    const [data, nextSlider, prevSlider] = useCreateSider(whyBuildCards, 1, 4)

    return (
        <section id='services' className='mx-auto max-w-[1312px] mt-[60px] md:mt-[111px] overflow-hidden'>
            
            {/* MOBILE SECTION */}
            <section className='md:hidden'>

                <motion.h2 className='text-white font-bold text-[26px] mb-[16px] text-center'
                initial={{opacity: 0, x: '-100%'}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false}}
                transition={{duration: 0.6, delay: 0.3}}
                >
                    {whyBuildHead.title}
                </motion.h2>
                <motion.h3 className='text-white font-light text-[26px] text-center'
                initial={{opacity: 0, x: '100%'}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: false}}
                transition={{duration: 0.6, delay: 0.6}}
                >
                    {whyBuildHead.subtitle}
                </motion.h3>

                <div className='flex justify-center relative items-center mt-[26px] w-fit mx-auto px-[41px]'>
                    <SliderBtnPrev func={prevSlider} />
                    <WhyBuildCard data={data} />
                    <SliderBtnNext func = {nextSlider} />
                </div>
            </section>


            {/* DESKTOP SECTIOM */}
            <section className='hidden md:block px-[20px] mx-auto overflow-hidden'>

                <SectionHead data={whyBuildHead} />


                <section className='flex gap-[10px] mt-[107px] justify-center flex-wrap overflow-hidden'>
                    {whyBuildCards.map((card) => (
                        <WhyBuildCard key={card.label} data={card} />
                    ))}
                </section>

            </section>


        </section>
    );
}

export default WhyBuild;
