import { motion, useAnimation } from "framer-motion"
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { languages, language_icons } from "./data";
import { useInView } from "react-intersection-observer";
import { Language } from "./Language";

const fadeInLeft = {
    hidden: {
        x: 450,
        opacity: 0,
        scale: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
}

const fadeInRight = {
    hidden: {
        x: -450,
        opacity: 0,
        scale: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
}

const stagger = {
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

export const Languages = props => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } 
    }, [controls, inView]);

    return (
        <motion.div 
            initial='hidden' 
            animate={controls}
            className={styles.children}
        >
            <motion.div variants={stagger} className={styles.about_lang_box}>
                <motion.div className={styles.lang__left} variants={fadeInRight}>
                    <p className={styles.name}>Languages and Frameworks</p>
                </motion.div>
                <motion.div className={styles.vline} ref={ref} />
                <motion.div className={styles.lang__right} variants={fadeInLeft}>
                    {languages &&
                        <motion.div className={styles.lang__right__ele} variants={stagger}>
                            {languages.map((e, i) => (
                                <Language variants={fadeInLeft} src={"/languages/" + language_icons[i] + ".svg"} title={e} key={"lang_" + e} />
                            ))}
                        </motion.div>
                    }
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

/*
<motion.li variants={fadeInLeft} key={"lang_" + i}>
                                    {e}
                                </motion.li>
*/