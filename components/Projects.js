import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Carousel } from './Carousel';
import styles from '../styles/Home.module.css';

export const Projects = props => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} className={styles["hobby-proj-region"]}>
            <div className={styles["hobby-proj-title"]}>
                {props.title}
            </div>
            <Carousel data={props.data} />
        </motion.div>
    )
}