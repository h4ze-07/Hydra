import { motion } from 'framer-motion';

const WhyBuildCard = ({data}) => {
    return (
        <motion.div className='flex w-fit flex-col whyBuildCard rounded-[40px] items-center
        pt-[23px] pr-[35px] pb-[40px] pl-[25px]'
        initial={{x: '-100%', opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false}}
        transition={{delay: 0.25 * data.id, duration: 0.5}}
        >

            <div className='max-w-[191px] h-[191px] rounded-full overflow-hidden border-[14px] box-content border-[#0e0e0e52] mb-[21px]'>
                <img src={data.img} alt={data.label} className='object-cover w-full h-full' />
            </div>
            
            <h2 className='text-[24px] font-bold text-white w-fit border-b-[1px] border-[#c0b7e854] pb-[17.5px] mb-[21.5px]'>
                {data.label}
            </h2>

            <p className='max-w-[250px] text-[#FFF] text-[12px] mb-[35px]'>
                {data.text}
            </p>

            <button className=' block w-fit text-[#343045] text-[12px] py-[17px] px-[39px] rounded-[40px] font-bold'>
                {data.btnText}
            </button>

        </motion.div>
    );
}

export default WhyBuildCard;
