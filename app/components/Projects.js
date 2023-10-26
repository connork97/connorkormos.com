'use client'
import Image from 'next/image'

import Link from 'next/link'
import React, { useState, forwardRef, useEffect } from 'react'

import styles from './Projects.module.css'

import Carousel from 'react-bootstrap/Carousel'
import useMediaQuery from '../utils/useMediaQuery'

const Projects = forwardRef(({ projectsRef }) => {

    const isMobile = useMediaQuery('(max-width: 768px)')

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

    const shadleImageArr = [
        'ShadleHomepage.jpg',
        'ShadleGuesses.jpg',
        'ShadleInstructionsModal.jpg',
        'ShadleWinModal.jpg',
        'ShadleLossModal.jpg',
        'ShadlePersonalStats.jpg',
        'ShadleSiteStats.jpg'
    ]

    const shadleTechUsedArr = [
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React.js"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", alt: "Python"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg", alt: "Flask"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg", alt: "SQLAlchemy"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg", alt: "PostgreSQL"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS"}
    ]

    const peakSyncTechUsedArr = [
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg", alt: "React.js"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "React-Bootstrap"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg", alt: "Python"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg", alt: "Flask"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original-wordmark.svg", alt: "SQLAlchemy"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg", alt: "SQLite"},
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

    const renderShadleCarouselItems = shadleImageArr.map((image) => {
        return (
            <Carousel.Item key={image} interval={6000}>
                <Image
                    // className='d-block w-100'
                    className={`${styles.carouselImage} rounded-4`}
                    src={`/shadle/${image}`}
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
                <div className={styles.codifyDescriptionDiv}>
                <h2 className={styles.codifyLink}> <Link href='https://shadle.web.app/' target='_blank' className={styles.codifyLink}>Shadle</Link></h2>
                    <br></br>
                    {isMobile &&
                        <Carousel className={styles.projectCarousel} variant='dark'>
                            {renderShadleCarouselItems}
                        </Carousel>
                    }
                    <p className={styles.codifyDescription}><a href='https://www.nytimes.com/games/wordle/index.html' target='blank' style={{color: 'black'}}>Wordle</a> inspired RGB color guessing game.</p>
                    <p className={styles.codifyDescription}>
                    You have six tried to guess the RGB value of the color on the screen.  Don't worry!  You'll get hints along the way to help you out.
                    </p>
                    <p className={styles.codifyDescription}>
                    Front-end built with a mobile first approach using React and CSS, back-end with Python, Flask, and PostgreSQL.  The static site is hosted on Google's Firebase, web service on Render, and PostgreSQL database on AWS.
                    </p>
                    {/* Built out with React.js, React-Bootstrap, and CSS, users can search for any song, artist, album, or playlist available in Spotify&apos;s database. */}
                    {/* Additionally, users can play previews of available songs, and if they have their own Spotify profile logged in can click the logo to be directly linked to their desired location to save it for later. */}
                    <br></br>
                    <div className={styles.peakSyncTechUsedDiv}>
                        {renderTechUsed(shadleTechUsedArr)}
                    </div>
                </div>
                {!isMobile &&
                    <Carousel className={styles.projectCarousel} variant='dark'>
                        {renderShadleCarouselItems}
                    </Carousel>
                }
            </div>
            <div className={styles.carouselWrapperDiv}>
                {isMobile && <h2 className={styles.peakSyncLink}> <Link href='https://peaksync.onrender.com/' target='_blank' className={styles.peakSyncLink}>Peak Sync</Link></h2>}
                <Carousel className={styles.projectCarousel} variant='dark'>
                    {renderPeakSyncCarouselItems}
                </Carousel>
                <div className={styles.peakSyncDescriptionDiv}>
                {!isMobile && <h2 className={styles.peakSyncLink}> <Link href='https://peaksync.onrender.com/' target='_blank' className={styles.peakSyncLink}>Peak Sync</Link></h2>}
                    <br></br>
                    <p className={styles.peakSyncDescription}>Tailored to the fitness industry, this software is used to create and manage a database of users, events, offerings, and more.</p>
                    <p className={styles.peakSyncDescription}>Front-end is built out with React.js, React-Bootstrap, and CSS with a heavy focus on ease of use for both the business and its customers.
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
                <h2 className={styles.codifyLink}> <Link href='https://codify-ea413.web.app/' target='_blank' className={styles.codifyLink}>Codify</Link></h2>
                    <br></br>
                    {isMobile &&
                        <Carousel className={styles.projectCarousel} variant='dark'>
                            {renderCodifyCarouselItems}
                        </Carousel>
                    }
                    <p className={styles.codifyDescription}>React application integrating Spotify&apos;s public API for music discovery and personalization.</p>
                    <p className={styles.codifyDescription}>
                    Built out with React.js, React-Bootstrap, and CSS, users can search for any song, artist, album, or playlist available in Spotify&apos;s database.
                    Additionally, users can play previews of available songs, and if they have their own Spotify profile logged in can click the logo to be directly linked to their desired location to save it for later.
                    </p>
                    <br></br>
                    <div className={styles.codifyTechUsedDiv}>
                        {renderTechUsed(codifyTechUsedArr)}
                    </div>
                </div>
                {!isMobile &&
                    <Carousel className={styles.projectCarousel} variant='dark'>
                        {renderCodifyCarouselItems}
                    </Carousel>
                }
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