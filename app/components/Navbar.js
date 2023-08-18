'use client'

import styles from './Navbar.module.css'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = ({ scrollToTarget, introRef, skillsRef, projectsRef }) => {

    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            setIsHidden(scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        // <ul className="flex fixed items-center top-10 space-x-20 font-bold text-3xl">
        // <div className={`${styles.navbarDiv} ${isHidden ? styles.hidden : null}`}>
        <div className={styles.navbarDiv}>
            <HiOutlineMenu className={styles.menuIcon} onClick={() => setIsHidden(!isHidden)} />
            <ul className={isHidden ? styles.hiddenNavBarUl : styles.navbarUl}>
                <li onClick={() => scrollToTarget(introRef)}>
                    Home
                </li>
                <li onClick={() => scrollToTarget(projectsRef)}>
                    Projects
                </li>
                <li onClick={() => scrollToTarget(skillsRef)}>
                    Skills
                </li>
                {/* <li onClick={() => scrollToTarget(introRef)}>
                    Contact
                </li> */}
            </ul>
        </div>
    )
}

export default Navbar;