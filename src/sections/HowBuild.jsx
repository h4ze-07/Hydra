import React from 'react';
import SectionHead from '../components/SectionHead';
import { howWeBuildSection } from '../constants';
import HowWeBuildCard from '../components/HowWeBuildCard';
import SliderBtnPrev from '../components/SliderBtnPrev';
import SliderBtnNext from '../components/SliderBtnNext';
import useCreateSider from '../hooks/useCreateSider';

import { delay, motion } from 'framer-motion';

const HowBuild = () => {

    const [data, nextSlider, prevSlider] = useCreateSider(howWeBuildSection.sectionCircles, 1, 4)

    return (
        <section id='howTo'>
            
            {/* MOBILE SECTION */}
            <section className=''>

                <div className='md:hidden'>
                    <h2 className='text-white font-bold text-center text-[26px] mb-[16px]'>
                        HOW WE BUILD
                    </h2>
                    <h3 className='text-white font-light text-center text-[26px] mb-[37px]'>
                        WITH HYDRA VR?
                    </h3>
                </div>

                <div className='flex relative items-end tablet:hidden'>
                    <SliderBtnPrev func={prevSlider} />

                    <HowWeBuildCard data={data} />
                    
                    <SliderBtnNext func={nextSlider} />
                </div>

            </section>


            {/* DESKTOP SECTION */}

            <section className='mx-auto max-w-[1312px] mt-[0] md:mt-[69px] hidden md:block'>
                <div className='px-[20px] mx-auto'>
                    <SectionHead data={howWeBuildSection.sectionHead} />
                </div>
            </section>

            <motion.section className='howWeBuild max-w-[1440px] mx-auto hidden tablet:block'
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: false}}
            transition={{delay: 0.5, duration: 0.6}}
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
