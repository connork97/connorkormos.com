'use client'

import React, { useState, useEffect } from 'react';

import styles from './HomePage.module.css';

const HomePage = () => {

    const introText = ["", "a Full Stack Web Developer.", "a Software Engineer.", "a critical thinker.", "a team player.", "detail oriented.", "creative.", "results driven.", "a problem solver."]
    const [currentIntroTextIndex, setCurrentIntroTextIndex] = useState(0)
    const [currentString, setCurrentString] = useState(introText[currentIntroTextIndex])

    const [displayedText, setDisplayedText] = useState(currentString)
    const [showText, setShowText] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIntroTextIndex((prevIndex) => (prevIndex + 1) % introText.length);
            setCurrentString(introText[currentIntroTextIndex]);
        }, currentString.length * 100 * 2 + 4000);
        return () => clearInterval(interval);
    }, [currentIntroTextIndex]);
    
    useEffect(() => {
        setTimeout(() => {
            runAnimation(currentString);
        }, 1000);
    }, [currentString, currentIntroTextIndex]);

    const runAnimation = (text) => {
        let iteration = 0;
        const totalIterations = text.length * 2 + 20;

        const interval = setInterval(() => {
            setShowText(true)
            let newText;
            
            if (iteration < (text.length + 20)) {
                // Typing animation
                newText = text.slice(0, iteration + 1);
            } else {
                // Backspacing animation
                newText = text.slice(0, text.length + 20 - (iteration - text.length) - 1);
            }
            
            setDisplayedText(newText);
            
            if (iteration >= totalIterations) {
                clearInterval(interval);
                setShowText(false)
            }
            
            iteration += 1;
        }, 100);
    };

    return (
        <div className={styles.iAmDiv}>
            <span>

            <span className={styles.hi}>Hi. <span className={styles.imConnor}> I&apos;m Connor.</span></span>
            <h1 className={styles.iAmH1}>And I am...</h1>
            <span className={styles.iAmSpan}>{currentIntroTextIndex > 1 & showText ? displayedText : null}</span>
            </span>
        </div>
    )
}

export default HomePage;