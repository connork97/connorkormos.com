'use client'

import React, { useState, useEffect } from 'react';

import styles from './HomePage.module.css';

const HomePage = () => {

    const introText = ["", "", "a Full Stack Web Developer.", "a Software Engineer.", "a critical thinker.", "a team player.", "detail oriented.", "creative.", "results driven.", "a problem solver."]
    const [currentIntroTextIndex, setCurrentIntroTextIndex] = useState(0)
    const [currentString, setCurrentString] = useState(introText[currentIntroTextIndex])

    const letters = "abcdefghijklmnopqrstuvwxyz"
    const [displayedText, setDisplayedText] = useState(currentString)

    useEffect(() => {
        setCurrentString(introText[currentIntroTextIndex])
    }, [currentIntroTextIndex])

    useEffect(() => {
        runAnimation(currentString)
    }, [currentString])

    const runAnimation = (text) => {
        let iteration = 0
        const interval = setInterval(() => {
            const newText = text.split("").map((letter, index) => {
                if (index < iteration) {
                    return text[index]
                }
                return letters[Math.floor(Math.random() * 26)]
            }).join("")
            
            setDisplayedText(newText)

            if (iteration >= text.length) clearInterval(interval)

            iteration += 1 / 3
        }, 40)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIntroTextIndex((prevIndex) => (prevIndex + 1) % introText.length)
        }, 5000)
        return () => clearInterval(interval)
    })

    return (
        <div className={styles.iAmDiv}>
            <span className={styles.hi}>Hi.<span className={styles.imConnor}>I&apos;m Connor.</span></span>
            <h1 className={currentIntroTextIndex >= 1 ? styles.iAmH1 : "false"} style={{paddingTop: "10%"}}>
                {currentIntroTextIndex >= 1 && "And I am "}
            </h1>
            <span className={styles.iAmSpan} style={{paddingTop: "15%"}}>{currentIntroTextIndex > 1 && displayedText}</span>
        </div>
    )
}

export default HomePage;