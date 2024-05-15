'use client'

import styles from './Navbar.module.css'

import Link from 'next/link';
import React, { useState, useEffect } from 'react'

import useMediaQuery from '../utils/useMediaQuery';

import { HiOutlineMenu } from 'react-icons/hi'

const Navbar = ({ scrollToTarget, introRef, aboutRef, skillsRef, projectsRef, contactRef }) => {

    const isMobile = useMediaQuery('(max-width: 768px)')

    const [isHidden, setIsHidden] = useState(true)

    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const scrollThreshold = window.innerHeight * 0.02;
      
        if (currentScrollY > lastScrollY + scrollThreshold) {
          setIsHidden(true); // Scrolling down, hide navbar
        } else if (currentScrollY < lastScrollY - scrollThreshold) {
          setIsHidden(false); // Scrolling up, show navbar
        }
      
        setLastScrollY(currentScrollY);
      };
  
    useEffect(() => {
        setIsHidden(!isMobile)
    }, [isMobile])

    useEffect(() => {
        if (isMobile) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isMobile, lastScrollY]);
    return (
        <div className={`${styles.navbarDiv} ${isHidden ? styles.hiddenNavbar : ''}`}>
            <HiOutlineMenu className={styles.menuIcon} onClick={() => setIsHidden(!isHidden)} />
            <ul className={isHidden ? styles.hiddenNavBarUl : styles.navbarUl}>
                <li onClick={() => scrollToTarget(introRef)}>
                    Home
                </li>
                {/* <li onClick={() => scrollToTarget(aboutRef)}>
                    About
                </li> */}
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