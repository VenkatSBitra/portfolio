import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

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

export const Title = props => {
    return (
        <motion.div initial='initial' animate='animate' className={styles.children}>
            <motion.div variants={stagger} className={styles.title}>
                <motion.div variants={fadeInDown}>
                    <p className={styles.name}>Venkat Suprabath Bitra</p>
                </motion.div>
                <motion.div variants={fadeInUp}>
                    <p className={styles.sub}>Student, IIITB</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}