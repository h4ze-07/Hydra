import { easeInOut, motion } from "framer-motion";

const HeroLinkItem = ({link}) => {
    return (
        <motion.div className={link.styles.container}
        initial={{y: '100%', opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{
            delay: 0.25 * link.id,
            duration: 0.7,
            ease: easeInOut
        }}
        >
            <img src={link.img} alt="link image" />
            <div>
                <h3 className={link.styles.title}>{link.title}</h3>
                <p className={link.styles.subtitle}>{link.subtitle}</p>
            </div>
        </motion.div>
    );
}

export default HeroLinkItem;
