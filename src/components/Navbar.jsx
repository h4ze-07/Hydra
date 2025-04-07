import React from 'react';
import { headerVars } from '../constants';

import { motion } from 'framer-motion';

const Navbar = ({ containerStyles, linkClick }) => {
    return (
        <div className={containerStyles.container}
        >

            <div className={containerStyles.links}
            >
                {headerVars.headerLinks.map((link) => (
                    <motion.a key={link.id} href={link.href} className="text-[12px] text-white font-bold hover:text-[#cd86f6ed] underline-offset-4" onClick={linkClick}
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.15 * link.id
                        }}
                    >{link.title}</motion.a>
                ))}

            </div>

            <div className={containerStyles.btns}>
                {headerVars.headerBtns.map((btn) => (
                    <motion.button key={btn.title} className={btn.btnStyles}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.5
                        }}
                    >
                        <p className={btn.pStyles}>
                            {btn.title}
                        </p>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
