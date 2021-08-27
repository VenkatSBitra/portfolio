import { motion } from "framer-motion"
import styles from '../styles/Carousel.module.css'
import { Card } from "./Card"
import React from "react"

const btnAnimation = {
    rest: {
        y: "-50%"
    },
    hover: {
        scale: 1.2,
        y: "-50%"
    }
}

export const Carousel = props => {
    const [id, setID] = React.useState(0)
    const [dir, setDir] = React.useState(false)
    return (
        <motion.div className={styles.carousel}>
            <motion.div 
                className={`${styles["carousel__button"]} ${styles["carousel__button--left"]}`}
                onClick={() => {
                    setID((id - 1 + props.data.length) % props.data.length)
                    setDir(true)
                }}
                variants={btnAnimation}
                initial="rest"
                whileHover="hover"
            >
                <img src="/left.svg" width="100%" height="100%" />
            </motion.div>
            <motion.div className={styles["carousel__track-container"]}>
                <Card title={props.data[id].title} body={props.data[id].body} link={props.data[id].link} linkText={props.data[id].linkText} key={id} dir={dir} />
            </motion.div>
            <motion.div 
                className={`${styles["carousel__button"]} ${styles["carousel__button--right"]}`}
                onClick={() => {
                    setID((id + 1) % props.data.length)
                    setDir(false)
                }}
                variants={btnAnimation}
                initial="rest"
                whileHover="hover"
            >
                <img src="/right.svg" width="100%" height="100%" />
            </motion.div>
        </motion.div>
    )
}