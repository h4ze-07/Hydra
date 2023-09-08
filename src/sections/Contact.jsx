const Contact = () => {

    return (
        <section id="joinHydra" className='mt-[81px] md:mt-[96px] lg:mt-[112px] mx-auto max-w-[1312px] z-10'>
            
            <div className='md:block px-[20px] mx-auto  overflow-hidden'>

                <div className='contact-form rounded-[40px] md:rounded-[75px] lg:rounded-[100px]'>
                    <h2 className='text-center text-white text-[24px] md:text-[30px] lg:text-[36px] font-bold pt-[45px]'>
                        JOIN HYDRA
                    </h2>

                    <svg width="414" height="2" viewBox="0 0 414 2" fill="none" xmlns="http://www.w3.org/2000/svg" className='max-w-[207px] md:max-w-[320px] lg:max-w-none mx-auto my-[21px]'>
                    <path d="M0 1H414" stroke="url(#paint0_linear_13_46)"/>
                    <defs>
                    <linearGradient id="paint0_linear_13_46" x1="414" y1="1.00238" x2="0" y2="1" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#343045"/>
                    <stop offset="0.348958" stopColor="#C0B7E8"/>
                    <stop offset="0.6875" stopColor="#8176AF"/>
                    <stop offset="1" stopColor="#343045"/>
                    </linearGradient>
                    </defs>
                    </svg>



                    <h3 className='text-center mx-auto text-[24px] md:text-[30px] lg:text-[36px] text-[#FFF] font-light mb-[36px] block lg:flex justify-center gap-2'>
                        <p>
                            Let’s Build 
                        </p>
                        <p>
                            Your VR Experience
                        </p>
                    </h3>

                    <form className='grid grid-cols-1 md:grid-cols-2 gap-y-[22px] md:gap-x-[10px] lg:gap-y-[39px] px-[21px] md:px-[56px] lg:px-[107px] overflow-hidden' onSubmit={(e) => e.preventDefault()} >
                        <input type="text" name="name" id="name" placeholder='First Name' className='inputFormStyles'/>
                        <input type="text" name="surname" id="surname" placeholder='Last Name' className='inputFormStyles'/>
                        <input type="email" name="email" id="email" className='inputFormStyles' placeholder='Email'/>
                        <input type="tel" name="phone" id="phone" className='inputFormStyles' placeholder='Phone Number'/>
                        <input type="text" name="subject" id="subject" className='md:col-span-2 inputFormStyles' placeholder='Subject'/>
                        <textarea name="message" id="message" className=' md:col-span-2 h-[219px] resize-none inputFormStyles' placeholder='Tell Us Something...' />
                        <div className="md:col-span-2">
                            <button type='submit' className=" formBtn block text-[#343045] font-bold text-[14px] py-[15px] rounded-[40px] mt-[30px] w-full max-w-[294px] mb-[65px] md:px-[0] mx-auto md:w-[214px] md:text-[12px]">
                            SEND TO HYDRA
                            </button>   
                        </div>
                    </form>

                    
                </div>
            </div>

        </section>
    );
}

export default Contact;
