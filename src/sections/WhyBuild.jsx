import React from 'react';
import SectionHead from '../components/SectionHead';
import { whyBuildCards, whyBuildHead } from '../constants';
import WhyBuildCard from '../components/WhyBuildCard';

const WhyBuild = () => {
    return (
        <section className='mx-auto max-w-[1312px] mt-[111px]'>
            
            {/* MOBILE SECTION */}
            <section className='md:hidden'></section>


            {/* DESKTOP SECTIOM */}
            <section className='hidden md:block px-[20px] mx-auto'>

                <SectionHead data={whyBuildHead} />


                <section className='flex gap-[10px] mt-[107px] justify-center flex-wrap '>
                    {whyBuildCards.map((card) => (
                        <WhyBuildCard key={card.label} data={card} />
                    ))}
                </section>

            </section>


        </section>
    );
}

export default WhyBuild;
