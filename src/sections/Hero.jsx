import { useEffect, useState } from "react";
import { hamburgerMenu, logo, logoText, mobileBgLines } from "../assets/icons";
import { heroGirl } from "../assets/images/indedx";
import Navbar from "../components/Navbar";
import { heroLinks } from "../constants";
import HeroLinkItem from "../components/HeroLinkItem";

const Hero = () => {

    const [heroSlider, setHeroSlider] = useState(1)
    const [item, setItem] = useState([heroLinks[0]])

    

    const handleNext = () => {
        heroSlider > 2 ? setHeroSlider(1) : setHeroSlider( prev => prev + 1)
    }

    const handlePrev = () => {
        heroSlider < 2 ? setHeroSlider(3) : setHeroSlider( prev => prev - 1)
    }

    useEffect(() => {
        const el = heroLinks.filter((item) => item.id === heroSlider)
        setItem(el)
    }, [heroSlider])

    return (
        <section className=" max-w-[1312px]  mx-auto relative flex flex-col mt-[26px] overflow-hidden">
            
            


            <header className="flex justify-between items-end px-[20px]">
                <div className="flex gap-[11px] items-end">
                    <img src={logo} alt="logo" width={69} height={60} />
                    <img src={logoText} alt="logo text" width={46} height={28} className="mb-[5px]" />
                </div>


                <div className="cursor-pointer">
                    <img src={hamburgerMenu} alt="menu" width={33} height={26}
                    className="mb-[5px]"
                    />
                </div>


                

                <div className="hidden">
                    <button>btn1</button>
                    <button>btn2</button>
                </div>

            </header>

            {/* div className= "absolute z-[10] -top-[60px] -left-5 mx-auto w-[617px] h-[709px] )] bg-[url('/src/assets/icons/mobile-lines.svg' bg-no-repeat bg-center" />  */}


            {/* HERO START ---------------------------------------------------- */}
            <section className="w-full mt-[58px] mx-auto mb-[53px] flex flex-col 
            md:flex-row-reverse md:justify-between md:items-center md:px-5"> 
                <div className=" overflow-hidden rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px] border-[11px] border-[#00000013] max-w-[340px] h-[296px] mx-auto relative 
                md:mx-0 md:max-w-[390px] md:h-[356px] lg:max-w-[490px] lg:h-[426px] ">
                    <img src={heroGirl} alt="" className="h-full object-cover" />
                </div>

                <div className="text-center md:text-start font-bold text-[#FFFFFF] text-[24px] lg:text-[40px] ">
                    <p className="mb-[8px]"><span className="text-[#C0B7E8] text-[36px] lg:text-[46px]">Dive</span> Into The Depths</p>
                    <p>Of <span className="text-[#C0B7E8] text-[32px] lg:text-[46px]">Virtual Reality</span> </p>

                    <p className="hidden md:block max-w-[350px] lg:max-w-[450px] text-[16px] font-normal mt-[20px] mb-[30px] lg:mt-[36px] lg:mb-[66px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        nisl tincidunt eget. Lectus mauris eros in vitae .
                    </p>

                    <div className="mt-[36px] flex items-center gap-[20px] lg:gap-[40px]">
                        <button className="text-[14px] md:text-[12px] font-bold text-[#343045] py-[18px] px-[69px] md:py-[16px] md:px-[43px] bg-[#8176AF]  rounded-[40px] block mx-auto md:mx-0">BUILD YOUR WORLD</button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#C0B7E8" className="w-[40px] h-[50px] hidden md:block">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>

                    </div>
                </div>

                
            </section>




            <section className="bg-[#3A3456] mx-auto rounded-[90px] px-[11px] ">


                <div className="lg:hidden flex gap-[10px] md:gap-[20px] justify-between items-center">
                    <button className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full border-[1.5px] border-white flex justify-center items-center"
                        onClick={handlePrev}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>


                    </button>

                    {item.map((a) => (

                        <div key={a.id} className="flex gap-[10px] justify-center items-center flex-wrap pt-[27px] pb-[21px]">
                            <img src={a.img} alt="img" className="" />
                            <p 
                                className="text-[14px] text-white min-w-[150px] max-w-[195px]
                                        md:min-w-[270px] md:max-w-[390px] md:text-[26px]
                                "
                            
                            >{a.subtitle}</p>
                        </div>
                        
                    ))}

                    <button className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full border-[1.5px] border-white flex justify-center items-center"
                        onClick={handleNext}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  stroke-white ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
                

                <div >
                    
                </div>

            </section>
            
            <div className="hidden lg:block px-[20px]">
                <section className='flex items-center bg-[#3A3456] lg:mt-[103px] lg:mb-[90px] max-w-[1272px] rounded-[90px]'>
                    {heroLinks.map( (link) => (
                            <HeroLinkItem key={link.id} link={link} />
                    ))}
                </section>
            </div>


        </section>
    );
}

export default Hero;
