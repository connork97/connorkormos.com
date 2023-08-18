'use client'
import Image from 'next/image'

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

    const renderCarouselItems = peakSyncImageArr.map((image) => {
        return (
            <Carousel.Item key={image} interval={5000}>
                <Image
                    // className='d-block w-100'
                    className={styles.carouselImage}
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

    const [index, setIndex] = useState(3)

    const handleChangeImage = (event) => {
        if (event.target.name === 'forward' && index === peakSyncImageArr.length - 1) setIndex(0)
        else if (event.target.name === 'back' && index === 0) setIndex(peakSyncImageArr.length - 1)
        else if (event.target.name === 'forward') setIndex((prevIndex) => prevIndex + 1)
        else if (event.target.name === 'back') setIndex((prevIndex) => prevIndex - 1)
    }

    return (
        <div ref={projectsRef} className={styles.projectsWrapperDiv}>
            <h1 className={styles.projectsH1}>My Projects!</h1>
            <div className={styles.carouselWrapperDiv}>
                <Carousel className={styles.peakSyncCarousel} variant='dark'>
                    {renderCarouselItems}
                </Carousel>
                <div className={styles.peakSyncDescription}>
                    <h2>Peak Sync</h2>
                    <p>This is a very elaborate and amazing description of my revolutionary software known as &quot;Peak Sync&quot;.</p>
                    <div className={styles.techUsedDiv}>
                        <img 
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
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

Projects.displayName = 'Projects'

export default Projects;