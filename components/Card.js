import { motion } from "framer-motion"
import styles from "../styles/Card.module.css"

export const Card = props => {
    return (
        <motion.div 
            className={styles["card-main"]}
            initial={{ opacity: 0, x: props.dir ? -500 : 500 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className={styles["card-title"]}>
                {props.title}
            </motion.div>
            <motion.div className={styles["card-body"]}>
                <p>
                    {props.body}
                </p>
            </motion.div>
            <motion.div className={styles["card-image"]}>
                {props.image}
            </motion.div>
        </motion.div>
    )
}