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
                <motion.div className={styles["card-body-content"]}>
                    <p>
                        {props.body}
                    </p>
                    {console.log(props.linkText)}
                    {props.linkText &&
                        <p>
                            <a href={props.link} rel="noreferrer" target="_blank">{props.linkText}</a>
                        </p>
                    }
                </motion.div>
                <motion.div className={styles["card-image"]}>
                    <img src={'/portfolio' + props.image} alt={"for " + props.title} />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}