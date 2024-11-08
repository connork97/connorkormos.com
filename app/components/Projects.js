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

    const iogearProductPagesTechUsedArr = [
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", alt: "HTML"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "Bootstrap"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg", alt: "JQuery"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL"},
    ];

    const iogearCes2024TechUsedArr = [
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", alt: "HTML"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg", alt: "CSS"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", alt: "Bootstrap"},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg", alt: "JQuery"},
        {source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', alt: 'PHP'},
        {source: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", alt: "MySQL"},
    ];

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

        // ! IOGEAR PRODUCT PAGES

        <div ref={projectsRef} className={styles.projectsWrapperDiv}>
            <h1 className={styles.projectsH1}>Projects</h1>
            <div className={styles.carouselWrapperDiv}>
                <div className={styles.codifyDescriptionDiv}>
                <h2 className={styles.codifyLink}>Iogear Product Pages</h2>
                    <br></br>
                     {isMobile && 
                        <div className={styles.projectVideoWrapperDiv}>
                            <video
                                className={`${styles.iogearProductPageVideo} rounded-4`}
                                height="440"
                                width="780"
                                controls={false}
                                autoPlay
                                loop
                                muted
                                preload="auto"
                                src='/iogear/iogear_product_pages.mp4'
                            >
                                {/* <source src="/iogear/your-video-file.mp4" type="video/mp4" /> */}
                                Your browser does not support the video tag.
                            </video>
                            {/* <iframe
                                className={`${styles.iogearProductPageVideo} rounded-4`}
                                height="440"
                                width="780"
                                src="https://www.youtube.com/embed/Y2mbtqOSgXk?si=4eqHnyrl1Xz5d2w3&controls=0&autoplay=1&loop=1&playlist=Y2mbtqOSgXk&mute=1"
                                autoPlay={true}
                                title="YouTube video player"
                                // frameBorder="0"
                                allow="accelerometer;
                                    autoplay;
                                    fullscreen;
                                    clipboard-write;
                                    encrypted-media;
                                    gyroscope;
                                    picture-in-picture;
                                    web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                // allowfullscreen
                            >
                            </iframe> */}
                        </div>
                    }
                    <p className={styles.codifyDescription}>A few examples of projects I have worked on during my time with <a href='https://support.iogear.com/' target='blank' style={{color: 'black'}}>Iogear</a>.
                        These particular products are the <Link className={styles.iogearProductLink} href='https://support.iogear.com/product/ghdsw8k4' target='_blank'>GHDSW8K4</Link>, <Link className={styles.iogearProductLink} href='https://support.iogear.com/product/ghdsw4k3' target='_blank'>GHDSW4K3</Link>, and <Link className={styles.iogearProductLink} href='https://support.iogear.com/product/gcs1602cc' target='_blank'>GCS1602CC</Link>.
                    </p>
                    <p className={styles.codifyDescription}>
                        The front-end was built using JQuery and HTML, with the styling both using basic CSS as well as Bootstrap.
                        Details of the products were stored in a MySQL database and accessed through it.
                    </p>
                    <p className={styles.codifyDescription}>
                        I worked with the design team to bring their vision of the product page to life, while maintaining a layout consistent with the website as a whole.
                    </p>
                    {/* Built out with React.js, React-Bootstrap, and CSS, users can search for any song, artist, album, or playlist available in Spotify&apos;s database. */}
                    {/* Additionally, users can play previews of available songs, and if they have their own Spotify profile logged in can click the logo to be directly linked to their desired location to save it for later. */}
                    <br></br>
                    <div className={styles.peakSyncTechUsedDiv}>
                        {renderTechUsed(iogearProductPagesTechUsedArr)}
                    </div>
                </div>
                {!isMobile &&
                    <div className={styles.projectVideoWrapperDiv}>
                        <video
                            className={`${styles.iogearProductPageVideo} rounded-4`}
                            height="440"
                            width="780"
                            controls={false}
                            autoPlay
                            loop
                            muted
                            preload="auto"
                            src='/iogear/iogear_product_pages.mp4'
                        >
                            {/* <source src="/iogear/your-video-file.mp4" type="video/mp4" /> */}
                            Your browser does not support the video tag.
                        </video>
                        {/* <iframe
                            className={`${styles.iogearProductPageVideo} rounded-4`}
                            height="440"
                            width="780"
                            src="https://www.youtube.com/embed/Y2mbtqOSgXk?si=4eqHnyrl1Xz5d2w3&controls=0&autoplay=1&loop=1&playlist=Y2mbtqOSgXk&mute=1"
                            autoPlay={true}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer;
                                autoplay;
                                fullscreen;
                                clipboard-write;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture;
                                web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            // allowfullscreen
                        >
                        </iframe> */}
                    </div>
                }
                
                {/* {!isMobile &&
                    <Carousel className={styles.projectCarousel} variant='dark'>
                        {renderShadleCarouselItems}
                    </Carousel>
                } */}
            </div>

            {/* // ! IOGEAR CES 2024 */}

            <div className={styles.carouselWrapperDiv}>
                {isMobile && <h2 className={styles.peakSyncLink}> <Link href='https://support.iogear.com/ces2024' target='_blank' className={styles.peakSyncLink}>Iogear CES 2024 Landing Page</Link></h2>}
                <video
                    className={`${styles.iogearProductPageVideo} rounded-4`}
                    height="440"
                    width="780"
                    controls={false}
                    autoPlay
                    loop
                    muted
                    preload="auto"
                    src='/iogear/iogear_ces_2024.mp4'
                >
                    {/* <source src="/iogear/your-video-file.mp4" type="video/mp4" /> */}
                    Your browser does not support the video tag.
                </video>
                {/* <iframe 
                    className={`${styles.iogearProductPageVideo} rounded-4`}
                    width="780"
                    height="440"
                    src="https://www.youtube.com/embed/qM6FeC_LKWc?si=f0SdyXVPem4_Go7S&controls=0&autoplay=1&loop=1&playlist=qM6FeC_LKWc&mute=1"
                    title="YouTube video player"
                    // frameBorder="0"
                    allow=
                        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                        // allowfullscreen
                    >    
                    </iframe> */}
                <div className={styles.peakSyncDescriptionDiv}>
                {!isMobile && <h2 className={styles.peakSyncLink}> <Link href='https://support.iogear.com/ces2024' target='_blank' className={styles.peakSyncLink}>Iogear CES 2024 Landing Page</Link></h2>}
                    <br></br>
                    <p className={styles.peakSyncDescription}>With Iogear&apos;s participation in <Link href='https://www.ces.tech/' target='_blank' className={styles.iogearProductLink}>CES</Link> 2024, I created a landing page for Iogear customers.  Here they can learn about various products and offerings, as well as RSVP directly to Iogear.</p>
                    <p className={styles.peakSyncDescription}>With a design from the marketing team, I built the front-end with HTML, CSS, Bootstrap, and JQuery.
                    For the back-end I used PHP and MySQL to fetch product data, store RSVP data, and send confirmation emails to customers.</p>
                    <br></br>
                    <div className={styles.peakSyncTechUsedDiv}>
                        {renderTechUsed(iogearCes2024TechUsedArr.slice(0, 4))}
                        <br></br>
                        {renderTechUsed(iogearCes2024TechUsedArr.slice(4, 6))}
                    </div>
                </div>
            </div>


            {/* //! Shadle */}

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
                    You have six tried to guess the RGB value of the color on the screen.  Don&apos;t worry!  You&apos;ll get hints along the way to help you out.
                    </p>
                    <p className={styles.codifyDescription}>
                    Front-end built with a mobile first approach using React and CSS, back-end with Python, Flask, and PostgreSQL.  The static site is hosted on Google Firebase, web service on Render, and PostgreSQL database on AWS.
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
                    <p className={styles.peakSyncDescription}>Database management system, tailored to the fitness industry.</p>
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