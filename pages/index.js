import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'
import { Carousel } from '../components/Carousel'
import { Title } from '../components/Title'
import { About } from '../components/About'
import { Languages } from '../components/Languages'
import React from 'react'

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
            staggerChildren: 0.2
        }
    }
}

export default function Home() {
    return (
        <>
            <section>
                <Title />
            </section>
            <section>
                <About />
            </section>
            <section>
                <Languages />
            </section>
            <section>
                <div className={styles["hobby-proj-region"]}>
                    <div className={styles["hobby-proj-title"]}>
                        Hobby Projects
                    </div>
                    <Carousel />
                </div>
            </section>            
        </>
    )
}
