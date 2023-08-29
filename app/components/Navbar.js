'use client'

import styles from './Navbar.module.css'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = ({ scrollToTarget, introRef, aboutRef, skillsRef, projectsRef, contactRef }) => {

    const [isHidden, setIsHidden] = useState(false)
    const [lastScroll, setLastScroll] = useState(100)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollY = window.scrollY
    //         setIsHidden(scrollY > lastScroll)
    //         setLastScroll(scrollY)
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [lastScroll])
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY) {
        setIsHidden(true); // Scrolling down, hide navbar
      } else {
        setIsHidden(false); // Scrolling up, show navbar
      }
  
      setLastScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
    return (
        // <ul className="flex fixed items-center top-10 space-x-20 font-bold text-3xl">
        // <div className={`${styles.navbarDiv} ${isHidden ? styles.hidden : null}`}>
        // <div className={styles.navbarDiv}>
        <div className={`${styles.navbarDiv} ${isHidden ? styles.hiddenNavbar : ''}`}>

            <HiOutlineMenu className={styles.menuIcon} onClick={() => setIsHidden(!isHidden)} />
            <ul className={isHidden ? styles.hiddenNavBarUl : styles.navbarUl}>
                <li onClick={() => scrollToTarget(introRef)}>
                    Home
                </li>
                <li onClick={() => scrollToTarget(aboutRef)}>
                    About
                </li>
                <li onClick={() => scrollToTarget(skillsRef)}>
                    Skills
                </li>
                <li onClick={() => scrollToTarget(projectsRef)}>
                    Projects
                </li>
                <li onClick={() => scrollToTarget(contactRef)}>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Navbar;