import React, { useEffect, useState } from 'react';
import SectionHead from '../components/SectionHead';
import { whyBuildCards, whyBuildHead } from '../constants';
import WhyBuildCard from '../components/WhyBuildCard';
import useCreateSider from '../hooks/useCreateSider';
import SliderBtnPrev from '../components/SliderBtnPrev';
import SliderBtnNext from '../components/SliderBtnNext';

const WhyBuild = () => {

    // const [slider, setSlider] = useState(1)
    // const [data, setData] = useState(whyBuildCards[0])


    // const nextSlider = () => {
    //     slider > 3 ? setSlider(1) : setSlider( prev => prev + 1)
    // }

    // const prevSlider = () => {
    //     slider < 2 ? setSlider(4) : setSlider( prev => prev - 1)
    // }

    // useEffect(() => {
    //     const el = whyBuildCards.filter(card => card.id === slider)
    //     setData(el[0])
    //     console.log(data)

    // }, [slider])

    const [data, nextSlider, prevSlider] = useCreateSider(whyBuildCards, 1, 4)

    return (
        <section id='services' className='mx-auto max-w-[1312px] mt-[60px] md:mt-[111px]'>
            
            {/* MOBILE SECTION */}
            <section className='md:hidden'>

                <h2 className='text-white font-bold text-[26px] mb-[16px] text-center'>
                    {whyBuildHead.title}
                </h2>
                <h3 className='text-white font-light text-[26px] text-center'>
                    {whyBuildHead.subtitle}
                </h3>

                <div className='flex justify-center relative items-center mt-[26px] w-fit mx-auto px-[41px]'>
                    <SliderBtnPrev func={prevSlider} />
                    <WhyBuildCard data={data} />
                    <SliderBtnNext func = {nextSlider} />
                </div>
            </section>


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
