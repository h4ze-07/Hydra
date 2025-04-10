import React from 'react';
import HowWeBuildCard from '../components/HowWeBuildCard';
import SectionHead from '../components/SectionHead';
import SliderBtnNext from '../components/SliderBtnNext';
import SliderBtnPrev from '../components/SliderBtnPrev';
import { howWeBuildSection } from '../constants';
import useCreateSider from '../hooks/useCreateSider';

import { motion } from 'framer-motion';

const HowBuild = () => {

    const [data, nextSlider, prevSlider] = useCreateSider(howWeBuildSection.sectionCircles, 1, 4)

    return (
        <section id='howTo'>

            {/* MOBILE SECTION */}
            <section className=' overflow-hidden'>

                <div className='md:hidden overflow-hidden'>
                    <motion.h2 className='text-white font-bold text-center text-[26px] mb-[16px]'
                        initial={{ opacity: 0, y: '-100%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        HOW WE BUILD
                    </motion.h2>
                    <motion.h3 className='text-white font-light text-center text-[26px] mb-[37px]'
                        initial={{ opacity: 0, y: '-100%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        WITH HYDRA VR?
                    </motion.h3>
                </div>

                <div className='flex relative items-end tablet:hidden'>
                    <SliderBtnPrev func={prevSlider} />

                    <HowWeBuildCard data={data} />

                    <SliderBtnNext func={nextSlider} />
                </div>

            </section>


            {/* DESKTOP SECTION */}

            <section className='mx-auto max-w-[1312px] mt-[0] md:mt-[69px] hidden md:block overflow-hidden'>
                <div className='px-[20px] mx-auto'>
                    <SectionHead data={howWeBuildSection.sectionHead} />
                </div>
            </section>

            <motion.section className='howWeBuild max-w-[1440px] mx-auto hidden tablet:block'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >

                <div className='flex justify-evenly tablet:flex-wrap md:flex-nowrap mt-[55px] lg:mt-[110px]'>

                    {howWeBuildSection.sectionCircles.map((circle) => (
                        <HowWeBuildCard key={circle.number} data={circle} />
                    ))}

                </div>

            </motion.section>

        </section>
    );
}

export default HowBuild;
