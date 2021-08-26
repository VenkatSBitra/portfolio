import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'
import { name, subHeader } from "./data"

const fadeInDown = {
    initial: {
        y: -60,
        opacity: 0,
        scale: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
}

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        scale: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.4
        }
    }
}

export const Title = () => {
    return (
        <motion.div initial='initial' animate='animate' className={styles.title}>
            <motion.div variants={stagger} className={styles.title_content}>
                <motion.div variants={fadeInDown}>
                    <p className={styles.name}>{name}</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className={styles.sub}>{subHeader}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}