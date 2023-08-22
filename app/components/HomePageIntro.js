'use client'

import React, { useState, useEffect, forwardRef } from 'react';

import styles from './HomePageIntro.module.css';

import Image from 'next/image'

const HomePageIntro = forwardRef(( { introRef } ) => {

    const [hiText, setHiText] = useState("")
    const [connorText, setConnorText] = useState("")
    const [iAmText, setIAmText] = useState("")
    // let hiConnorText = <pre>{hiText + connorText}</pre>
    let hiConnorText = hiText + connorText
    

    useEffect(() => {
        setTimeout(() => {
            typingAnimation("Hi. ", setHiText)
        }, 1000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            typingAnimation("I'm Connor.", setConnorText)
        }, 3000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            typingAnimation("And I am ", setIAmText)
        }, 5500)
    }, [])
    
    useEffect(() => {
        setTimeout(() => {
            setUnderscorePosition((prevPosition) => (prevPosition + 1))
        }, 5500)
    }, [])

    const typingAnimation = (text, name) => {
        let iteration = 0;
        const totalIterations = text.length + 20;

        const interval = setInterval(() => {
            let newText;
            
            if (iteration < (text.length + 20)) {
                // Typing animation
                newText = text.slice(0, iteration + 1);
            }
            
            name(newText);
            
            if (iteration >= totalIterations) {
                name(text)
                clearInterval(interval);
            }
            
            iteration += 1;
            console.log(hiConnorText)
        }, 100);
    };

    const iAmTextArr = ["a Full Stack Web Developer", "a Software Engineer", "a critical thinker", "a team player", "detail oriented", "creative", "results driven", "a problem solver"]
    const [currentIntroTextIndex, setCurrentIntroTextIndex] = useState(0)
    const [currentString, setCurrentString] = useState(iAmTextArr[currentIntroTextIndex])

    const [displayedText, setDisplayedText] = useState(currentString)
    const [showText, setShowText] = useState(false)

    const [underscorePosition, setUnderscorePosition] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIntroTextIndex((prevIndex) => (prevIndex + 1) % iAmTextArr.length);
            setCurrentString(iAmTextArr[currentIntroTextIndex]);
        }, currentString.length * 100 * 2 + 4000);
        return () => clearInterval(interval);
    }, [currentIntroTextIndex]);
    
    useEffect(() => {
        typingBackspacingAnimation(currentString);
    }, [currentString, currentIntroTextIndex]);

    // useEffect(() => {
    //     const iAmDivWidth = iAmDivRef.current.getBoundingClientRect().width
    //     const iAmSpanWidth = iAmSpanRef.current.getBoundingClientRect().width
    //     console.log("div", iAmDivWidth)
    //     console.log("span", iAmSpanWidth)
    // }, [displayedText])

    const typingBackspacingAnimation = (text) => {
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
        <div className={styles.homepageIntroDiv} ref={introRef}>
            <div className={styles.iAmDiv}>
                <span className={styles.hiImConnor}>{hiConnorText}
                    <span className={styles.blinkingUnderscore}>{underscorePosition === 1 && '_'}</span>
                </span>
                <span className={styles.iAmSpan}>{iAmText}
                    <span className={styles.iAmSpan}>{currentIntroTextIndex > 0 & showText ? displayedText : null}
                        <span className={styles.blinkingUnderscore}>{underscorePosition === 2 && '_'}</span>
                    </span>
                </span>
            </div>
        </div>
    )
})

HomePageIntro.displayName = 'HomePageIntro'

export default HomePageIntro;

/* <div className={styles.headshotDiv}>
    <Image
        className={styles.headshotImage}
        src='/Cropped_Personal_Profile_Photo.png'
        alt="Headshot"
        width="350"
        height="350"
        >
    </Image>
</div> */