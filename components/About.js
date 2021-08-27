import { motion, useAnimation } from "framer-motion"
import styles from '../styles/Home.module.css'
import { useEffect } from "react";
import { aboutMeText } from "./data";
import { useInView } from "react-intersection-observer";

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

export const About = () => {
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
            <motion.div variants={stagger} className={`${styles.about_lang_box} ${styles.about_box}`}>
                <motion.div className={styles.about__right} variants={fadeInLeft}>
                    <p className={styles.sub}>About</p>
                </motion.div>
                <motion.div className={styles.vline} ref={ref} />
                <motion.div className={styles.about__left} variants={fadeInRight}>
                    {aboutMeText.map((e, i) => (
                        <p key={i}>{e}</p>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}