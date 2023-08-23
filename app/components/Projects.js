'use client'
import Image from 'next/image'

import Link from 'next/link'
import React, { useState, forwardRef } from 'react'

import styles from './Projects.module.css'

import Carousel from 'react-bootstrap/Carousel'

const Projects = forwardRef(({ projectsRef }) => {

    const peakSyncImageArr = [
        'AdminDashboardPreview.jpg',
        'AdminUserProfileEditPreview.jpg',
        'ClassesPage.jpg',
        'MembershipPage.jpg',
        'PeakSyncCalendar.jpg',
        'PeakSyncCalendarModal.jpg',
        'PeakSyncLogin.jpg',
        'PeakSyncSignUp.jpg',
        'UserDatabasePreview.jpg'
    ]

    const peakSyncTechUsedArr = [
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React.js"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "React-Bootstrap"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", alt: "Python"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg", alt: "Flask"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg", alt: "SQLite"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg", alt: "SQLAlchemy"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL"}
    ]

    const renderPeakSyncCarouselItems = peakSyncImageArr.map((image) => {
        return (
            <Carousel.Item key={image} interval={5000}>
                <Image
                    // className='d-block w-100'
                    className={`${styles.carouselImage} rounded-4`}
                    src={`/peaksync/${image}`}
                    alt={image}
                    height='360'
                    width='640'
                    quality={100}
                    key={image}
                />
            </Carousel.Item>
        )
    })

    const renderPeakSyncTechUsed = (array) => {
        return array.map((tech) => {
            return <img src={tech.source} alt={tech.alt} className={styles.techUsed} key={tech.source} />
        })
    }

    return (
        <div ref={projectsRef} className={styles.projectsWrapperDiv}>
            <h1 className={styles.projectsH1}>Projects</h1>
            <div className={styles.carouselWrapperDiv}>
                <Carousel className={styles.peakSyncCarousel} variant='dark'>
                    {renderPeakSyncCarouselItems}
                </Carousel>
                <div className={styles.peakSyncDescriptionDiv}>
                    <h2> <Link href='https://peaksync.onrender.com/' target='_blank' className={styles.link}>Peak Sync</Link></h2>
                    <br></br>
                    <p className={styles.peakSyncDescription}>Tailored to the fitness industry, this software is used to create and manage a database of users, events, offerings, and more.</p>
                    <p className={styles.peakSyncDescription}>Front-end is built out with React.js, React-Bootstrap, and CSS with a heavy focus on ease of use for both the business and its customers.
                    Back-end built out with Python, Flask, SQLAlchemy, and PostgreSQL to properly manage large relational database with just a few clicks by users.</p>
                    <br></br>
                    <div className={styles.techUsedDiv}>
                        {renderPeakSyncTechUsed(peakSyncTechUsedArr.slice(0, 4))}
                        <br></br>
                        {renderPeakSyncTechUsed(peakSyncTechUsedArr.slice(4, 8))}
                    </div>
                </div>
            </div>
        </div>
    )
})

Projects.displayName = 'Projects'

export default Projects;



{/* <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
    className={styles.techUsed}
    alt="err"
/>
<img 
src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
className={styles.techUsed}
alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" 
    className={styles.techUsed}    
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg"
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/>
<img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain-wordmark.svg" 
    className={styles.techUsed}
    alt="err"
/> */}