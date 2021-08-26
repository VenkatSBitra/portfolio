import { Title } from '../components/Title'
import { About } from '../components/About'
import { Languages } from '../components/Languages'
import React from 'react'
import { Projects } from '../components/Projects'

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
                <Projects title="Hobby Projects" data={hobbyData} />
            </section>
            <section>
                <Projects title="Work Projects" data={workData} />
            </section>
            <section>
                <footer>
                    Made using Next.js and Framer Motion
                </footer>
            </section>
        </>
    )
}
