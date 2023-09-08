import React from 'react';
import { technologies } from '../constants';

const Technologies = () => {
    return (
        <section id='technologies' className='mx-auto max-w-[1312px] mt-[56px] md:mt-[114px]'>
            
            <section className='px-[20px] mx-auto'>
                <div className='technologies w-full rounded-[160px] bg-[#211E2E] text-center pt-[51px] pb-[49px] lg:pt-[108px] lg:pb-[96px]'>
                    <h2 className='text font-bold text-white text-[16px] lg:text-[36px] mb-[11px] '>
                        {technologies.title}
                    </h2>
                    <h3 className='text-[white] text-[24px] lg:text-[36px] font-light '>
                        {technologies.subtitle}
                    </h3>
                </div>

                <button className='hidden md:block w-[70px] h-[70px] rounded-full border-[20px] border-[#0d0d0d52] box-content overflow-hidden z-10 mx-auto -m-[60px]'>
                    <div className='techBtn flex items-center justify-center w-full h-full'>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 25L30 37.5L42.5 25" stroke="#433D60" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </button>
            </section>

            {/* MOBILE SECTION */}
            <section className=' md:hidden '>

            </section>


            {/* DESKTOP SECTION */}
            <section className='hidden md:block px-[20px] mx-auto'>

                <div className='grid grid-cols-2 lg:grid-cols-4 mt-[20px] content-center items-center gap-3'>
                    {technologies.techList.map((item) => (
                        <div key={item.id} className='flex items-center justify-center'>
                            <img src={item.img} alt={item.title} className={item.styles} />
                        </div>
                    ))}
                </div>

            </section>


        </section>
    );
}

export default Technologies;
