'use client'

import styles from './Navbar.module.css'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'

const Navbar = () => {

    const [isHidden, setIsHidden] = useState(false)

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
        <div className={`${styles.navbarDiv} ${isHidden ? styles.hidden : null}`}>
            <ul className={styles.navbarUl}>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/projects'>Projects</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;