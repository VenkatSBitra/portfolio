import { motion } from "framer-motion"
import Image from "next/image"
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
    const hobbyData = [
        {
            title: 'Tic Tac Toe',
            body: 'A Tic-Tac-Toe game made for two player, random computer based or a Min-Max player.'
        },
        {
            title: 'Title',
            body: 'Body'
        },
        {
            title: 'Title2',
            body: 'Body'
        },
        {
            title: 'Title3',
            body: 'Body'
        }
    ]
    const [id, setID] = React.useState(0)
    const [dir, setDir] = React.useState(false)
    return (
        <motion.div className={styles.carousel}>
            <motion.div 
                className={`${styles["carousel__button"]} ${styles["carousel__button--left"]}`}
                onClick={() => {
                    setID((id - 1 + hobbyData.length) % hobbyData.length)
                    setDir(true)
                }}
                variants={btnAnimation}
                initial="rest"
                whileHover="hover"
            >
                <Image src="/left.svg" width="100%" height="100%" />
            </motion.div>
            <motion.div className={styles["carousel__track-container"]}>
                <Card title={hobbyData[id].title} body={hobbyData[id].body} key={id} dir={dir} />
            </motion.div>
            <motion.div 
                className={`${styles["carousel__button"]} ${styles["carousel__button--right"]}`}
                onClick={() => {
                    setID((id + 1) % hobbyData.length)
                    setDir(false)
                }}
                variants={btnAnimation}
                initial="rest"
                whileHover="hover"
            >
                <Image src="/right.svg" width="100%" height="100%" />
            </motion.div>
        </motion.div>
    )
}