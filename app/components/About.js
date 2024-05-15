import styles from './About.module.css'

import React, { forwardRef } from 'react'

const About = forwardRef(({ aboutRef }) => {
    return (
        <div className={styles.aboutWrapperDiv} ref={aboutRef}>
            {/* <h1 className={styles.helloH1}>Hey there,</h1>
            <br></br><br></br>
            <p className={styles.aboutP}>
                I&apos;m Connor Kormos, a full-stack web developer based in the heart of Reno, Nevada.
                From my earliest encounter with programming at the age of 15, running video game servers in my free time, I have always been fascinated by coding.
                Not only did this act as my first source of income, but as an introduction to the industry, leading me to where I am today.
            </p>
            <br></br>
            <p className={styles.aboutP}>
                Years after I closed down my servers, in 2020 my journey led me to a bachelor&apos;s degree in history from UCLA.
                While rather unconventional, this unique blend of history and technology have allowed me to hone in my critical thinking and organizational skills, analyze trends, and the ever-evolving landscape of the tech world. 
            </p>
            <br></br>
            <p className={styles.aboutP}>
                After a stint in the outdoor industry where I learned many crucial soft skills including strong communication, leadership, and how to be a dependable member of a team, I realized that coding was my true calling. 
                So in 2022 I took the plunge, diving headfirst into independent study of the core of web development: HTML, CSS, and JavaScript. 
                This self-study paved the way for my enrollment in the Flatiron School&apos;s Software Engineering program, where my skills truly took flight.
                Beyond mastering languages and frameworks, the program taught me how to think like a programmer and how to learn effectively—a skillset I value as much as the technical knowledge I&apos;ve gained. 
                In just a few intense months, I&apos;ve grown from a determined learner to a burgeoning web developer, eagerly seeking opportunities to showcase my skills and make meaningful contributions in a professional setting.
            </p>
            <br></br>
            <p className={styles.aboutP}>
                But my journey isn&apos;t just about coding. It&apos;s about continuous evolution. I thrive on self-improvement, staying up to date with industry trends, and discovering innovative solutions to complex challenges. 
                As I navigate this field, I&apos;m excited to leverage both my technical expertise and soft skills to craft exceptional web experiences.
            </p>
            <br></br>
            <p className={styles.aboutP}>
                Feel free to explore my portfolio and see how my passion, dedication, and growth have translated into real results. 
                Whether you&apos;re interested in discussing potential collaborations, sharing insights, or simply connecting, I&apos;m just a message away.
            </p>
            <br></br><br></br>
            <p className={styles.regardsP}>Regards,</p>
            <br></br>
            <p className={styles.regardsP}>Connor Kormos</p> */}
        </div>
    )
})

About.displayName = 'About'

export default About