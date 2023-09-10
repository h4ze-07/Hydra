import React from 'react';
import { headerVars } from '../constants';

import { easeInOut, motion } from 'framer-motion';

const Navbar = ({containerStyles, linkClick}) => {
    return (
        <motion.div className={containerStyles.container}
        initial={{scaleY: 0, opacity: 0}}
        animate={{scaleY: 1, opacity: 1 }}
        transition={{
            duration: 0.6,
            ease: easeInOut,
        }}
        >

            <div className={containerStyles.links}
            >
                {headerVars.headerLinks.map((link) => (
                    <motion.a key={link.id} href={link.href} className="text-[12px] text-white font-bold hover:text-[#cd86f6ed] hover:underline underline-offset-4" onClick={linkClick}
                    initial={{y: '-100%', opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{
                        duration: 0.5,
                        delay: 0.35 * link.id
                    }}
                    >{link.title}</motion.a>
                ))}

            </div>

            <div className={containerStyles.btns}>
                {headerVars.headerBtns.map((btn) => (
                    <motion.button key={btn.title} className={btn.btnStyles}
                    initial={{x: btn.motion, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{
                        delay: 0.9,
                        duration: 0.5
                    }}
                    >
                        <p className={btn.pStyles}>
                            {btn.title}
                        </p>
                    </motion.button>
                ))}
            </div>
        </motion.div>
    );
}

export default Navbar;
