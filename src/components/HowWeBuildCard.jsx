import React from 'react';

const HowWeBuildCard = ({data}) => {
    return (
        <div className=' hidden md:flex flex-col gap-[25px] items-center'>
            
            <div className='w-[125px] h-[125px] lg:w-[159px] lg:h-[159px] rounded-full box-content border-[20px] border-[#0d0d0d52] overflow-hidden'>
                <div className='buildCircle flex items-center justify-center w-full h-full'>
                    <p className='text-[#343045] font-bold text-[64px]'>
                        {data.number}
                    </p>
                </div>
            </div>


            <div className='flex items-center'>
                <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.4584 33.4999L19.5417 33.4999M47.4584 33.4999L36.2917 44.6666M47.4584 33.4999L36.2917 22.3333" stroke="#C0B7E8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <h3 className='max-w-[180px] text-[18px] lg:text-[24px] text-white font-bold'>
                    {data.label}
                </h3>
            </div>
            
        </div>
    );
}

export default HowWeBuildCard;
