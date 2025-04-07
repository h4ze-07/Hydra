import { footerMenuLine } from "../assets/icons";

import { motion } from "framer-motion";

const FooterMenuLine = () => {
    return (
        <motion.img src={footerMenuLine} alt="line" className="hidden lg:block"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
        />
    );
}

export default FooterMenuLine;
