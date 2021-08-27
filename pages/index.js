import { Title } from '../components/Title'
import { About } from '../components/About'
import { Languages } from '../components/Languages'
import React from 'react'
import { Projects } from '../components/Projects'
import styles from '../styles/Home.module.css'
import { hobbyData, workData } from "../components/data";

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
                <Projects title="Scientific Projects" data={workData} />
            </section>
            <section>
                <Projects title="Hobby Projects" data={hobbyData} />
            </section>
            <section>
                <div className={styles.footer}>
                    Made using Next.js and Framer Motion
                </div>
            </section>
        </>
    )
}
