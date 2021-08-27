import { motion } from "framer-motion"
import styles from "../styles/Language.module.css"

const prefix = '/portfolio'

export const Language = props => {
    return (
        <motion.div variants={props.variants} className={styles.main}>
            <motion.div>
                <img src={prefix + props.src} width="60px" height="60px" />
            </motion.div>
            <motion.div>
                {props.title}
            </motion.div>
        </motion.div>
    )
}