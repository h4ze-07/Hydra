import React from 'react';
import { introBoy } from '../assets/images/indedx';
import SectionHead from '../components/SectionHead';
import { heroHead } from '../constants';

const Intro = () => {
    return (
        <section id="about" className='mx-auto max-w-[1312px] '>
            

            <div className='lg:hidden mt-[59px] px-[20px]'>
                <div className='mx-auto w-fit text-center mb-[36px]'>
                    <h2 className='mb-[16px] font-bold text-[26px] md:text-[38px] text-white'>INTRODUCTION</h2>
                    <h3 className=' font-light text-[26px] md:text-[38px] text-white'>TO HYDRA VR</h3>
                </div>

                <div className='max-w-[650px] mx-auto overflow-hidden rounded-tl-[140px] rounded-br-[140px] rounded-tr-[60px] rounded-bl-[60px] mb-[51px]'>
                    <img src={introBoy} alt="boy" className='w-full h-full object-contain -mt-[3px] ' />
                </div>

                <p className='max-w-[650px] mx-auto text-white text-[12px] tablet:text-[16px] md:text-[21px] mb-[34px] tablet:mb-[44px] md:mb-[52px] '>
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
                </p>

                <button className='px-[63px] py-[19px] mx-auto block bg-[#8176AF] rounded-[40px] font-bold'>LET’S GET IN TOUCH</button>
            </div>




            <div className='hidden lg:block px-[20px] mx-auto'>

                <section>
                    
                    <SectionHead data={heroHead} />

                    
                    <section className='mt-[101px] flex gap-[50px] justify-between '>

                        <div className='w-[524px] max-h-[557px] overflow-hidden rounded-tl-[140px] rounded-br-[140px] rounded-tr-[60px] rounded-bl-[60px]'>
                            <img src={introBoy} alt="boy" className=' object-cover -mt-[3px] w-full' />
                        </div>

                        <div className='lg:mt-[30px] xl:mt-[50px]'>

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

                            <button className='px-[43px] py-[17px] block bg-[#8176AF] text-[12px] rounded-[40px] font-bold'>LET’S GET IN TOUCH</button>
                        </div>

                    </section>

                </section>
                

            </div>


        </section>
    );
}

export default Intro;
