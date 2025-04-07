import { motion } from "framer-motion";


const SectionHead = ({ data }) => {
    return (
        <div className='flex justify-between gap-[50px]'>


            <div className='w-fit flex flex-col'>
                <h2 className='font-bold text-[36px] text-white'>{data.title}</h2>

                <div className={data.arrowGapStyles}>

                    <h3 className=' font-light text-[36px] whitespace-nowrap text-white'>{data.subtitle}</h3>

                    <svg width="201" height="38" viewBox="0 0 201 38" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-[130px] xl:w-[201px]'>
                        <path d="M198.833 19L157.167 19M198.833 19L182.167 35.6666M198.833 19L182.167 2.33331" stroke="#C0B7E8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M157.5 19H0" stroke="#C0B7E8" strokeWidth="3" />
                    </svg>

                </div>
            </div>

            <motion.p className='max-w-[650px] text-white'
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                {data.text}
            </motion.p>
        </div>
    );
}

export default SectionHead;
