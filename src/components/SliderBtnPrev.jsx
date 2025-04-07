import { motion } from "framer-motion";

const SliderBtnPrev = ({ func }) => {
    return (
        <motion.button className='absolute left-[3%] z-[10] w-[62px] h-[62px] rounded-full border-[12px] border-[#0e0e0e52] overflow-hidden'
            onClick={func}
            initial={{ opacity: 0, x: '-100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <p className='mobileSlidersBtn w-full h-full flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#433D60" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </p>
        </motion.button>
    );
}

export default SliderBtnPrev;
