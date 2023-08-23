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

    const codifyImageArr = [
        'CodifyHomePage.jpg',
        'CodifySearchPage.jpg',
        'CodifyArtistPage.jpg',
        'CodifyAlbumPage.jpg',
        'CodifyPlaylistPage.jpg'
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

    const codifyTechUsedArr = [
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React.js"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "React-Bootstrap"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS"},
        {source: "/images/spotify.svg", alt: "Spotify API"}
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

    const renderCodifyCarouselItems = codifyImageArr.map((image) => {
        return (
            <Carousel.Item key={image} interval={6000}>
                <Image
                    // className='d-block w-100'
                    className={`${styles.carouselImage} rounded-4`}
                    src={`/codify/${image}`}
                    alt={image}
                    height='360'
                    width='640'
                    quality={100}
                    key={image}
                />
            </Carousel.Item>
        )
    })

    const renderTechUsed = (array) => {
        return array.map((tech) => {
            return <img src={tech.source} alt={tech.alt} className={styles.techUsed} key={tech.source} />
        })
    }

    return (
        <div ref={projectsRef} className={styles.projectsWrapperDiv}>
            <h1 className={styles.projectsH1}>Projects</h1>
            <div className={styles.carouselWrapperDiv}>
                <Carousel className={styles.projectCarousel} variant='dark'>
                    {renderPeakSyncCarouselItems}
                </Carousel>
                <div className={styles.peakSyncDescriptionDiv}>
                    <h2> <Link href='https://peaksync.onrender.com/' target='_blank' className={styles.link}>Peak Sync</Link></h2>
                    <br></br>
                    <p className={styles.projectDescription}>Tailored to the fitness industry, this software is used to create and manage a database of users, events, offerings, and more.</p>
                    <p className={styles.projectDescription}>Front-end is built out with React.js, React-Bootstrap, and CSS with a heavy focus on ease of use for both the business and its customers.
                    Back-end built out with Python, Flask, SQLAlchemy, and PostgreSQL to properly manage large relational database with just a few clicks by users.</p>
                    <br></br>
                    <div className={styles.peakSyncTechUsedDiv}>
                        {renderTechUsed(peakSyncTechUsedArr.slice(0, 4))}
                        <br></br>
                        {renderTechUsed(peakSyncTechUsedArr.slice(4, 8))}
                    </div>
                </div>
            </div>
            <div className={styles.carouselWrapperDiv}>
                <div className={styles.codifyDescriptionDiv}>
                <h2 style={{textAlign: 'right', marginRight: '25%'}}> <Link href='https://codify-ea413.web.app/' target='_blank' className={styles.link}>Codify</Link></h2>
                    <br></br>
                    <p className={styles.codifyDescription}>React application integrating Spotify`&apos;s public API for music discovery and personalization.</p>
                    <p className={styles.codifyDescription}>
                    Built out with React.js, React-Bootstrap, and CSS, users can search for any song, artist, album, or playlist available in Spotify`&apos;s database.
                    Additionally, users can play previews of available songs, and if they have their own Spotify profile logged in can click the logo to be directly linked to their desired location to save it for later.
                    </p>
                    <br></br>
                    <div className={styles.codifyTechUsedDiv}>
                        {renderTechUsed(codifyTechUsedArr)}
                    </div>
                </div>
                <Carousel className={styles.projectCarousel} variant='dark'>
                    {renderCodifyCarouselItems}
                </Carousel>
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